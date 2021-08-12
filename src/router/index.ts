import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import RecipeStore from '@/store'
import { nextTick } from 'vue'

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

router.beforeEach(async (to, _from, next) => {
  if (to.path === '/search' && to.query.q) {
    const query = String(to.query.q)
    await RecipeStore.SEARCH_MEALS(query)
  }

  if (to.path === '/search' && to.query.ca) {
    const category = String(to.query.ca)
    await RecipeStore.GET_MEALS_BY_CATEGORY(category)
  }

  next()
})

export default router
