<template lang="pug">
.rune-container
  .rune(draggable=true)
    .pixelrow(v-for="(row, rowI) in coords", :key="rowI")
      .pixel(v-for="(item, colI) in row", :key='colI', v-bind:class="[coords[rowI][colI]?'fill':'', !clickable&&disabled?'disabled':'']", @click="togglePixel(rowI,colI)")
  slot
</template>

<script>
import { runeBin2Hex, runeHex2Bin } from './game/utils.js'

export default {
  name: 'Rune',
  props: ["hex", "runeID", 'type', 'disabled', 'clickable'],
  data() {
    return {
    }
  },
  computed: {
    coords() {
      return runeHex2Bin(this.hex)
    }
  },
  methods: {
    togglePixel(row, col) {
      if (this.disabled) return
      let binArr = this.coords.slice()
      binArr[row][col] = binArr[row][col]? 0:1
      let newRune = runeBin2Hex(binArr)
      this.$store.commit('CHANGE_RUNE', {type: this.type, runeID: this.runeID, newRune})
    }
  }
}
</script>

<style lang="stylus">
.rune-container
  margin: 0 5px

.pixelrow
  width: 100%
  height: 12.5%

.pixel
  display: inline-block
  width:16px
  height:16px
  cursor: pointer
  &.disabled
    cursor: default

.fill
  background-color: currentColor
</style>
