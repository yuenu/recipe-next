import axios from 'axios'

export const getRandom = async () => {
  const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  return res.data.meals
}

export const getAllCategory = async () => {
  const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  return res.data.categories
}

export const searchByName = async (name: string) => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  return res.data.meals
}

export const searchByCategory = async (category: string) => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  return res.data.meals
}

export const searchById = async (id: string) => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  console.log(res)
  return res.data.meals
}
