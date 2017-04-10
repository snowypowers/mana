<template lang="pug">
.info
  p( v-if="showName") {{ info.name }}
  p( v-if="showDesc") {{ info.desc }}

</template>

<script>
import {special, standard} from './game/runes.js'

export default {
  name: 'RuneInfo',
  props: {
    hex: {
      type: String,
      default: '0000000000000000'
    },
    showName: {
      type: Boolean,
      default: true
    },
    showDesc: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    info() {
      if (special[this.hex]) return special[this.hex]
      let named = standard[this.hex]
      if (named && this.$store.state.library[this.hex]) return named
      return {
        name:'Unnamed',
        desc:'Nothing',
        func: (val) => val,
        priority: 0,
        cost: 0
      }
    }
  }
}
</script>

<style lang="stylus">
.info
  width: 128px
</style>
