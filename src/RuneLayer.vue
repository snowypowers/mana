<template lang="pug">
.runelayer
  Rune( v-for="(rune, key, index) in data.runes", :key="index", :runeID="layerID + '.' + key", :hex="rune", type="runes")
    RuneInfo( :hex="rune", :showDesc='false')
</template>

<script>
import Rune from './Rune.vue'
import RuneInfo from './RuneInfo.vue'

export default {
  name: 'RuneLayer',
  props: ['layerID', 'data'],
  data () {
    return {
    }
  },
  components: {
    Rune,
    RuneInfo,
  }
}
</script>

<style lang="stylus">
.runelayer
  width: 100%
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: space-around
</style>
