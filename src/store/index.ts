import { createStore } from 'vuex'
import authModuel from './modules/auth/index'
import requestsModule from './modules/requests/index'

export default createStore({
  modules: {
    auth: authModuel,
    requests: requestsModule
  }
})
