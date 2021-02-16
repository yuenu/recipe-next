import actions from './actions'
import getters from './getters'
import mutations from './mutation'

export default {
  namespaced: true,
  state () {
    return {
      random: []
    }
  },
  actions,
  getters,
  mutations
}
