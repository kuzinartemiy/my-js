/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyJavaScript',
  tagline:
    'Руководства, шпаргалки, вопросы и другие материалы по JavaScript, React, TypeScript, Node.js, Express, Prisma, GraphQL, Docker и множеству других технологий, связанных с разработкой веб-приложений.',
  url: 'https://my-js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'harryheman', // Usually your GitHub org/user name.
  projectName: 'my-js', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/harryheman/my-js/tree/master/',
          breadcrumbs: false
        },
        blog: {
          blogTitle: 'Блог по веб-разработке',
          blogDescription:
            'Блог по разработке приложений на JavaScript, React, TypeScript, Node.js и других технологиях',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/harryheman/my-js/tree/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json'
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3c3c3c'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#3c3c3c'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo.png'
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.png',
            color: '#3c3c3c'
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.png'
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#3c3c3c'
          }
        ]
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'MyJavaScript',
        logo: {
          alt: 'MyJavaScript Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'guide/intro-guide',
            position: 'left',
            label: 'Руководства'
          },
          {
            type: 'doc',
            docId: 'cheatsheet/intro-cheatsheet',
            position: 'left',
            label: 'Шпаргалки'
          },
          {
            type: 'doc',
            docId: 'other/intro-other',
            position: 'left',
            label: 'Другое'
          },
          {
            type: 'doc',
            docId: 'links/intro-links',
            position: 'left',
            label: 'Cсылки'
          },
          { to: 'blog', label: 'Блог', position: 'left' },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/harryheman/my-js',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Контакты',
            items: [
              {
                html: '<p class="footer__link"><img src="../../img/github.png" alt="" width="32" height="32"> <a href="https://github.com/harryheman">harryheman</a></p>'
              },
              {
                html: '<p class="footer__link"><img src="../../img/telegram.png" alt="" width="32" height="32"> @igoragapov</p>'
              },
              {
                html: '<p class="footer__link"><img src="../../img/email.png" alt="" width="32" height="32"> aio350@yahoo.com</p>'
              },
              {
                html: '<p class="footer__link"><img src="../../img/email.png" alt="" width="32" height="32"> aio350@mail.ru</p>'
              },
              {
                label: 'Habr',
                href: 'https://habr.com/ru/users/aio350'
              }
            ]
          }
        ],
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `
          Copyright © ${new Date().getFullYear()}. MyJavaScript. <br />
          Built by <a href="https://github.com/harryheman" target="_blank" rel="noopener noreferrer">Igor Agapov</a> with&nbsp;🖤&nbsp;&nbsp;&amp; <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <br />
          Deploy on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.
        `
      },
      hideableSidebar: true,
      autoCollapseSidebarCategories: true
    })
}

module.exports = config
