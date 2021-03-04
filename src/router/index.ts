import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/search',
    name: 'searchResult',
    component: () => import('@/views/SearchResult.vue')
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: () => import('@/views/UserSettings.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
