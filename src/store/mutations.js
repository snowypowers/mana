
const mutations = {
  changeMana(state, amt) {
    state.mana += amt
  },
  changeRune(state, change) {
    state.runes[change.runeID] = change.newRune
  }
}

export default mutations
