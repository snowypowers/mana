<template lang="pug">
.menu#upgrades
  .rune-button(v-for="(upgrade, index) in availableUpgrades", :key="index", @click="purchase(upgrade)")
    Rune( :hex="upgrade.hex", disabled='true', clickable=true)
      .info
        p {{ upgrade.name }}
        p {{ upgrade.cost + " mana"}}
        p {{ upgrade.desc }}

</template>

<script>
import Rune from '../Rune.vue'
import RuneInfo from '../RuneInfo.vue'
import upgrades from '../game/upgrades.js'
import {flattenObject} from '../game/utils.js'

export default {
  name: 'Upgrades',
  data () {
    return {
    }
  },
  computed: {
    availableUpgrades() {
      let bought = this.$store.state.upgrades
      let upgradeArr = flattenObject(upgrades)
      return upgradeArr.filter((u) => {
        if (bought.includes(u.id)) return false
        for (let i=0;i<u.depends.length;i++) {
          if (!bought.includes(u.depends[i])) return false
        }
        return true
      })
    }
  },
  methods: {
    purchase(u) {
      this.$store.dispatch('buyUpgrade', u)
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
