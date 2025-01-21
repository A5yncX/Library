import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

const baseUrl = 'https://lib.asyncx.top'
const RSS: RSSOptions = {
  title: 'AsyncX\'s Library',
  baseUrl,
  language: "zh",
  copyright: '-',
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [RssPlugin(RSS)]
  },
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  title: "AsyncX's Library",
  description: "A Library",
  lastUpdated: false,
  markdown: {
    math: true
  },
  themeConfig: { 
    logo: '/logo.svg',
    // footer: {
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    nav: [
      { text: '个人主页', link: 'https://asyncx.top' },
      { text: '博客', link: 'https://blog.asyncx.top' },
      // { text: '联系我', link: 'https://asyncx.top/contact' }
    ],
    // lastUpdated: {
    //   text: '更新于',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'short'
    //   }
    // },

    sidebar: generateSidebar({ //自动sidebar
      collapsed: false, //自动折叠
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
      label: '📖目录',
      level: [1,6],
    },
  },

  
})


