import Vue from 'vue'

const mutations = {
  CHANGE_MANA (state, amt) {
    state.mana += amt
  },
  CHANGE_RUNE (state, change) {
    switch (change.type) {
      case 'runes':
        let [layer, id] = change.runeID.split('.')
        state.runes[layer].runes[id] = change.newRune
        break
      case 'research':
        state.research.rune = change.newRune
        break
      default:
        console.log('Untyped rune change!')
    }
  },
  LOAD_FILE (state, file) {
    state = Object.assign(state, file)
  },
  TOAST (state, payload) {
    Vue.set(state.toasts, payload.hash, payload)
  },
  UNTOAST (state, hash) {
    Vue.delete(state.toasts, hash)
  },
  RESEARCH_RUNE (state, rune) {
    state.library[rune] = true
  },
  ADD_RUNE_SLOT (state, payload) {
    Vue.set(state.runes[payload.layer].runes, payload.id, '0000000000000000')
  },
  ADD_RUNE_LAYER (state, id) {
    Vue.set(state.runes, id, {
      imbued: false,
      runes: {
        a: '0000000000000000'
      }
    })
  },
  BUY_UPGRADE (state, id) {
    state.upgrades.push(id)
  }
}

export default mutations
