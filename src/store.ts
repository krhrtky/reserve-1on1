import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/vuex/state'
import mutations from '@/vuex/mutations'
import getters from '@/vuex/getters'
import actions from '@/vuex/actions'
import { State } from '@/model/types'

Vue.use(Vuex)

export default new Vuex.Store<State>({
  state,
  mutations,
  getters,
  actions
})
