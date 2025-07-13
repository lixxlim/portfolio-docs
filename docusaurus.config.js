import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio-docs',
  tagline: '個人プロジェクトのポートフォリオを貯めておくサイト',
  favicon: 'img/lixlim_logo_white.png',

  future: {
    v4: true,
  },

  url: 'https://lixxlim.github.io',
  baseUrl: '/portfolio-docs/',
  organizationName: 'lixlim',
  projectName: 'portfolio-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/lixlim_logo_white.png',
      navbar: {
        title: 'portfolio-docs',
        logo: {
          alt: 'Logo',
          src: 'img/lixlim_logo_white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'portfolioSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/lixxlim',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            //title: 'BLOG',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            //title: 'RESUME',
            items: [
              {
                label: 'Resume',
                href: 'https://lim.lixlim.com',
              },
            ],
          },
          {
            //title: 'GITHUB',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lixxlim',
              },
            ],
          },
          {
            //title: 'LINKEDIN',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/eunchong-lim-927b9426a',
              },
            ],
          },
          {
            //title: 'CODEPEN',
            items: [
              {
                label: 'CodePen',
                href: 'https://codepen.io/collection/MWamGO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EUNCHONG LIM.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
