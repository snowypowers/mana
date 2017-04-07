window.Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value))
}

window.Storage.prototype.getObject = function (key) {
  var value = this.getItem(key)
  return value && JSON.parse(value)
}

export function savetoLocal (state) {
  window.localStorage.setObject('snowypowers.mana', state)
}

export function loadFromLocal () {
  return window.localStorage.getObject('snowypowers.mana')
}

function leftpad (s, p) {
  return Array(p - s.length + 1).join('0') + s
}

export function runeBin2Hex (bin) {
  return bin.reduce((acc, val) => {
    let i = parseInt(val.join(''), 2).toString(16)
    i = leftpad(i, 2)
    return acc + i
  }, '')
}

export function runeHex2Bin (hex) {
  let chunks = hex.match(/.{1,2}/g)
  let binaryStrings = chunks.map((chunk) => {
    let i = parseInt(chunk, 16).toString(2)
    return leftpad(i, 8)
  })
  let binaryChunks = binaryStrings.map((s) => { return s.match(/.{1}/g).map((x) => parseInt(x)) })
  return binaryChunks
}
// Flatten an obj of arrays into a single array
export function flattenObject (obj) {
  let keys = Object.keys(obj)
  return keys.reduce((acc, val) => {
    return acc.concat(obj[val])
  }, [])
}
