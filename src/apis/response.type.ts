
/**
 * @property {string} idCategory - id
 * @property {string} strCategory - name
 * @property {string} strCategoryDescription - description
 * @property {string} strCategoryThumb - category image
 */
export type Category = {
  idCategory: string
  strCategory: string
  strCategoryDescription: string
  strCategoryThumb: string
}

/**
 * @property {string} idMeal - id
 * @property {string} strMeal - name
 * @property {string} strMealThumb - meal image
 */
export type CategoryMeals = {
  idMeal: string
  strMeal: string
  strMealThumb: string
}
