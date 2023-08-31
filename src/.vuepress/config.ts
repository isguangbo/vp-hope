import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',

  lang: 'zh-CN',
  // title: 'test',
  // description: 'description',

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),

    // 搜索插件
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
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
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
