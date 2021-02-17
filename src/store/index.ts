import { createStore } from 'vuex'
import { searchByName, getAllCategory, searchByCategory } from '@/apis/recipe'
// import authModuel from './modules/auth/index'
// import requestsModule from './modules/requests/index'

export default createStore({
  state: {
    random: [],
    meals: [],
    category: []
  },
  mutations: {
    GET_RANDOM_MEAL (state, payload) {
      state.random = payload
    },
    GET_CATEGORY (state, payload: []) {
      state.category = payload
    },
    GET_MEALS (state, payload: []) {
      state.meals = payload
    }
  },
  actions: {
    async SEARCH_MEALS (context, input: string) {
      const res = await searchByName(input)
      context.commit('GET_MEALS', res)
    },
    async GET_CATEGORY (context) {
      const res = await getAllCategory()
      context.commit('GET_CATEGORY', res)
    },
    async GET_CATEGORY_MEALS (context, category: string) {
      const res = await searchByCategory(category)
      context.commit('GET_MEALS', res)
    }
  },
  getters: {
    getMeals: state => {
      return state.meals
    },
    getCategory: state => {
      return state.category
    }
  }
})
