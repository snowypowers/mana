
import {standard} from '../game/runes.js'

var library = {}
for (var k in standard) library[k] = false

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
  research: {
    rune: '0000000000000000'
  },
  toasts: {}
}

export default state
