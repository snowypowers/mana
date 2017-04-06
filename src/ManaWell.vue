<template lang="pug">
svg#well(height="100px" width="100px" alt="The Mana Well")
  circle(cx="50" cy="50" r="40" stroke-width="5" @click="drawMana")
</template>

<script>
export default {
  name: 'ManaWell',
  data () {
    return {
    }
  },
  methods:{
    drawMana: function() {
      this.$store.commit("CHANGE_MANA", Math.floor(Math.random() * 5))
    }
  }
}
</script>

<style lang="stylus">

</style>
