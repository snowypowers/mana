import { standard } from '../game/runes.js'

const actions = {
  toast: ({state, commit}, msg) => {
    let hash = Math.random().toString(36).substring(7)
    let timeout = window.setTimeout(() => {
      commit('UNTOAST', hash)
    }, 5000)
    let note = {hash, msg, timeout}
    commit('TOAST', note)
  },
  untoast: ({state, commit}, hash) => {
    if (state.toasts[hash]) {
      window.clearTimeout(state.toasts[hash].timeout)
      commit('UNTOAST', hash)
    }
  },
  attemptResearch: ({dispatch, state, commit}) => {
    if (state.mana > 100) {
      commit('CHANGE_MANA', -100)
    } else {
      dispatch('toast', 'Not enough mana!')
      return
    }
    if (state.research.rune in standard) {
      if (state.library[state.research.rune]) {
        dispatch('toast', 'This was already discovered!')
      } else {
        commit('RESEARCH_RUNE', state.research.rune)
        dispatch('toast', 'New rune discovered!')
      }
    }
  }
}

export default actions
