// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus'

export default defineConfig({
  // 把内容目录当作 pages 目录
  pages: 'src/content/docs',

  integrations: [
    starlight({
      title: 'AsyncX\'s Library',
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
      plugins: [
       starlightGiscus({
           repo: 'A5yncX/Library',
           repoId: 'R_kgDOLCD29g',
           category: 'Announcements',
           categoryId: 'DIC_kwDOLCD29s4CcS0l',
           mapping: 'pathname',
           inputPosition: 'top',
           theme: 'catppuccin_mocha'
       })
     ],
    }),
  ],
});
