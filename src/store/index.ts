import { createStore } from 'vuex'
import { searchByName, searchById, searchByCategory, getAllCategory } from '@/apis/recipe'
// import authModuel from './modules/auth/index'
// import requestsModule from './modules/requests/index'

interface Recipe {
  random: object
  meals: object
  meal: object
  category: object
}

export default createStore<Recipe>({
  state: {
    random: [],
    meals: [],
    meal: [],
    category: []
  },
  mutations: {
    SET_RANDOM_MEAL (state, payload: []) {
      state.random = payload
    },
    SET_CATEGORY (state, payload: []) {
      state.category = payload
    },
    SET_MEALS (state, payload: []) {
      state.meals = payload
    },
    SET_SINGLE_MEAL (state, payload: []) {
      state.meal = payload
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
    async GET_MEALS_BY_CATEGORY ({ commit }, category: string) {
      const res: object = await searchByCategory(category)
      commit('SET_MEALS', res)
    },
    async GET_MEALS_BY_ID ({ commit }, mealId: string) {
      const res: object = await searchById(mealId)
      commit('SET_SINGLE_MEAL', res)
    }
  },
  getters: {
    getMeals: state => {
      return state.meals
    },
    getCategory: state => {
      return state.category
    },
    getMealInfo: state => {
      return state.meal
    }
  }
})
