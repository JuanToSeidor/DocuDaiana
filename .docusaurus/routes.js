import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'b99'),
    exact: true
  },
  {
    path: '/en/blog/Agentes IA',
    component: ComponentCreator('/en/blog/Agentes IA', 'c7c'),
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
    component: ComponentCreator('/en/blog/authors/all-sebastien-lorber-articles', 'ec4'),
    exact: true
  },
  {
    path: '/en/blog/authors/yangshun',
    component: ComponentCreator('/en/blog/authors/yangshun', 'a2e'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/buenas-practicas',
    component: ComponentCreator('/en/blog/tags/buenas-practicas', '25d'),
    exact: true
  },
  {
    path: '/en/blog/tags/ia',
    component: ComponentCreator('/en/blog/tags/ia', '640'),
    exact: true
  },
  {
    path: '/en/blog/tags/promp',
    component: ComponentCreator('/en/blog/tags/promp', '37b'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '09a'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '5d6'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '1f3'),
    routes: [
      {
        path: '/en/docs/1.0',
        component: ComponentCreator('/en/docs/1.0', 'fdf'),
        routes: [
          {
            path: '/en/docs/1.0',
            component: ComponentCreator('/en/docs/1.0', 'a69'),
            routes: [
              {
                path: '/en/docs/1.0/anexos',
                component: ComponentCreator('/en/docs/1.0/anexos', '666'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/conexiones/onedrive',
                component: ComponentCreator('/en/docs/1.0/conexiones/onedrive', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/conexiones/sharepoint',
                component: ComponentCreator('/en/docs/1.0/conexiones/sharepoint', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/configuración/cuenta',
                component: ComponentCreator('/en/docs/1.0/configuración/cuenta', '48e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/configuración/perfil',
                component: ComponentCreator('/en/docs/1.0/configuración/perfil', '1ed'),
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
                path: '/en/docs/1.0/integraciones/teams',
                component: ComponentCreator('/en/docs/1.0/integraciones/teams', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/integraciones/whatsapp',
                component: ComponentCreator('/en/docs/1.0/integraciones/whatsapp', '7a8'),
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
                path: '/en/docs/1.0/Paginas/AsistentesVirtuales',
                component: ComponentCreator('/en/docs/1.0/Paginas/AsistentesVirtuales', '7c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Paginas/Chats',
                component: ComponentCreator('/en/docs/1.0/Paginas/Chats', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Paginas/conversaciones',
                component: ComponentCreator('/en/docs/1.0/Paginas/conversaciones', 'ff9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Paginas/Dashboard',
                component: ComponentCreator('/en/docs/1.0/Paginas/Dashboard', '429'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Paginas/equipos',
                component: ComponentCreator('/en/docs/1.0/Paginas/equipos', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Paginas/seguridad',
                component: ComponentCreator('/en/docs/1.0/Paginas/seguridad', '783'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Secciones/Anexos',
                component: ComponentCreator('/en/docs/1.0/Secciones/Anexos', '4f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Secciones/Arquitectura',
                component: ComponentCreator('/en/docs/1.0/Secciones/Arquitectura', '915'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Secciones/Confidencialidad',
                component: ComponentCreator('/en/docs/1.0/Secciones/Confidencialidad', 'f18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Secciones/log',
                component: ComponentCreator('/en/docs/1.0/Secciones/log', 'bdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Secciones/mantenimiento',
                component: ComponentCreator('/en/docs/1.0/Secciones/mantenimiento', '117'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Secciones/operaciones',
                component: ComponentCreator('/en/docs/1.0/Secciones/operaciones', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/Secciones/seguridad',
                component: ComponentCreator('/en/docs/1.0/Secciones/seguridad', '38f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/terminosycondiciones',
                component: ComponentCreator('/en/docs/1.0/terminosycondiciones', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/uso/consola',
                component: ComponentCreator('/en/docs/1.0/uso/consola', 'f1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0/uso/sso',
                component: ComponentCreator('/en/docs/1.0/uso/sso', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/en/docs/2.0.0',
        component: ComponentCreator('/en/docs/2.0.0', '940'),
        routes: [
          {
            path: '/en/docs/2.0.0',
            component: ComponentCreator('/en/docs/2.0.0', '26b'),
            routes: [
              {
                path: '/en/docs/2.0.0/category/empieza-ahora',
                component: ComponentCreator('/en/docs/2.0.0/category/empieza-ahora', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/ConfiguracióndeEntorno/onbording',
                component: ComponentCreator('/en/docs/2.0.0/ConfiguracióndeEntorno/onbording', 'b14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/ConfiguracióndeEntorno/primer',
                component: ComponentCreator('/en/docs/2.0.0/ConfiguracióndeEntorno/primer', '1a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/intro',
                component: ComponentCreator('/en/docs/2.0.0/intro', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/agentes/',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/agentes/', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/agentes/administrar',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/agentes/administrar', '045'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/agentes/chats',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/agentes/chats', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/agentes/crear',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/agentes/crear', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/dashboard/estadisticas',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/dashboard/estadisticas', '2cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/dashboard/midainaa',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/dashboard/midainaa', 'b81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/dashboard/reportes',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/dashboard/reportes', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/gestion/',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/gestion/', 'd3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/gestion/acceso',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/gestion/acceso', '431'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/gestion/equipo',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/gestion/equipo', '666'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/gestion/rol',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/gestion/rol', '578'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/gestion/usuarios',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/gestion/usuarios', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/historial',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/historial', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/2.0.0/Plataforma/wizzard',
                component: ComponentCreator('/en/docs/2.0.0/Plataforma/wizzard', 'b9e'),
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
    component: ComponentCreator('/en/ReleaseNotes', '4c3'),
    routes: [
      {
        path: '/en/ReleaseNotes',
        component: ComponentCreator('/en/ReleaseNotes', '1e2'),
        routes: [
          {
            path: '/en/ReleaseNotes',
            component: ComponentCreator('/en/ReleaseNotes', 'ee3'),
            routes: [
              {
                path: '/en/ReleaseNotes/',
                component: ComponentCreator('/en/ReleaseNotes/', 'f0e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/ReleaseNotes/110',
                component: ComponentCreator('/en/ReleaseNotes/110', 'a0c'),
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
    path: '/en/Studio',
    component: ComponentCreator('/en/Studio', 'd55'),
    routes: [
      {
        path: '/en/Studio',
        component: ComponentCreator('/en/Studio', '22a'),
        routes: [
          {
            path: '/en/Studio',
            component: ComponentCreator('/en/Studio', '18d'),
            routes: [
              {
                path: '/en/Studio/',
                component: ComponentCreator('/en/Studio/', '750'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/entrenamiento/',
                component: ComponentCreator('/en/Studio/entrenamiento/', '674'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/entrenamiento/Develop',
                component: ComponentCreator('/en/Studio/entrenamiento/Develop', 'fa4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/entrenamiento/general',
                component: ComponentCreator('/en/Studio/entrenamiento/general', '3cf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/entrenamiento/nodos',
                component: ComponentCreator('/en/Studio/entrenamiento/nodos', '630'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/entrenamiento/rag',
                component: ComponentCreator('/en/Studio/entrenamiento/rag', 'ab2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/',
                component: ComponentCreator('/en/Studio/secciones/', 'fb7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/agentsflows/',
                component: ComponentCreator('/en/Studio/secciones/agentsflows/', '34c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/agentsflows/Multi-Agents',
                component: ComponentCreator('/en/Studio/secciones/agentsflows/Multi-Agents', 'bba'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/agentsflows/sequential-agents',
                component: ComponentCreator('/en/Studio/secciones/agentsflows/sequential-agents', 'd3e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/api/',
                component: ComponentCreator('/en/Studio/secciones/api/', 'f0f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/chatflows',
                component: ComponentCreator('/en/Studio/secciones/chatflows', '12e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/docs',
                component: ComponentCreator('/en/Studio/secciones/docs', '03a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/embled',
                component: ComponentCreator('/en/Studio/secciones/embled', '376'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/Studio/secciones/variables',
                component: ComponentCreator('/en/Studio/secciones/variables', '649'),
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
