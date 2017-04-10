import { standard } from '../game/runes.js'

const actions = {
  updateTime: ({dispatch, state, commit}) => {
    let now = new Date().getTime()
    let prev = state.time.lastUpdate
    commit('UPDATE_TIME', now)
    let interval = now - prev
    if (interval > 1000) {
      while (interval > 1000) {
        interval -= 1000
        // DO SOMETHING
      }
    }
    commit('UPDATE_LEFTOVER', interval)
    dispatch('catchupTime')
  },
  catchupTime: ({state, commit}) => {
    if (state.time.leftover > 1000) {
      // DO SOMETHING
      commit('UPDATE_LEFTOVER', -1000)
    }
  },
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
  },
  buyUpgrade: ({dispatch, state, commit}, upgrade) => {
    if (state.mana > upgrade.cost) {
      commit('CHANGE_MANA', -upgrade.cost)
    } else {
      dispatch('toast', 'Not enough mana!')
      return
    }
    commit('BUY_UPGRADE', upgrade.id)
    for (let i = 0; i < upgrade.actions.length; i++) {
      let action = upgrade.actions[i]
      let dispatchID = action.shift()
      dispatch(dispatchID, ...action)
    }
    dispatch('toast', 'Upgrade ' + upgrade.name + ' Purchased!')
  },
  addRuneSlot: ({state, commit}, layer) => {
    let chars = 'abcdefgh'
    let currentSlots = Object.keys(state.runes[layer].runes).length
    let payload = {layer, id: chars[currentSlots]}
    commit('ADD_RUNE_SLOT', payload)
  },
  addRuneLayer: ({state, commit}) => {
    let layerCount = Object.keys(state.runes).length + 1
    commit('ADD_RUNE_LAYER', layerCount)
  }
}

export default actions
