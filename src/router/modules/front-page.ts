import { RouteRecordRaw } from 'vue-router'

export const frontPage: RouteRecordRaw[] = [
  {
    path: '/front-page',
    meta: { title: '首页' },
    component: () => import('_v/front-page/index.vue'),
    children: [],
  },
]
