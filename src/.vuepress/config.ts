import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',

  lang: 'zh-CN',
  title: '文档演示',
  description: 'vuepress-theme-hope 的文档演示',

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: 'DW1CQFOOI5',
      apiKey: 'a7d25e3793c5148c4024d84e7da10cbd',
      // a7d25e3793c5148c4024d84e7da10cbd       a1cea2b701ecf0f51c847bfb5b585632
      indexName: 'newbee',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档'
        }
      },

      // 是否禁用所有的个性化功能：最近的搜索、收藏的搜索结果等 默认值 false
      disableUserPersonalization: false
    })
  ],
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的页脚组件改为用户 .vuepress/components 下的 HomePage.vue
    // '@theme-hope/components/PageFooter': path.resolve(__dirname, './components/PageFooter.vue')
  }
  // Enable it with pwa
  // shouldPrefetch: false,
})
