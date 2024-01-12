import { groupBy } from 'lodash-es'
import { createContentLoader, type ContentData } from 'vitepress'

interface Post {
  title: string
  url: string
  date: string // YYYY-MM-DD
}

// `@types/lodash-es` does not export `Dictionary` type definition.
type Dictionary = ReturnType<typeof transformRawPosts>

declare const data: Dictionary
// Sorted.
export { data }

const extractTitle = (markdown: string): string => {
  const match = markdown.match(/^# (.*)$/m)
  return match ? match[1]! : 'Not Found Title in Markdown'
}

const formatURL = (url: string): string => {
  return url.replace(/\/\d+\./, '/')
}

const transformRawPosts = (rawPosts: ContentData[]) => {
  const posts: Post[] = rawPosts
    .map((post) => ({
      title: extractTitle(post.src!),
      url: formatURL(post.url),
      date: (post.frontmatter.date as Date).toISOString().slice(0, 10),
    }))
    .sort((a, b) => b.date.localeCompare(a.date))

  return groupBy(posts, (post) => post.date.slice(0, 4))
}

export default createContentLoader('blog/*.md', {
  includeSrc: true,
  // raw将不包含任何以点开头的页面，例如 '.example.md'。
  transform: (raw) => transformRawPosts(raw),
})
