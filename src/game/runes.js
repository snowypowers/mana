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
    cost: 0,
    info: {
      title: 'Do - The Dot.',
      body: [
        'The dot in the center concentrates the mana in an crude but effective manner, allowing slightly more mana to be drawn.',
        'Simple and free, this rune is perfect for beginners to start learning about runes and their uses in mana manipulation.']
    }
  },
  '00003c3c3c3c0000': {
    name: 'Co',
    desc: 'A bigger Do.',
    func: (val) => {
      return val + 5
    },
    priority: 0,
    cost: 0,
    info: {
      title: 'Co -The Core.',
      body: [
        'Following the ideas of Do, Co simply can accomodate more mana with a large surface area.',
        'There does not seem to be any drawbacks with using Co as compared to Do. At least, not any so far...'
      ]
    }
  },
  '0000183c3c180000': {
    name: 'Plus',
    desc: '1 plus 1 is 3.',
    func: (val) => {
      return val + 3
    },
    priority: 0,
    cost: 1,
    info: {
      title: 'Plus - The Positive',
      body: []
    }
  },
  '0000241818240000': {
    name: 'Boom',
    desc: 'Baboom!',
    func: (val) => {
      let chance = Math.random() > 0.5
      return chance ? val * 2 : 0
    },
    priority: 5,
    cost: 20,
    info: {
      title: 'Boom - The Mine',
      body: [
        'The Mine is a risky proposition. It may double your mana, or blow it all up. You decide.'
      ]
    }
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
    cost: 20,
    info: {
      title: 'Bost - The Rocket',
      body: [
        'Bost is a amazing rune for beginners. It presents overwhelming power, amplifying the mana flow by a large amount. However, do not fall into the trap of relying on it too much, for it will backfire on you.',
        'Great for beginners, but more experienced mana manipulators will steer clear of it. It cannot handle too much.'
      ]
    }
  },
  '0102040810204080': {
    name: 'Sash',
    desc: 'Even balance of power',
    func: (val) => {
      if (val % 2 === 0) {
        return val * 2
      } else {
        return val - 1
      }
    },
    priority: 11,
    cost: 50,
    info: {
      title: 'Sash - The Balance',
      body: [
        'Balance is important in mana manipulation. When balanced, Sash works wondrously, boosting the flow. However, it dies off when met with any oddities.'
      ]
    }
  },
  '0014280000142800': {
    name: 'Ebb',
    desc: 'Tidal Power',
    func: (val) => {
      return val + 20 * moonTide()
    },
    priority: 14,
    cost: 20,
    info: {
      title: 'Ebb - The Tide',
      body: [
        'Mana flow is dictated by the Moon. Ebb harnesses this power and channels it, adding some mana to the flow.',
        'Such runes require mana to manage their powers and thus, they do not come free. Ebb is the perfect rune for beginners to read and understand the mystical forces of nature.'
      ]
    }
  },
  '0018240418001800': {
    name: 'Q',
    desc: '?',
    func: (val) => val,
    priority: 0,
    cost: 0,
    info: {
      title: 'Q - The Unknown',
      body: [
        'What does Q do?',
        'No one knows. Not even me.'
      ]
    }
  },
  '001818185a3c18ff': {
    name: 'Floo',
    desc: 'Hit the floor!',
    func: (val) => {
      let p = val.toString().length - 1
      return Math.floor(val / (10 * p)) * (10 * p)
    },
    priority: 15,
    cost: 10,
    info: {
      title: 'Floo - The Drop',
      body: [
        'Floo is special. It is famous among mana manipulators because it is one of the first runes introduced to beginners as a manipulator.',
        'Beginner runes are all amplifiers. They either boost or curb the mana flow. Not this. Floo is different.',
        'Manipulators shape the flow very specifically. This one shaves off all stray excess mana, leaving behind the consolidated stream.'
      ]
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
