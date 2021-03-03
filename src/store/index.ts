// import { defineStore } from 'pinia'
// import * as api from '@/apis/recipe'

// type Recipe = {
//   random: []
//   meals: []
//   meal: []
//   categories: []
// }

// export const useMainStore = defineStore({
//   id: 'recipe',
//   state: (): Recipe => ({
//     random: [],
//     meals: [],
//     meal: [],
//     categories: []
//   }),
//   getters: {
//     getMeals (): any {
//       return this.state.meals
//     }
//   },
//   actions: {
//     async SEARCH_MEALS (input: string) {
//       try {
//         this.state.meals = await api.searchByName(input)
//       } catch (e) {
//         console.log(e)
//       }
//     }
//   }
// })
