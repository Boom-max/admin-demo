import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from 'vue-router'
import Layout from '_c/Layout/index.vue'
import { frontPage } from './modules/front-page'
import { testManagement } from './modules/test-management'
import { getUser } from '_l/utils'

// 免登录页面路由白名单
export const whiteList: Array<string> = ['/login']

export const routerList: Array<RouteRecordRaw> = [
  ...frontPage,
  ...testManagement,
]
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/front-page',
    children: [...routerList],
  },
  {
    path: '/login',
    component: () => import('_v/login/index.vue'),
    meta: { title: '登录' },
  },
]
const router: Router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  if (getUser()) {
    if (to.path === '/login') {
      // 有用户信息时禁止进入登录页面
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }

  window.document.title = `${to.meta.title}`
})
export default router
