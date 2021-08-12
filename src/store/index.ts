import { reactive, computed } from 'vue'
import * as api from '@/apis/index'
import * as Response from '@/apis/response.type'

export type CollectionMealType = {
  idMeal: string
  strMeal: string
  strMealThumb: string
  isCollect?: boolean
}
type Recipe = {
  random: Response.meal[]
  meals: Response.CategoryMeals[]
  meal: Response.meal[]
  categories: Response.Category[]
  isLoading: boolean
  searchName: string
  collection: CollectionMealType[]
}

const state = reactive<Recipe>({
  random: [],
  meals: [],
  meal: [],
  categories: [],
  isLoading: false,
  searchName: '',
  collection: []
})

const getters = reactive({
  getMeals: computed(() => state.meals),
  getCategory: computed(() => state.categories),
  getMealDetail: computed(() => state.meal),
  getDataIsLoading: computed(() => state.isLoading),
  getSearchName: computed(() => state.searchName),
  getCollection: computed(() => state.collection)
})

const actions = {
  async SEARCH_MEALS (input: string) {
    try {
      state.isLoading = true
      state.searchName = input
      const result = await api.searchByName(input)
      console.log('search', result)
      if (result !== null) state.meals = result
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
      state.searchName = category
      const result = await api.searchByCategory(category)
      if (result !== null) state.meals = result

      // If has collection meal, fetch meal data after add collected to meal
      if (state.collection.length !== 0) {
        const mealIds: string[] = []
        state.collection.map(meal => mealIds.push(meal.idMeal))

        state.meals.forEach((meal, index) => {
          mealIds.map(mealId => {
            if (mealId === meal.idMeal) {
              return state.meals.splice(index, 1, { ...meal, collected: true })
            }
          })
        })
      }
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
  },

  ADD_COLLECTED_RECIPE (selectedMeal: CollectionMealType) {
    const mealIndex = state.collection.findIndex(
      collectionMeal => collectionMeal.idMeal === selectedMeal.idMeal
    )
    if (mealIndex === -1) {
      state.collection = [...state.collection, selectedMeal]

      state.meals.filter((meal, index) => {
        if (meal === selectedMeal) {
          state.meals.splice(index, 1, { ...meal, collected: true })
        }
      })
    } else {
      state.collection.splice(mealIndex, 1)
    }
  },

  REMOVE_RECIPE_FROM_COLLECTION (mealId: string) {
    const mealIndex = state.collection.findIndex(meal => meal.idMeal === mealId)
    state.meals.forEach((meal, index) => {
      if (meal.idMeal === mealId) {
        state.meals.splice(index, 1, { ...meal, collected: false })
      }
    })
    state.collection.splice(mealIndex, 1)
  }
}

export default { state, getters, ...actions }
