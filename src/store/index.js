import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as state from './state'
import mutations from './mutations'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
