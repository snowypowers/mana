<template lang="pug">
#options
  .rune-button( @click="saveFile")
    Rune( :hex="'001818185a3c1800'")
      .info
        p Save
  .rune-button( @click="loadFile")
    Rune( :hex="'00183c5a18181800'")
      .info
        p Load

</template>

<script>
import Rune from '../Rune.vue'
import {savetoLocal, loadFromLocal} from '../game/utils.js'

export default {
  name: 'Options',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Rune
  },
  methods: {
    saveFile() {
      savetoLocal(this.$store.state)
      this.$store.dispatch('toast', 'Saved!')
    },
    loadFile() {
      this.$store.commit('loadFile', loadFromLocal())
    }
  }
}
</script>

<style lang="stylus">
#options
  overflow-x:scroll
  display: flex
  flex-flow: row nowrap
</style>
