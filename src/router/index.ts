import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myDetail/:meId',
    name: 'myDetail',
    component: () => import('../views/myDetail.vue')
  },
  {
    path: '/axDetail/:Id',
    name: 'axDetail',
    component: () => import('../views/axDetail.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/myJson',
    name: 'myJson',
    component: () => import('../views/myJson.vue')
  },
  {
    path: '/myAxios',
    name: 'myAxios',
    component: () => import('../views/myAxios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
