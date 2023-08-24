import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme(
  {
    hostname: 'https://blog.newbee.website',
    // 作者信息
    author: {
      name: 'GuangBo',
      url: 'https://newbee.website',
      email: '188315385@qq.com'
    },

    // iconAssets: 'fontawesome-with-brands',
    iconAssets: ['//at.alicdn.com/t/c/font_4221652_kifyoah0l2.css', 'iconfont'],
    iconPrefix: 'iconfont icon-',

    logo: '/logo.png',

    repo: 'isguangbo/vp-hope',

    docsDir: 'src',

    // navbar
    navbar,

    // sidebar
    sidebar,

    // footer: '默认页脚',

    displayFooter: true,
    fullscreen: true,
    // rtl: true,

    // 加密配置
    encrypt: {
      config: {
        '/demo/encrypt.html': ['1234']
      }
    },

    // page meta
    // metaLocales: {
    //   editLink: false
    // },
    editLink: false,

    plugins: {
      // 您应该生成并使用您自己的评论服务
      comment: {
        // waline 模式
        provider: 'Waline',
        serverURL: 'https://comment.newbee.website', // your serverURL
        copyright: false
      },
      // comment: {
      //   provider: 'Giscus',
      //   repo: 'vuepress-theme-hope/giscus-discussions',
      //   repoId: 'R_kgDOG_Pt2A',
      //   category: 'Announcements',
      //   categoryId: 'DIC_kwDOG_Pt2M4COD69'
      // },
      // 版权信息
      copyright: {
        global: true,
        author: 'GuangBo',
        license: 'MIT',
        triggerWords: 1
      },
      // 所有功能均已启用演示，仅保留您在此处需要的功能
      mdEnhance: {
        align: true,
        attrs: true,
        chart: true,
        // 代码块分组
        codetabs: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        // 图片懒加载
        imgLazyload: true,
        imgSize: true,
        include: true,
        katex: true,
        mark: true,
        mermaid: true,
        playground: {
          presets: ['ts', 'vue']
        },
        presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em')
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommended'
                }
            }
          }
        ],
        sub: true,
        sup: true,
        // 添加选项卡支持
        tabs: true,
        vPre: true,
        vuePlayground: true
      },
      // 其他组件
      components: {
        // 你想使用的组件
        components: [
          // 'ArtPlayer',
          // 'AudioPlayer',
          'Badge',
          // 'BiliBili',
          // 'CodePen',
          'PDF',
          // 'Replit',
          'Share',
          'SiteInfo'
          // 'StackBlitz',
          // // "VidStack",
          // 'VideoPlayer',
          // 'XiGua',
          // 'YouTube'
        ]
      }

      // blog: true

      // uncomment these if you want a pwa
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cachePic: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    }
  },
  { custom: true }
)
