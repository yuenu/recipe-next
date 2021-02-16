import actions from './action'
import getters from './getters'
import mutations from './mutation'

export default {
  namespaced: true,
  state () {
    return {
      randomMeal: []
    }
  },
  actions,
  getters,
  mutations

}
