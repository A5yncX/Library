// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 把内容目录当作 pages 目录
  pages: 'src/content/docs',

  integrations: [
    starlight({
      title: 'My Docs',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
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
    }),
  ],
});
