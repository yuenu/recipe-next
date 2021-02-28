import axios from 'axios'

/**
 * get Random meal
 *
 */
export const getRandom = async () => {
  const res = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  )
  return res.data.meals
}

/**
 * get All category
 *
 */
export const getAllCategory = async () => {
  const res = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  )
  if (res.status === 200) {
    return res.data.categories
  } else {
    return 'error'
  }
}

/**
 * search meal by name
 *
 * @param {string} name - meal name
 */
export const searchByName = async (name: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  )
  return res.data.meals
}

/**
 * search meal by category
 *
 * @param {string} category - category name
 */
export const searchByCategory = async (category: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  )
  return res.data.meals
}

/**
 * search meal by id
 *
 * @param {string} id - meal id
 */
export const searchById = async (id: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  return res.data.meals
}
