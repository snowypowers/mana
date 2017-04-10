<template lang="pug">
svg#well(height="100px" width="100px" alt="The Mana Well" title='The Mana Well')
  circle(cx="50" cy="50" r="40" stroke-width="5" @click.prevent="drawMana")
</template>

<script>
import {manawell} from './game/upgrades.js'

export default {
  name: 'ManaWell',
  data () {
    return {
      compiled: (val) => {
        return val
      }
    }
  },
  computed: {
    manaMods() {
      return this.$store.getters.manaMods
    },
    upgrades() {
      return this.$store.getters.manawellUpgrades
    },
    base() {
      return () => Math.floor(Math.random() * 2) + 1
    }
  },
  methods:{
    drawMana: function() {
      let amt = this.base()
      for (let i=0;i<this.upgrades.length;i++) {
          amt = this.upgrades[i](amt)
      }
      for (let i=0;i<this.manaMods.length;i++) {
          amt = this.manaMods[i](amt)
      }
      this.$store.commit("CHANGE_MANA", amt)
    }
  }
}
</script>

<style lang="stylus">

</style>
