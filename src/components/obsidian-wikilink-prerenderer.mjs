// obsidian-wikilink-prerenderer.mjs
// 将 [[FILENAME#TITLENAME|SHOWNAME]] 预渲染为 <a href>[SHOWNAME]</a>
// 支持：同一文本节点多个双链；大小写不敏感；index/README 以目录名做别名，并生成目录路由
// 修正：非 index/README 的文件名段统一按 slug 规则转小写（避免出现 /.../Introduction/）

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'
import { toHtml } from 'hast-util-to-html'
import { h } from 'hastscript'

/** 标题 slug（接近 GitHub 风格）用于 #TITLENAME */
function defaultSlugify(str) {
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/[`*_~\[\]{}()!?.:,;"'<>]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/** 路径片段 slug：用于 URL 的文件名段（目录名保持原样） */
function defaultPathSegmentSlug(name) {
  return String(name)
    .trim()
    .replace(/[`*_~\[\]{}()!?.:,;"'<>]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase()
}

/** 递归列出目录下所有文件 */
async function listFiles(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...(await listFiles(full)))
    else out.push(full)
  }
  return out
}

/** 从 markdown 中提取 ATX 标题，返回 {title, slug}[] */
function extractHeadings(md, slugify) {
  const lines = String(md).split(/\r?\n/)
  const heads = []
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(line)
    if (m) {
      const raw = m[2].replace(/\s#+\s*$/, '')
      heads.push({ title: raw, slug: slugify(raw) })
    }
  }
  return heads
}

/** 预构建索引：key(小写) -> { relPath, url, headings } */
async function buildIndex({
  contentDir,
  baseUrl = '/',
  exts = ['.md', '.mdx'],
  slugify = defaultSlugify,
  pathSegmentSlug = defaultPathSegmentSlug, // 新增：文件名段 slugify
}) {
  const files = (await listFiles(contentDir)).filter(f => exts.includes(path.extname(f)))
  const index = new Map()

  for (const abs of files) {
    const rel = path.relative(contentDir, abs).replace(/\\/g, '/')
    const raw = await fs.readFile(abs, 'utf8')
    const headings = extractHeadings(raw, slugify)

    const parsed = path.parse(rel) // { dir, name, ext, base }
    const basePrefix = baseUrl.replace(/\/$/, '')
    const nameLower = parsed.name.toLowerCase()

    // 生成 URL：index/README 走目录路由；其它文件将“文件名段”转为 slug 小写
    let url
    if (nameLower === 'index' || nameLower === 'readme') {
      const dir = parsed.dir // e.g. 02-diet
      url = `${basePrefix}/${dir ? dir + '/' : ''}`
    } else {
      const nameSlug = pathSegmentSlug(parsed.name) // ← 关键变更
      const relNoExt = (parsed.dir ? parsed.dir + '/' : '') + nameSlug
      url = `${basePrefix}/${relNoExt}/`
    }

    const entry = { relPath: rel, url, headings }

    // 主键：文件名（不含扩展名，小写）
    const mainKey = parsed.name.toLowerCase()
    index.set(mainKey, entry)

    // 别名：如果是 index/README，再加一个“文件夹名”作为键
    if (nameLower === 'index' || nameLower === 'readme') {
      const folder = path.basename(parsed.dir).toLowerCase()
      if (folder && !index.has(folder)) index.set(folder, entry)
    }
  }

  return { index, slugify }
}

/** 解析 [[FILENAME#TITLENAME|SHOWNAME]] */
function parseWikiToken(token) {
  // token = FILENAME#TITLENAME|SHOWNAME  (TITLENAME/SHOWNAME 可省略)
  const [left, show = ''] = token.split('|')
  const [file, title = ''] = left.split('#')
  return { file: file?.trim(), title: title?.trim(), show: show?.trim() }
}

/** 基于索引解析链接（返回 {href, text} 或 null） */
function resolveLink(token, idx) {
  const { file, title, show } = parseWikiToken(token)
  if (!file) return null

  const entry = idx.index.get(file.toLowerCase())
  if (!entry) return null

  let href = entry.url
  let text = show || title || file

  if (title) {
    // 优先用精确标题匹配到的 slug；否则按规则生成
    const hit = entry.headings.find(h => h.title === title)
    const slug = hit ? hit.slug : idx.slugify(title)
    href = `${href}#${slug}`
  }

  return { href, text }
}

export default function prerenderObsidianWikilinks(options) {
  if (!options || !options.contentDir) {
    throw new Error('[prerender-obsidian-wikilinks] options.contentDir is required')
  }

  const settings = {
    baseUrl: '/',
    exts: ['.md', '.mdx'],
    slugify: defaultSlugify,
    pathSegmentSlug: defaultPathSegmentSlug, // 可覆写
    ...options,
  }

  const indexPromise = buildIndex(settings)

  return async (tree) => {
    const idx = await indexPromise
    const promises = []

    visit(tree, 'text', (node) => {
      if (!node?.value) return

      const re = /\[\[([^\]]+)\]\]/g
      if (!re.test(node.value)) return
      re.lastIndex = 0

      const p = Promise.resolve().then(() => {
        const children = []
        let lastIndex = 0
        let m

        while ((m = re.exec(node.value))) {
          const before = node.value.slice(lastIndex, m.index)
          if (before) children.push(before)

          const token = m[1]
          const resolved = resolveLink(token, idx)

          if (resolved) {
            // 文本包裹方括号
            children.push(
              h(
                'a',
                {
                  href: resolved.href,
                  rel: 'noopener noreferrer',
                  style: 'text-decoration: none;',
                },
                ['[', resolved.text, ']']
              )
            )
          } else {
            children.push(`[[${token}]]`)
          }

          lastIndex = re.lastIndex
        }

        const tail = node.value.slice(lastIndex)
        if (tail) children.push(tail)

        const wrapper = h('span', children)
        node.type = 'html'
        node.value = toHtml(wrapper)
      })

      promises.push(p)
    })

    await Promise.all(promises)
  }
}
