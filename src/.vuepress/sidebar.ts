import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/books/': [
    {
      text: '书籍',
      icon: 'tushu1',
      // prefix: '', // '/'
      // 子目录通过文档自动生成
      children: 'structure'
      // 设置分组是否可以折叠
      // collapsible: true
      // children: [{ text: 'ES6快速上手', icon: 'Elasticsearchshuchu', prefix: 'es6快速上手/', children: 'structure', collapsible: true }]
    }
  ],
  '/前端/': [
    {
      text: '前端',
      icon: 'tushu1',
      children: 'structure'
    }
  ]
  // "/": [
  //     "",
  //     {
  //       text: "案例",
  //       icon: "laptop-code",
  //       prefix: "demo/",
  //       link: "demo/",
  //       children: "structure",
  //     },
  //     {
  //       text: "文档",
  //       icon: "book",
  //       prefix: "guide/",
  //       children: "structure",
  //     },
  //     "slides",
  //   ],
  // '/books/': ['' /* /foo/ */, 'one' /* /foo/one.html */, 'two' /* /foo/two.html */],
  // '/bar/': ['' /* /bar/ */, 'three' /* /bar/three.html */, 'four' /* /bar/four.html */],
  // // fallback
  // '/': ['' /* / */, 'contact' /* /contact.html */, 'about' /* /about.html */]
  // '/': [
  //   '',
  //   {
  //     // 必要的，分组的标题文字
  //     text: '指南',
  //     // 可选的, 分组标题对应的图标
  //     icon: 'lightbulb',
  //     // 可选的, 分组标题对应的链接
  //     // link: '/foo/',
  //     prefix: 'guide/',
  //     collapsible: true,
  //     children: ['get-started/', 'interface/', 'layout/', 'markdown/', 'feature/', 'blog/', 'advanced/']
  //   },
  //   {
  //     text: '配置',
  //     icon: 'gears',
  //     prefix: 'config/',
  //     children: ['intro', 'i18n', 'theme/', 'plugins/', 'frontmatter/', 'style']
  //   },
  //   {
  //     text: '教程',
  //     icon: 'signs-post',
  //     prefix: 'cookbook/',
  //     children: ['tutorial/', 'markdown/', 'vuepress/', 'customize/']
  //   },
  //   {
  //     text: '迁移',
  //     icon: 'code-compare',
  //     prefix: 'migration/',
  //     children: ['highlight', 'config', 'page', 'style']
  //   },
  //   {
  //     text: '常见问题',
  //     icon: 'circle-question',
  //     prefix: 'faq/',
  //     children: ['', 'troubleshooting', 'common-error', 'vite', 'safari']
  //   },
  //   'demo/',
  //   'changelog',
  //   'contribution'
  // ],
  // '/zh/guide/': 'structure',
  // '/zh/config/': 'structure',
  // '/zh/cookbook/': 'structure',
  // '/zh/demo/': 'structure'
})
