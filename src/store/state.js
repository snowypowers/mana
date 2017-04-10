
import {standard} from '../game/runes.js'

var library = {}
for (var k in standard) library[k] = false

const state = {
  time: {
    lastUpdate: new Date().getTime(),
    leftover: 0
  },
  mana: 0,
  runes: {
    1: {
      imbued: false,
      runes: {
        a: '0000000000000000'
      }
    }
  },
  library,
  research: {
    rune: '0000000000000000'
  },
  upgrades: [],
  toasts: {}
}

export default state
