// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';

// 引入自定义 remark 插件（Obsidian 双链预渲染）
import prerenderObsidianWikilinks from './src/components/obsidian-wikilink-prerenderer.mjs';

export default defineConfig({
  // 把内容目录当作 pages 目录
  pages: 'src/content/docs',

  // 在 Astro 顶层挂载 remark 插件（而不是放到 starlight.plugins）
  markdown: {
    remarkPlugins: [
      [
        prerenderObsidianWikilinks,
        {
          contentDir: 'src/content/docs', // 你的文档根目录
          baseUrl: '/',                   // 根据站点需要调整，如 '/docs'
          // exts: ['.md', '.mdx'],       // 可选
          // slugify: (t) => customSlug(t) // 可选
        },
      ],
    ],
  },

  integrations: [
    starlight({
      title: "AsyncX's Library",
      logo: {
        src: './src/assets/favicon.svg',
      },
      favicon: './src/assets/favicon.svg',
      lastUpdated: true,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/A5yncX' },
      ],
      sidebar: [
        {
          label: '00 - 网站介绍',
          autogenerate: { directory: '00-intro' },
        },
        {
          label: '01 – code',
          autogenerate: { directory: '01-code' },
        },
        {
          label: '02 – 食谱',
          autogenerate: { directory: '02-diet' },
        },
      ],
      // 这里只放 Starlight 插件对象（如 giscus）；remark 插件不要放在这里
      plugins: [
        starlightGiscus({
          repo: 'A5yncX/Library',
          repoId: 'R_kgDOLCD29g',
          category: 'Announcements',
          categoryId: 'DIC_kwDOLCD29s4CcS0l',
          mapping: 'pathname',
          inputPosition: 'top',
          theme: 'catppuccin_mocha',
        }),
      ],
    }),
  ],
});
