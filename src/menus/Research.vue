<template lang="pug">
.menu#research
  Rune( :hex="runeHash", type='research')
    p Potential
  .rune-button( @click="carve")
    Rune( :hex="'003c460a12224400'")
      .info
        p Carve!
</template>

<script>
import Rune from '../Rune.vue'
export default {
  name: 'Research',
  data () {
    return {
    }
  },
  computed: {
    runeHash() {
      return this.$store.state.research.rune
    }
  },
  methods: {
    carve() {
      this.$store.dispatch('attemptResearch')
    }
  },
  components: {
    Rune
  }
}
</script>

<style lang="stylus">

</style>
