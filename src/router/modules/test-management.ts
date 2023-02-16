import { RouteRecordRaw } from 'vue-router'

export const testManagement: RouteRecordRaw[] = [
  {
    path: '/test-management',
    meta: { title: '测试管理' },
    redirect: '/test-management/first-test',
    children: [
      {
        path: '/test-management/first-test',
        meta: { title: '第一个测试页面' },
        component: () => import('_v/test-management/first-test/index.vue')
      },
      {
        path: '/test-management/second-test',
        meta: { title: '第二个测试页面' },
        component: () => import('_v/test-management/second-test/index.vue')
      },
    ],
  },
]
