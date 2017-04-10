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

// Returns the current MoonTide power
// Tide is split into 6 phases over 24 hours.
// Strongest phase moves with the day
// Production bonus => 1.5, 1.2, 0.8, 0.5
export function moonTide () {
  let d = new Date()
  let dateNow = d.getDate()
  if (dateNow > 23) dateNow -= 23
  let hourNow = d.getHours()
  let dist = Math.abs(hourNow - dateNow)
  if (dist > 12) dist = 23 - dist
  if (dist <= 1) return 1.5
  if (dist <= 5) return 1.2
  if (dist <= 9) return 0.8
  return 0.5
}
