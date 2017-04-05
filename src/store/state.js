
import runes from '../game/runes.js'

var library = {}
for (var k in runes) library[k] = false
const state = {
  mana: 0,
  runes:{
    a: "0000000000000000",
    b: "0000000000000000",
    c: "0000000000000000",
    d: "0000000000000000"
  },
  library
}

export default state
