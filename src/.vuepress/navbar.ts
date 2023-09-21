import { navbar } from 'vuepress-theme-hope'

export default navbar(
  [
    '/',
    {
      text: '书籍',
      icon: 'yewutubiao_tushuguanlixitong',
      prefix: '/books/',
      children: [
        {
          text: 'ES6快速上手',
          icon: 'Elasticsearchshuchu',
          link: '📚es6快速上手/',
          prefix: ''
        },
        {
          text: '新继教大学英语',
          icon: 'english',
          link: '📚新继教大学英语/',
          prefix: ''
        }
      ]
    },
    {
      text: '前端',
      icon: '',
      prefix: '/前端/',
      children: [
        {
          text: '面试题',
          icon: 'english',
          link: '面试题/',
          prefix: ''
        }
      ]
    },

    '/photos/'
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
