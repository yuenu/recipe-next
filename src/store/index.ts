import { createStore } from 'vuex'
import { searchByName, searchById, searchByCategory, getAllCategory } from '@/apis/recipe'
import type * as Response from '@/apis/response.type'

interface State {
  random: Response.meal[]
  meals: Response.meal[]
  meal: Response.meal[]
  category: Response.Category[]
}

export const store = createStore<State>({
  state: {
    random: [],
    meals: [],
    meal: [],
    category: []
  },
  mutations: {
    SET_RANDOM_MEAL (state, payload: Response.meal[]) {
      state.random = payload
    },
    SET_CATEGORY (state, payload: Response.Category[]) {
      state.category = payload
    },
    SET_MEALS (state, payload: Response.meal[]) {
      state.meals = payload
    },
    SET_SINGLE_MEAL (state, payload: Response.meal[]) {
      state.meal = payload
    }
  },
  actions: {
    /**
     * search mael by name
     *
     * @param input - Search input
     */
    async SEARCH_MEALS ({ commit }, input: string) {
      const res = await searchByName(input)
      commit('SET_MEALS', res)
    },

    /**
     *  get all category
     */
    async GET_CATEGORY ({ commit }) {
      const res = await getAllCategory()
      commit('SET_CATEGORY', res)
    },

    /**
     * get maels by which selected category
     *
     * @param category - meals category
     */
    async GET_MEALS_BY_CATEGORY ({ commit }, category: string) {
      const res = await searchByCategory(category)
      commit('SET_MEALS', res)
    },

    /**
     *  get meals by id
     *
     * @param mealId - meal id
     */
    async GET_MEALS_BY_ID ({ commit }, mealId: string) {
      const res = await searchById(mealId)
      commit('SET_SINGLE_MEAL', res)
    }
  },
  getters: {
    getMeals: state => {
      return state.meals
    },
    /**
     *
     * @param state - 222
     */
    getCategory: state => {
      return state.category
    },
    getMealDetail: state => {
      return state.meal
    }
  }
})
