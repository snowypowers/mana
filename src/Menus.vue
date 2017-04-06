<template lang="pug">
div#menu
  #tabs
    span( :class="{'active': lib}", @click="setLib") Library
    span( :class="{'active': res}", @click="setRes") Research
    span( :class="{'active': opt}", @click="setOpt") Options
  #tab-content
    Library( v-if="lib")
    Research( v-if="res")
    Options( v-if="opt")
</template>

<script>
import Library from './menus/Library.vue'
import Options from './menus/Options.vue'
import Research from './menus/Research.vue'

export default {
  name: 'Menus',
  data () {
    return {
      lib: true,
      res: false,
      opt: false
    }
  },
  methods: {
    setLib() {
      this.lib = true
      this.res = false
      this.opt = false
    },
    setRes() {
      this.lib = false
      this.res = true
      this.opt = false
    },
    setOpt() {
      this.lib = false
      this.res = false
      this.opt = true
    }
  },
  components: {
    Library, Research, Options
  }
}
</script>

<style lang="stylus">
#menu
  width: 100%
  height: 20vh

#tabs
  width: 100%
  height: 50px
  > span
    border-radius: 5px
    padding: 5px 5px
    margin: 0 5px

.active
  border: 3px solid currentColor

#tab-content
  width: 100%
  height: auto
</style>
