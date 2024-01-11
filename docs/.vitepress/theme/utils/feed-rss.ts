import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

const baseUrl = 'https://sugarat.top'
const RSS: RSSOptions = {
  title: 'AsyncX',
  baseUrl,
  copyright: '',
}

export default defineConfig({
  vite: {
    // ↓↓↓↓↓
    plugins: [RssPlugin(RSS)]
    // ↑↑↑↑↑
  }
})