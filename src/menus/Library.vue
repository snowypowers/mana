<template lang="pug">
.menu#library
  .rune-button(v-for="(val, key, index) in lib", :key="index")
    Rune( :hex="val?key:'0018240418001800'", disabled='true')
      RuneInfo(:hex="val?key:'undiscovered'")

</template>

<script>
import Rune from '../Rune.vue'
import RuneInfo from '../RuneInfo.vue'

export default {
  name: 'Library',
  data () {
    return {
    }
  },
  computed: {
    lib() {
      return this.$store.state.library
    }
  },
  methods: {
    blockClick() {
      console.log("blocked!")
      return null
    }
  },
  components: {
    Rune,
    RuneInfo
  }
}
</script>

<style lang="stylus">

</style>
