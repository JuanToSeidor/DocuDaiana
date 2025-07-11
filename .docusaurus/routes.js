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
    component: ComponentCreator('/blog', '16f'),
    exact: true
  },
  {
    path: '/blog/Agentes IA',
    component: ComponentCreator('/blog/Agentes IA', 'c12'),
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
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '495'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/buenas-practicas',
    component: ComponentCreator('/blog/tags/buenas-practicas', 'e8f'),
    exact: true
  },
  {
    path: '/blog/tags/ia',
    component: ComponentCreator('/blog/tags/ia', '61d'),
    exact: true
  },
  {
    path: '/blog/tags/promp',
    component: ComponentCreator('/blog/tags/promp', '3b2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '813'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6e4'),
    routes: [
      {
        path: '/docs/1.0',
        component: ComponentCreator('/docs/1.0', '00b'),
        routes: [
          {
            path: '/docs/1.0',
            component: ComponentCreator('/docs/1.0', 'ddc'),
            routes: [
              {
                path: '/docs/1.0/anexos',
                component: ComponentCreator('/docs/1.0/anexos', 'ee4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/conexiones/onedrive',
                component: ComponentCreator('/docs/1.0/conexiones/onedrive', 'fc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/conexiones/sharepoint',
                component: ComponentCreator('/docs/1.0/conexiones/sharepoint', 'ae0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/configuración/cuenta',
                component: ComponentCreator('/docs/1.0/configuración/cuenta', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/configuración/perfil',
                component: ComponentCreator('/docs/1.0/configuración/perfil', '509'),
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
                path: '/docs/1.0/integraciones/teams',
                component: ComponentCreator('/docs/1.0/integraciones/teams', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/integraciones/whatsapp',
                component: ComponentCreator('/docs/1.0/integraciones/whatsapp', '3c8'),
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
                path: '/docs/1.0/Paginas/AsistentesVirtuales',
                component: ComponentCreator('/docs/1.0/Paginas/AsistentesVirtuales', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Paginas/Chats',
                component: ComponentCreator('/docs/1.0/Paginas/Chats', '7b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Paginas/conversaciones',
                component: ComponentCreator('/docs/1.0/Paginas/conversaciones', '349'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Paginas/Dashboard',
                component: ComponentCreator('/docs/1.0/Paginas/Dashboard', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Paginas/equipos',
                component: ComponentCreator('/docs/1.0/Paginas/equipos', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Paginas/seguridad',
                component: ComponentCreator('/docs/1.0/Paginas/seguridad', 'dd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Secciones/Anexos',
                component: ComponentCreator('/docs/1.0/Secciones/Anexos', '7b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Secciones/Arquitectura',
                component: ComponentCreator('/docs/1.0/Secciones/Arquitectura', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Secciones/Confidencialidad',
                component: ComponentCreator('/docs/1.0/Secciones/Confidencialidad', '29e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Secciones/log',
                component: ComponentCreator('/docs/1.0/Secciones/log', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Secciones/mantenimiento',
                component: ComponentCreator('/docs/1.0/Secciones/mantenimiento', 'c69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Secciones/operaciones',
                component: ComponentCreator('/docs/1.0/Secciones/operaciones', '59b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/Secciones/seguridad',
                component: ComponentCreator('/docs/1.0/Secciones/seguridad', '3d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/terminosycondiciones',
                component: ComponentCreator('/docs/1.0/terminosycondiciones', 'd14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/uso/consola',
                component: ComponentCreator('/docs/1.0/uso/consola', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0/uso/sso',
                component: ComponentCreator('/docs/1.0/uso/sso', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/2.0.0',
        component: ComponentCreator('/docs/2.0.0', '311'),
        routes: [
          {
            path: '/docs/2.0.0',
            component: ComponentCreator('/docs/2.0.0', '6df'),
            routes: [
              {
                path: '/docs/2.0.0/category/empieza-ahora',
                component: ComponentCreator('/docs/2.0.0/category/empieza-ahora', 'a4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/ConfiguracióndeEntorno/onbording',
                component: ComponentCreator('/docs/2.0.0/ConfiguracióndeEntorno/onbording', 'b43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/ConfiguracióndeEntorno/primer',
                component: ComponentCreator('/docs/2.0.0/ConfiguracióndeEntorno/primer', 'cd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/implementacion',
                component: ComponentCreator('/docs/2.0.0/implementacion', '09d'),
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
                path: '/docs/2.0.0/Plataforma/agentes/',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/', '2ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/agentes/administrar',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/administrar', '190'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/agentes/chats',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/chats', 'f26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/agentes/crear',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/crear', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/agentes/editar/',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/editar/', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/agentes/editar/consola',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/editar/consola', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/agentes/integraciones/teams',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/integraciones/teams', 'dc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/agentes/integraciones/whatsapp',
                component: ComponentCreator('/docs/2.0.0/Plataforma/agentes/integraciones/whatsapp', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/dashboard/estadisticas',
                component: ComponentCreator('/docs/2.0.0/Plataforma/dashboard/estadisticas', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/dashboard/reportes',
                component: ComponentCreator('/docs/2.0.0/Plataforma/dashboard/reportes', '4ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/gestion/',
                component: ComponentCreator('/docs/2.0.0/Plataforma/gestion/', 'd4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/gestion/acceso',
                component: ComponentCreator('/docs/2.0.0/Plataforma/gestion/acceso', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/gestion/equipo',
                component: ComponentCreator('/docs/2.0.0/Plataforma/gestion/equipo', '432'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/gestion/rol',
                component: ComponentCreator('/docs/2.0.0/Plataforma/gestion/rol', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/gestion/usuarios',
                component: ComponentCreator('/docs/2.0.0/Plataforma/gestion/usuarios', '032'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/historial',
                component: ComponentCreator('/docs/2.0.0/Plataforma/historial', 'ce9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/perfil',
                component: ComponentCreator('/docs/2.0.0/Plataforma/perfil', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2.0.0/Plataforma/wizzard',
                component: ComponentCreator('/docs/2.0.0/Plataforma/wizzard', '9b9'),
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
    component: ComponentCreator('/ReleaseNotes', 'c9e'),
    routes: [
      {
        path: '/ReleaseNotes',
        component: ComponentCreator('/ReleaseNotes', 'a11'),
        routes: [
          {
            path: '/ReleaseNotes',
            component: ComponentCreator('/ReleaseNotes', '446'),
            routes: [
              {
                path: '/ReleaseNotes/',
                component: ComponentCreator('/ReleaseNotes/', '4ee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ReleaseNotes/110',
                component: ComponentCreator('/ReleaseNotes/110', '787'),
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
    path: '/Studio',
    component: ComponentCreator('/Studio', '2ab'),
    routes: [
      {
        path: '/Studio',
        component: ComponentCreator('/Studio', '7f4'),
        routes: [
          {
            path: '/Studio',
            component: ComponentCreator('/Studio', '0ce'),
            routes: [
              {
                path: '/Studio/',
                component: ComponentCreator('/Studio/', '0a8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/entrenamiento/',
                component: ComponentCreator('/Studio/entrenamiento/', '401'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/entrenamiento/Develop',
                component: ComponentCreator('/Studio/entrenamiento/Develop', '466'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/entrenamiento/general',
                component: ComponentCreator('/Studio/entrenamiento/general', '5f9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/entrenamiento/nodos',
                component: ComponentCreator('/Studio/entrenamiento/nodos', 'c40'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/entrenamiento/rag',
                component: ComponentCreator('/Studio/entrenamiento/rag', '55d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/',
                component: ComponentCreator('/Studio/secciones/', '352'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/agentsflows/',
                component: ComponentCreator('/Studio/secciones/agentsflows/', '84c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/agentsflows/Multi-Agents',
                component: ComponentCreator('/Studio/secciones/agentsflows/Multi-Agents', 'e29'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/agentsflows/sequential-agents',
                component: ComponentCreator('/Studio/secciones/agentsflows/sequential-agents', 'c29'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/api/',
                component: ComponentCreator('/Studio/secciones/api/', 'eef'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/chatflows',
                component: ComponentCreator('/Studio/secciones/chatflows', 'c00'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/docs',
                component: ComponentCreator('/Studio/secciones/docs', '348'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/embled',
                component: ComponentCreator('/Studio/secciones/embled', 'a9b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Studio/secciones/variables',
                component: ComponentCreator('/Studio/secciones/variables', '7af'),
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
