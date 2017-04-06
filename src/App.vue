<template lang="pug">
#app( @toast="handleToast")
  .container
    Toast(ref="toast")
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
import Toast from './Toast.vue'

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
  methods: {
    handleToast(msg) {
      console.log("Catch toast")
      this.$refs.toast.toast(msg)
    }
  },
  components:{
    ManaWell,
    Rune,
    RuneInfo,
    Menus,
    Toast
  }
}
</script>

<style lang="stylus">
body
  margin: 0
  padding: 0
  color: #666
  background-color: #212121
  overflow: scroll
  overflow-x: hidden

svg, .svg
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

.rune
  width: 128px
  height: 128px
  border: 3px solid currentColor
  margin: auto

#well
  height: 100px
  width: 100px
  border: 5px white

</style>
