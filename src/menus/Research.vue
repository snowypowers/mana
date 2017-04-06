<template lang="pug">
div This is Research
  Rune( :hex="runeHash", :)
    RuneInfo
</template>

<script>
import Rune from '../Rune.vue'
import RuneInfo from '../RuneInfo.vue'
export default {
  name: 'Research',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    runeHash() {
      return this.$store.state.research.rune
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
