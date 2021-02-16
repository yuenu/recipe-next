import axios from 'axios'

export const getRandom = async () => {
  const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  return res.data.meals
}

export const searchByName = async (name: string) => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  return res.data.meals
}
