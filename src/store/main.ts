import { reactive, computed } from 'vue'
import * as api from '@/apis/recipe'
import type * as Response from '@/apis/response.type'

// State
const state = reactive({
  random: [] as Response.meal[],
  meals: [] as Response.meal[],
  meal: [] as Response.meal[],
  categories: [] as Response.Category[]
})

// Getter
const getters = reactive({
  getMeals: computed(() => state.meals),
  getCategory: computed(() => state.categories),
  getMealDetail: computed(() => state.meal)
})

// Action
const actions = {

  /**
   * search mael by name
   *
   * @param input - Search input
   */
  async SEARCH_MEALS (input: string) {
    try {
      state.meals = await api.searchByName(input)
    } catch (e) {
      console.log(e)
    }
  },

  /**
   *  get all category
   */
  async GET_CATEGORY () {
    try {
      state.categories = await api.getAllCategory()
    } catch (e) {
      console.log(e)
    }
  },

  /**
   * get maels by which selected category
   *
   * @param category - meals category
   */
  async GET_MEALS_BY_CATEGORY (category: string) {
    try {
      state.meals = await api.searchByCategory(category)
    } catch (e) {
      console.log(e)
    }
  },

  /**
   *  get meals by id
   *
   * @param mealId - meal id
   */
  async GET_MEALS_BY_ID (mealId: string) {
    try {
      state.meal = await api.searchById(mealId)
    } catch (e) {
      console.log(e)
    }
  }
}

export default { state, getters, ...actions }
