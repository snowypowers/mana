
const actions = {
  toast: ({state, commit}, msg) => {
    let hash = Math.random().toString(36).substring(7)
    let timeout = window.setTimeout(() => {
      commit('UNTOAST', hash)
    }, 5000)
    let note = {hash, msg, timeout}
    console.log(note)
    commit('TOAST', note)
  },
  untoast: ({state, commit}, hash) => {
    if (state.toasts[hash]) {
      window.clearTimeout(state.toasts[hash].timeout)
      commit('UNTOAST', hash)
    }
  }
}

export default actions
