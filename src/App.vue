<template lang="pug">
  div#app
    ManaWell
    p {{ manaCount}}
    Rune( :hex="this.$store.state.runes.a", runeID="a")
</template>

<script>
import ManaWell from './ManaWell.vue'
import Rune from './Rune.vue'
export default {
  name: 'app',
  data () {
    return {
      rune: "abababababababab"
    }
  },
  computed: {
    manaCount() {
      return this.$store.state.mana
    }
  },
  components:{
    ManaWell,
    Rune
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

#well
  height: 100px
  width: 100px
  border: 5px white

</style>
