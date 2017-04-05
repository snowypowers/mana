<template lang="pug">
.info
  p {{ info.name }}
  p {{ info.desc }}

</template>

<script>
import runes from './game/runes.js'

export default {
  name: 'RuneInfo',
  props: ['hex', 'special'],
  data () {
    return {
    }
  },
  computed: {
    info() {
      if (this.special) return runes[this.special]
      let named = runes[this.hex]
      if (named) return named
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
  width: inherit
  min-height: 100px
</style>
