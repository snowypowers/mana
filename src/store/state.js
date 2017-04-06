
import runes from '../game/runes.js'

var library = {}
for (var k in runes) library[k] = false
const state = {
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
  toasts: {}
}

export default state
