<template lang="pug">
#toast
  div(style="display: inline")
    .note(v-for="(note, hash, index) in notes" @click="quickClose(hash)") {{ note.msg }}

</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
    }
  },
  computed: {
    notes() {
      return this.$store.state.toasts
    }
  },
  methods: {
    quickClose(hash) {
      this.$store.dispatch('untoast', hash)
    }
  }
}
</script>

<style lang="stylus">
#toast
  position: relative
  text-align: left
  width: 0
  height:0
  top: 0px
  left: 0px

.note
  //display: block
  position: relative
  padding: 5px
  margin: 5px
  border: 3px solid currentColor
  border-radius: 5px
  min-width: 100px
</style>
