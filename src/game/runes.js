import {moonTide} from './utils.js'
/* Rune
{
  name    : Name of the rune
  desc    : Short description of rune
  func    : The function of the rune
  priority: Priority num. Affects order of rune func
  cost    : Cost of using the rune
}
*/
export const standard = {
  '0000001818000000': {
    name: 'Do',
    desc: 'The simplest rune you can find and make.',
    func: (val) => {
      return val + 1
    },
    priority: 0,
    cost: 0
  },
  '00003c3c3c3c0000': {
    name: 'Co',
    desc: 'A bigger Do.',
    func: (val) => {
      return val + 5
    },
    priority: 0,
    cost: 0
  },
  '0000183c3c180000': {
    name: 'Plus',
    desc: '1 plus 1 is 3.',
    func: (val) => {
      return val + 3
    },
    priority: 0,
    cost: 1
  },
  '0000241818240000': {
    name: 'Mine',
    desc: 'Boom!',
    func: (val) => {
      let chance = Math.random() > 0.5
      return chance ? val * 2 : 0
    },
    priority: 5,
    cost: 20
  },
  'ff183c5a18181800': {
    name: 'Bost',
    desc: 'Careful not to overdo it!',
    func: (val) => {
      if (val > 20) {
        return 1
      } else {
        return val * 3
      }
    },
    priority: 10,
    cost: 20
  },
  '0102040810204080': {
    name: 'Sash',
    desc: 'Even balance of power',
    func: (val) => {
      if (val % 2 === 0) {
        return val * 2
      } else {
        return val + 1
      }
    },
    priority: 11,
    cost: 50
  },
  '0014280000142800': {
    name: 'Ebb',
    desc: 'Tidal Power',
    func: (val) => {
      return val + 20 * moonTide()
    },
    priority: 14,
    cost: 20
  },
  '0018240418001800': {
    name: 'Q',
    desc: '?',
    func: (val) => val,
    priority: 0,
    cost: 0
  },
  '001818185a3c18ff': {
    name: 'Floo',
    desc: 'Hit the floor!',
    func: (val) => {
      let p = val.toString().length - 1
      return Math.floor(val / (10 * p)) * (10 * p)
    },
    priority: 15,
    cost: 10
  }
}

export const special = {
  'undiscovered': {
    name: '?',
    desc: 'Undiscovered',
    func: (val) => val
  }
}

const all = Object.assign({}, standard, special)
export default all
