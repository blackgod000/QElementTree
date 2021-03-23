import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: 'documentation' },
      {
        path: 'documentation',
        component: () => import('pages/DocumentationPage.vue')
      },
      {
        path: 'element-tree-builder',
        component: () => import('pages/ElementTreeBuilderPage.vue')
      },
      {
        path: 'element-tree',
        component: () => import('pages/ElementTreePage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
