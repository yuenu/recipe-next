import { reactive, computed } from 'vue'
import * as api from '@/apis/index'
import * as Response from '@/apis/response.type'

type Recipe = {
  random: Response.meal[]
  meals: Response.meal[]
  meal: Response.meal[]
  categories: Response.Category[]
  isLoading: boolean
}

const state = reactive<Recipe>({
  random: [],
  meals: [],
  meal: [],
  categories: [],
  isLoading: false
})

const getters = reactive({
  getMeals: computed(() => state.meals),
  getCategory: computed(() => state.categories),
  getMealDetail: computed(() => state.meal),
  dataIsLoading: computed(() => state.isLoading)
})

const actions = {

  async SEARCH_MEALS (input: string) {
    try {
      state.isLoading = true
      state.meals = await api.searchByName(input)
      state.isLoading = false
    } catch (e) {
      console.log(e)
      state.isLoading = false
    }
  },

  async GET_CATEGORY () {
    try {
      state.categories = await api.getAllCategory()
      return state.categories
    } catch (e) {
      console.log(e)
    }
  },

  async GET_MEALS_BY_CATEGORY (category: string) {
    try {
      state.isLoading = true
      state.meals = await api.searchByCategory(category)
      state.isLoading = false
    } catch (e) {
      console.log(e)
      state.isLoading = false
    }
  },

  async GET_MEALS_BY_ID (mealId: string) {
    try {
      state.meal = await api.searchById(mealId)
    } catch (e) {
      console.log(e)
    }
  }
}

export default { state, getters, ...actions }
