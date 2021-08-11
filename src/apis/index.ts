import axios from 'axios'

export const getRandom = async () => {
  const res = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  )
  return res.data.meals
}

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

export const searchByName = async (name: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  )
  if (res.status === 200) return res.data.meals

  throw new Error('Timeout la!')
}

export const searchByCategory = async (category: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  )
  return res.data.meals
}

export const searchById = async (id: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  return res.data.meals
}
