import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', '685'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/en/blog/authors/all-sebastien-lorber-articles', 'fa5'),
    exact: true
  },
  {
    path: '/en/blog/authors/yangshun',
    component: ComponentCreator('/en/blog/authors/yangshun', '26c'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', 'e3f'),
    exact: true
  },
  {
    path: '/en/blog/greetings',
    component: ComponentCreator('/en/blog/greetings', '888'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '3fa'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', 'd71'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', 'db4'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', 'b0a'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', '08b'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', '73b'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '31d'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'f51'),
    routes: [
      {
        path: '/en/docs/1.0',
        component: ComponentCreator('/en/docs/1.0', '713'),
        routes: [
          {
            path: '/en/docs/1.0',
            component: ComponentCreator('/en/docs/1.0', 'f34'),
            routes: [
              {
                path: '/en/docs/1.0/category/realece-notes',
                component: ComponentCreator('/en/docs/1.0/category/realece-notes', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/category/tutorial---basics',
                component: ComponentCreator('/en/docs/1.0/category/tutorial---basics', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/category/tutorial---extras',
                component: ComponentCreator('/en/docs/1.0/category/tutorial---extras', '8f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/hello',
                component: ComponentCreator('/en/docs/1.0/hello', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/intro',
                component: ComponentCreator('/en/docs/1.0/intro', 'a55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/ReleaseNotes/',
                component: ComponentCreator('/en/docs/1.0/ReleaseNotes/', '78e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/ReleaseNotes/1-9-9',
                component: ComponentCreator('/en/docs/1.0/ReleaseNotes/1-9-9', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/ReleaseNotes/2-0-0',
                component: ComponentCreator('/en/docs/1.0/ReleaseNotes/2-0-0', '191'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/ReleaseNotes/2-0-1',
                component: ComponentCreator('/en/docs/1.0/ReleaseNotes/2-0-1', '429'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/1.0/tutorial-basics/congratulations', 'b67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/1.0/tutorial-basics/create-a-blog-post', '6f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/1.0/tutorial-basics/create-a-document', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/1.0/tutorial-basics/create-a-page', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/1.0/tutorial-basics/deploy-your-site', '177'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/1.0/tutorial-basics/markdown-features', '273'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/1.0/tutorial-extras/manage-docs-versions', '089'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/1.0/tutorial-extras/translate-your-site', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/en/docs/2.0.0',
        component: ComponentCreator('/en/docs/2.0.0', 'dd6'),
        routes: [
          {
            path: '/en/docs/2.0.0',
            component: ComponentCreator('/en/docs/2.0.0', 'a1b'),
            routes: [
              {
                path: '/en/docs/2.0.0/Configuración de Entorno/onbording',
                component: ComponentCreator('/en/docs/2.0.0/Configuración de Entorno/onbording', '731'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/intro',
                component: ComponentCreator('/en/docs/2.0.0/intro', '3b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/Conexion',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/Conexion', '362'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/Loguin',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/Loguin', '586'),
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
    path: '/en/ReleaseNotes',
    component: ComponentCreator('/en/ReleaseNotes', '8b6'),
    routes: [
      {
        path: '/en/ReleaseNotes',
        component: ComponentCreator('/en/ReleaseNotes', 'f82'),
        routes: [
          {
            path: '/en/ReleaseNotes',
            component: ComponentCreator('/en/ReleaseNotes', '925'),
            routes: [
              {
                path: '/en/ReleaseNotes/',
                component: ComponentCreator('/en/ReleaseNotes/', '17d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/ReleaseNotes/2-0-0',
                component: ComponentCreator('/en/ReleaseNotes/2-0-0', '426'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/ReleaseNotes/2-0-1',
                component: ComponentCreator('/en/ReleaseNotes/2-0-1', 'b21'),
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
    path: '/en/',
    component: ComponentCreator('/en/', '6c2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
