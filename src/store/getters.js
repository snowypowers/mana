import { standard } from '../game/runes.js'
import upgrades from '../game/upgrades.js'

const getters = {
  manaMods: state => {
    let runes = Object.keys(state.runes).reduce((acc, layer) => acc.concat(Object.values(state.runes[layer].runes)), [])
    runes = runes.filter((r) => state.library[r])
    runes = runes.map((r) => standard[r])
    runes.sort((a, b) => a.priority - b.priority)
    return runes.map((r) => r.func)
  },
  manawellUpgrades: state => {
    return state.upgrades.filter((u) => u in upgrades.manawell)
  }
}

export default getters
