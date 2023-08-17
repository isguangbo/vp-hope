import { navbar } from 'vuepress-theme-hope'

export default navbar(
  [
    '/',
    '/demo/',
    {
      text: '指南',
      icon: 'lightbulb',
      prefix: '/guide/',
      children: [
        {
          text: 'Bar',
          icon: 'lightbulb',
          prefix: 'bar/',
          children: ['baz', { text: '...', icon: 'ellipsis', link: '' }]
        },
        {
          text: 'Foo',
          icon: 'lightbulb',
          prefix: 'foo/',
          children: ['ray', { text: '...', icon: 'ellipsis', link: '' }]
        }
      ]
    },
    {
      text: '书籍',
      icon: 'book',
      prefix: '/books/',
      children: [
        {
          text: 'ES6',
          icon: 'book',
          prefix: 'es/',
          children: [{ text: 'ES6快速上手', icon: 'book', link: '' }]
        },
        {
          text: '1',
          icon: 'book',
          link: '1/'
        },
        {
          text: '2',
          icon: 'book',
          link: '2/'
        }
      ]
    }
  ]
  // [
  // {
  //   text: '前端',
  //   children: [
  //     {
  //       text: '书籍',
  //       children: [
  //         {
  //           text: 'ES6',
  //           link: '/books/ES6.md',
  //           activeMatch: '/books/'
  //         },
  //         {
  //           text: '面试宝典',
  //           link: '/interview/questions.md',
  //           activeMatch: '/interview/'
  //         }
  //       ]
  //     },
  //     {
  //       text: 'HTML',
  //       children: [
  //         {
  //           text: 'HTML基础',
  //           link: '/demo1/1.md'
  //         }
  //       ]
  //     }
  //   ]
  // }
  // {
  //   text: '基础',
  //   icon: 'circle-info',
  //   children: ['/books/es6.md', '/zh/basic/vuepress.md']
  // }
  // ]
)
