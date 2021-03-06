

const help = [
  {
    name: 'library',
    hex: '0020202020203c00',
    title: 'Library',
    body: [
      'The library tab showcases the runes in the game. It tracks all discovered runes that the player can use and also the unknown runes. Players can click on each rune to read more about it. ',
      'Drag and drop the rune into a rune slot to populate the rune slot with the respective rune instantly.',
      'Right click on any discovered rune to read about it.'
    ]
  },
  {
    name: 'Research',
    hex: '0038242438282c00',
    title: 'Research',
    body: [
      'The Research tab allows players to discover new runes. Each Research attempt costs 100 mana and is paid even if the research attempt fails. By discovering runes, players can then utilise their powers in the Rune Circle, greatly increasing manaflow. ',
      'First, carve a new rune out in the Potential box. Next, click on Carve! A popup will appear in the top left indicating success or failure. Upon success, the rune will automatically be added to the library.'
    ]
  },
  {
    name: 'Mana Well',
    hex: '0042665a5a424200',
    title: 'The Source of All Power',
    body: [
      'The circle at the top represents the Mana Well, our source of power. It is the only source of mana in this game. Draw mana by clicking on it. Every click will draw a small sample of mana.',
      'The runes below it serves as slots to manipulate the ebb and flow of mana. Use them to manipulate and amplify your mana flow per click. However, you will need to discover the runes before using them. Using proper but unnamed runes will not affect the flow at all.'
    ]
  }
]

export default help
