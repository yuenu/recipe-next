import { reactive, computed } from 'vue'
import { searchByName, searchById, searchByCategory, getAllCategory } from '@/apis/recipe'

// State
const state = reactive({
  random: [],
  meals: [],
  meal: [],
  categories: []
})

// Getter
export const getMeals = computed(() => { return state.meals })
export const getCategory = computed(() => { return state.categories })
export const getMealInfo = computed(() => { return state.meal })

// Action
export const SEARCH_MEALS = async (input: string) => {
  try {
    state.meals = await searchByName(input)
  } catch (e) {
    console.log(e)
  }
}

export const SET_CATEGORY = async () => {
  try {
    state.categories = await getAllCategory()
  } catch (e) {
    console.log(e)
  }
}

export const GET_MEALS_BY_CATEGORY = async (category: string) => {
  try {
    state.categories = await searchByCategory(category)
  } catch (e) {
    console.log(e)
  }
}

export const GET_MEALS_BY_ID = async (mealId: string) => {
  try {
    state.meal = await searchById(mealId)
  } catch (e) {
    console.log(e)
  }
}
