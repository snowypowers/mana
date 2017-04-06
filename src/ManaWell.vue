<template lang="pug">
svg#well(height="100px" width="100px" alt="The Mana Well")
  circle(cx="50" cy="50" r="40" stroke-width="5" @click="drawMana")
</template>

<script>
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
    manaMod() {
      return this.$store.getters.manaMods
    }
  },
  methods:{
    drawMana: function() {
      let amt = Math.floor(Math.random() * 4) + 1
      for (let i=0;i<this.manaMod.length;i++) {
          amt = this.manaMod[i](amt)
      } 
      this.$store.commit("CHANGE_MANA", amt)
    }
  }
}
</script>

<style lang="stylus">

</style>
