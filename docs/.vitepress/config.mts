import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  title: "📖 Library",
  description: "A Library",
  lastUpdated: true,
  themeConfig: {
    footer: {
      // copyright: 'Copyright © 2019-present Evan You'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '联系', link: 'https://asyncx.top/zh/#contact' }
    ],
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    sidebar: generateSidebar({ //自动sidebar
      collapsed: true, //自动折叠
      documentRootPath: '/docs', //自动读取根目录
      useTitleFromFrontmatter: true, //读取fontmatter的标题属性,如果没有使用文件名
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/A5yncX/Library' }
    ],

    search: {
      provider: 'local'
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
    },
  },

  
})


