// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio-docs',
  tagline: '個人プロジェクトのポートフォリオを貯めておくサイト',
  favicon: 'img/lixlim_logo_mini.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lixxlim.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/portfolio-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lixlim', // Usually your GitHub org/user name.
  projectName: 'portfolio-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
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
      // Replace with your project's social card
      image: 'img/lixlim_logo.png',
      navbar: {
        title: 'portfolio-docs',
        logo: {
          alt: 'Logo',
          src: 'img/lixlim_logo_mini.ico',
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
          // {
          //   title: 'Frontendプロジェクト',
          //   items: [
          //     {
          //       label: 'ECサイト (React)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'スレッド式掲示板 (React)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: '社内向け告知掲示板 (React/Bootstrap5)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'レシピー共有サイト (React)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'ホテル予約サイト (React)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'コーポレートサイト (React)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'モバイルオーダーシステム (React)',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Backendプロジェクト',
          //   items: [
          //     {
          //       label: 'REST API (with SpringBoot)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'REST API (with Node.js)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'REST API (with Django)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'REST API (with Gin)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'GraphQL API (with SpringBoot)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'gRPC (with SpringBoot)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Batch (with SpringBatch)',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Desktopアプリケーション',
          //   items: [
          //     {
          //       label: 'ERP (with C#/Winforms)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'バックオフィス (with C#/WPF)',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'その他ツール',
          //   items: [
          //     {
          //       label: 'Liquibase TUI Tool (with Batch File)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Gemini TUI Tool (with Bash Script)',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'SNSなど',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Profile.lixlim.com',
                href: 'https://profile.lixlim.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lixxlim',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/eunchong-lim-927b9426a',
              },
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
