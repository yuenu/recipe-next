import { createStore } from 'vuex'
import { searchByName, getAllCategory, searchByCategory } from '@/apis/recipe'
// import authModuel from './modules/auth/index'
// import requestsModule from './modules/requests/index'

interface Recipe {
  random: object
  meals: object
  category: object
}

export default createStore<Recipe>({
  state: {
    random: [],
    meals: [],
    category: []
  },
  mutations: {
    SET_RANDOM_MEAL (state, payload) {
      state.random = payload
    },
    SET_CATEGORY (state, payload: []) {
      state.category = payload
    },
    SET_MEALS (state, payload: []) {
      state.meals = payload
    }
  },
  actions: {
    async SEARCH_MEALS ({ commit }, input: string) {
      const res: object = await searchByName(input)
      commit('SET_MEALS', res)
    },
    async GET_CATEGORY ({ commit }) {
      const res: object = await getAllCategory()
      commit('SET_CATEGORY', res)
    },
    async GET_CATEGORY_MEALS ({ commit }, category: string) {
      const res: object = await searchByCategory(category)
      commit('SET_MEALS', res)
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
