<template lang="pug">
.menu#options
  .rune-button( @click="saveFile")
    Rune( :hex="'001818185a3c1800'", disabled=true, clickable=true)
      .info
        p Save
  .rune-button( @click="loadFile")
    Rune( :hex="'00183c5a18181800'", disabled=true, clickable=true)
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
      this.$store.commit('LOAD_FILE', loadFromLocal())
      this.$store.dispatch('toast', 'Loaded!')
    }
  }
}
</script>

<style lang="stylus">


</style>
