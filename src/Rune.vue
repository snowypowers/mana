<template lang="pug">
#rune(draggable=true)
  .pixelrow(v-for="(row, rowI) in coords")
    .pixel(v-for="(item, colI) in row", v-bind:class="coords[rowI][colI]?fill:'' ", @click="togglePixel(rowI,colI)")

</template>

<script>
function leftpad (s, p) {
  return Array(p-s.length+1).join('0') + s
}

export default {
  name: 'Rune',
  props: ["hex", "runeID"],
  data() {
    return {
      fill: 'fill'
    }
  },
  computed: {
    coords() {
      let chunks = this.hex.match(/.{1,2}/g)
      let binaryStrings = chunks.map((chunk)=> {
        let i = parseInt(chunk,16).toString(2)
        return leftpad(i,8)
      })
      let binaryChunks = binaryStrings.map((s)=> {return s.match(/.{1}/g).map((x)=>parseInt(x))})
      return binaryChunks
    }
  },
  methods: {
    togglePixel(row, col) {
      let binArr = this.coords.slice()
      binArr[row][col] = binArr[row][col]? 0:1
      let newRune = binArr.reduce((acc, val)=> {
        let i = parseInt(val.join(''),2).toString(16)
        i = leftpad(i,2)
        return acc + i
      }, "")
      this.$store.commit('changeRune', {runeID: this.runeID, newRune})
    }
  }
}
</script>

<style lang="stylus">
#rune
  width: 128px
  height: 128px
  border: 1px solid white

.pixelrow
  width: 100%
  height: 12.5%

.pixel
  display: inline-block
  width:16px
  height:16px

  cursor: pointer

.fill
  background-color: white
</style>
