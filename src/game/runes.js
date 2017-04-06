
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
    cost: 1
  },
  '0000183c3c180000': {
    name: 'Plus',
    desc: '1 plus 1 is 3.',
    func: (val) => {

    }
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
