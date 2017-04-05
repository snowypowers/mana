<template lang="pug">
#app
  .container
    ManaWell
    p {{ manaCount}}
    #runelayer
      Rune( :hex="this.$store.state.runes.a", runeID="a" style="flex: 0 1 25%")
        RuneInfo( :hex='this.$store.state.runes.a')
      Rune( :hex="this.$store.state.runes.b", runeID="b" style="flex: 0 1 25%")
        RuneInfo( :hex='this.$store.state.runes.b')
      Rune( :hex="this.$store.state.runes.c", runeID="c" style="flex: 0 1 25%")
        RuneInfo( :hex='this.$store.state.runes.c')
      Rune( :hex="this.$store.state.runes.d", runeID="d" style="flex: 0 1 25%")
        RuneInfo( :hex='this.$store.state.runes.d')
    Menus
</template>

<script>
import ManaWell from './ManaWell.vue'
import Rune from './Rune.vue'
import RuneInfo from './RuneInfo.vue'
import Menus from './Menus.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
    manaCount() {
      return this.$store.state.mana
    }
  },
  components:{
    ManaWell,
    Rune,
    RuneInfo,
    Menus
  }
}
</script>

<style lang="stylus">
body
  margin: 0
  padding: 0
  color: white
  background-color: black
  overflow: scroll
  overflow-x: hidden

svg
  stroke: currentColor
  fill: transparent

::webkit-scrollbar
  width: 0px
  background: transparent

::-webkit-scrollbar-thumb {
    background: currentColor
}

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  width: 100%

.container
  margin: 50px 50px
  @media(min-width: 1000px)
    width: 1000px
    margin: 50px auto

#runelayer
  width: 100%
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: space-around

#well
  height: 100px
  width: 100px
  border: 5px white

</style>
