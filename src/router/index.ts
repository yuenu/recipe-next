import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/search',
    name: 'searchResult',
    component: () => import(/* webpackChunkName: "search" */ '@/views/SearchResult.vue')
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: () => import(/* webpackChunkName: "editProfile" */ '@/views/UserSettings.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior (_to, _from, _savedPosition) {
    return { left: 0, top: 0 }
  }
})

export default router
