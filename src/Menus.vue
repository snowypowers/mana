<template lang="pug">
div#menus
  #tabs
    span( :class="{'active': tabs.lib}", @click="set('lib')") Library
    span( :class="{'active': tabs.upg}", @click="set('upg')") Upgrades
    span( :class="{'active': tabs.res}", @click="set('res')") Research
    span( :class="{'active': tabs.hel}", @click="set('hel')") Help
    span( :class="{'active': tabs.opt}", @click="set('opt')") Options
  #tab-content
    Library( v-if="tabs.lib")
    Upgrades( v-if="tabs.upg")
    Research( v-if="tabs.res")
    Help( v-if="tabs.hel")
    Options( v-if="tabs.opt")
</template>

<script>
import Library from './menus/Library.vue'
import Upgrades from './menus/Upgrades.vue'
import Options from './menus/Options.vue'
import Research from './menus/Research.vue'
import Help from './menus/Help.vue'

export default {
  name: 'Menus',
  data () {
    return {
      tabs :{
        lib: true,
        upg: false,
        res: false,
        hel: false,
        opt: false
      }

    }
  },
  methods: {
    set(tab) {
      let keys = Object.keys(this.tabs)
      for (let i=0;i<keys.length;i++) {
        if (keys[i] == tab) this.tabs[keys[i]] = true
        else this.tabs[keys[i]] = false
      }
    }
  },
  components: {
    Library, Upgrades, Research, Help, Options
  }
}
</script>

<style lang="stylus">
#menus
  width: 100%
  height: 250px

#tabs
  width: 100%
  height: 50px
  > span
    border-radius: 5px
    padding: 5px 5px
    margin: 0 5px
    cursor: pointer

.active
  border: 3px solid currentColor

#tab-content
  width: 100%
  height: 100%

.rune-button
  flex: 0 0 auto

</style>
