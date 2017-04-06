import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import state from './store/state.js'
import actions from './store/actions.js'
import mutations from './store/mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

new Vue({  // eslint-disable-line no-new
  el: '#app',
  store,
  render: h => h(App)
})
