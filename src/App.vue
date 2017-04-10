<template lang="pug">
#app( @toast="handleToast")
  .container
    Toast(ref="toast")
    ManaWell
    p {{ manaCount}}
    RuneLayer( v-for="(layer, key, index) in runes", :key="index", :layerID="key", :data="layer")
    Menus
</template>

<script>
import ManaWell from './ManaWell.vue'
import RuneLayer from './RuneLayer.vue'
import Menus from './Menus.vue'
import Toast from './Toast.vue'

export default {
  name: 'app',
  data() {
    return {
      updater: null
    }
  },
  computed: {
    manaCount() {
      return this.$store.state.mana
    },
    runes() {
      return this.$store.state.runes
    }
  },
  methods: {
    handleToast(msg) {
      console.log("Catch toast")
      this.$refs.toast.toast(msg)
    }
  },
  mounted() {
    this.updater = setInterval(() => {
      this.$store.dispatch('updateTime')
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.updater)
  },
  components: {
    ManaWell,
    RuneLayer,
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

.menu
  overflow-x:scroll
  display: flex
  flex-flow: row nowrap
  height: 100%

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
