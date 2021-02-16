import { createStore } from 'vuex'
import { searchByName } from '@/apis/recipe'
// import authModuel from './modules/auth/index'
// import requestsModule from './modules/requests/index.'

export default createStore({
  state: {
    random: [],
    meals: []
  },
  mutations: {
    GET_RANDOM_MEAL (state, payload) {
      state.random = payload
    },
    SEARCH_MEALS (state, payload: []) {
      state.meals = payload
    }
  },
  actions: {
    async SEARCH_MEALS (context, input: string) {
      const res = await searchByName(input)
      context.commit('SEARCH_MEALS', res)
    }
  },
  getters: {
    getMeals: state => {
      return state.meals
    }
  }
})
