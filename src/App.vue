<template lang="pug">
  div#app
    ManaWell
    p {{ manaCount}}
    #runelayer
      Rune( :hex="this.$store.state.runes.a", runeID="a")
      Rune( :hex="this.$store.state.runes.b", runeID="b")
      Rune( :hex="this.$store.state.runes.c", runeID="c")
      Rune( :hex="this.$store.state.runes.d", runeID="d")
    Menus
</template>

<script>
import ManaWell from './ManaWell.vue'
import Rune from './Rune.vue'
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
    Menus
  }
}
</script>

<style lang="stylus">
body
  margin: 0
  padding: 0

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: white
  background-color: black
  width: 100%
  height: 100vh

#runelayer
  width: 100%
  display: flex
  flex-flow: row wrap
  align-items: center
  justify-content: space-around

#well
  height: 100px
  width: 100px
  border: 5px white

</style>
