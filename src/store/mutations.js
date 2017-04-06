import Vue from 'vue'

const mutations = {
  CHANGE_MANA (state, amt) {
    state.mana += amt
  },
  CHANGE_RUNE (state, change) {
    let [layer, id] = change.runeID.split('.')
    state.runes[layer].runes[id] = change.newRune
  },
  LOAD_FILE (state, file) {
    state = Object.assign(state, file)
  },
  TOAST (state, payload) {
    Vue.set(state.toasts, payload.hash, payload)
  },
  UNTOAST (state, hash) {
    Vue.delete(state.toasts, hash)
  }
}

export default mutations
