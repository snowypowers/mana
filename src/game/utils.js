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
