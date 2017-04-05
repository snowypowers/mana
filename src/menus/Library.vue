<template lang="pug">
#library
  .library-rune(v-for="(val, key, index) in lib")
    Rune( :hex="val?key:'0018240418001800'")
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
  components: {
    Rune,
    RuneInfo
  }
}
</script>

<style lang="stylus">
#library
  overflow-x:scroll
  display: flex
  flex-flow: row nowrap


</style>
