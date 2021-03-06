
const upgrades = {
  runeslots: [
    {
      id: 'SecondRuneSlot',
      name: '2nd Rune Slot',
      desc: 'One more rune slot!',
      hex: '0008000000001000',
      cost: 500,
      depends: [],
      actions: [
        ['addRuneSlot', 1]
      ]
    },
    {
      id: 'ThirdRuneSlot',
      name: '3rd Rune Slot',
      desc: '3 slots!',
      hex: '0010000000022000',
      cost: 2000,
      depends: ['SecondRuneSlot'],
      actions: [
        ['addRuneSlot', 1]
      ]
    },
    {
      id: 'CompleteCircle',
      name: 'Complete Circle',
      desc: '4th rune slot!',
      hex: '0004400000022000',
      cost: 10000,
      depends: ['ThirdRuneSlot'],
      actions: [
        ['addRuneSlot', 1]
      ]
    },
    {
      id: 'Expansion',
      name: 'Expansion',
      desc: 'New Rune Layer!',
      hex: '18245abdbd5a2418',
      cost: 50000,
      depends: ['CompleteCircle'],
      actions: [
        ['addRuneLayer']
      ]
    }
  ],
  manawell: [
    {
      id: 'EbbAndFlow',
      name: 'Ebb and Flow',
      desc: 'Increase ManaWell flow slightly',
      hex: '0014280000142800',
      cost: 300,
      depends: [],
      actions: [],
      func: (val) => val + 1
    }
  ]
}

export default upgrades
