import { standard } from '../game/runes.js'

const getters = {
  manaMods: state => {
    let runes = Object.keys(state.runes).reduce((acc, layer) => acc.concat(Object.values(state.runes[layer].runes)), [])
    runes = runes.filter((r) => state.library[r])
    runes = runes.map((r) => standard[r])
    runes.sort((a, b) => a.priority - b.priority)
    return runes.map((r) => r.func)
  }
}

export default getters
