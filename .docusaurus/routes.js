import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '16d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '92d'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', 'cca'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '228'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '132'),
    routes: [
      {
        path: '/docs/1.0',
        component: ComponentCreator('/docs/1.0', '5bd'),
        routes: [
          {
            path: '/docs/1.0',
            component: ComponentCreator('/docs/1.0', 'fbf'),
            routes: [
              {
                path: '/docs/1.0/category/realece-notes',
                component: ComponentCreator('/docs/1.0/category/realece-notes', '0a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/category/tutorial---basics',
                component: ComponentCreator('/docs/1.0/category/tutorial---basics', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/category/tutorial---extras',
                component: ComponentCreator('/docs/1.0/category/tutorial---extras', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/hello',
                component: ComponentCreator('/docs/1.0/hello', '78a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/intro',
                component: ComponentCreator('/docs/1.0/intro', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/ReleaseNotes/',
                component: ComponentCreator('/docs/1.0/ReleaseNotes/', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/ReleaseNotes/1-9-9',
                component: ComponentCreator('/docs/1.0/ReleaseNotes/1-9-9', '5a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/ReleaseNotes/2-0-0',
                component: ComponentCreator('/docs/1.0/ReleaseNotes/2-0-0', '1b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/ReleaseNotes/2-0-1',
                component: ComponentCreator('/docs/1.0/ReleaseNotes/2-0-1', 'fb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/1.0/tutorial-basics/congratulations', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/1.0/tutorial-basics/create-a-blog-post', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/1.0/tutorial-basics/create-a-document', '416'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/1.0/tutorial-basics/create-a-page', '81c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/1.0/tutorial-basics/deploy-your-site', '571'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/1.0/tutorial-basics/markdown-features', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/1.0/tutorial-extras/manage-docs-versions', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/1.0/tutorial-extras/translate-your-site', 'f26'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/2.0.0',
        component: ComponentCreator('/docs/2.0.0', '5f4'),
        routes: [
          {
            path: '/docs/2.0.0',
            component: ComponentCreator('/docs/2.0.0', 'aab'),
            routes: [
              {
                path: '/docs/2.0.0/Configuración de Entorno/onbording',
                component: ComponentCreator('/docs/2.0.0/Configuración de Entorno/onbording', 'c55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/intro',
                component: ComponentCreator('/docs/2.0.0/intro', '950'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/intro',
                component: ComponentCreator('/docs/2.0.0/intro', '623'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/Conexion',
                component: ComponentCreator('/docs/2.0.0/Plataforma/Conexion', '34c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/Loguin',
                component: ComponentCreator('/docs/2.0.0/Plataforma/Loguin', 'd3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/TesterJuan',
                component: ComponentCreator('/docs/2.0.0/TesterJuan', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ReleaseNotes',
    component: ComponentCreator('/ReleaseNotes', 'e68'),
    routes: [
      {
        path: '/ReleaseNotes',
        component: ComponentCreator('/ReleaseNotes', 'a79'),
        routes: [
          {
            path: '/ReleaseNotes',
            component: ComponentCreator('/ReleaseNotes', 'd1c'),
            routes: [
              {
                path: '/ReleaseNotes/',
                component: ComponentCreator('/ReleaseNotes/', 'fb2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ReleaseNotes/2-0-0',
                component: ComponentCreator('/ReleaseNotes/2-0-0', '330'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ReleaseNotes/2-0-1',
                component: ComponentCreator('/ReleaseNotes/2-0-1', 'ab4'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
