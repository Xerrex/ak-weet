import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {}, // end of State

  // directly change the state
  mutations: {}, // end of mutaions

  // used to call the mutations
  actions: {}, // end of actions

  modules: {
    User: UserModule
  } // end of modules
})
