import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import State from './store/state.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations
})
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
