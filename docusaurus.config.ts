import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { version } from 'react';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Daiana',
  tagline: 'Simplifica tu atención al cliente con un chatbot Inteligente',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://daianadmo.seidoranalytics.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Seidor', // Usually your GitHub org/user name.
  projectName: 'Daiana Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JuanToSeidor/DocuDaiana/tree/master/',
            
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Current',
              path: '2.0.0',
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'realece', 
        path: 'ReleaseNotes',
        routeBasePath: 'ReleaseNotes',
        // ... otras configuraciones específicas para "sistemas"
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Daiana',
      logo: {
        alt: 'Daiana Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guia',
        },
        {
          to: '/ReleaseNotes',
          label: 'Notas de version',
        },
        

        {to: '/blog', label: 'Blog', position: 'left'},
        
        {
          type: 'docsVersionDropdown',
          position: 'right',
          label: 'Version'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Buenas practicas',
              to: './blog/021-02-28-greetings.md'
            }
          ],
        },
        
      ],
      
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
