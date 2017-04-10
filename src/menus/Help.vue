<template lang="pug">
.menu#help
  Modal(ref="modal", :show='show', @close="closeModal")
    h3(slot='header') {{ msg.title }}
    div(slot='body')
      p(v-for="(para, index) in msg.body", :index="index") {{para}}
  .rune-button(v-for="(section,  index) in helpContent", :key="index", @click='showHelp(section)')
    Rune( :hex="section.hex", :disabled='true', :clickable='true')
      p {{ section.name }}
</template>

<script>
import Rune from '../Rune.vue'
import Modal from '../Modal.vue'
import help from '../game/help.js'

export default {
  name: 'Help',
  data () {
    return {
      show: false,
      msg: {
        title: 'Hi!',
        body: ' BODY ',
        
      }
    }
  },
  computed: {
    helpContent() {
      return help
    }
  },
  methods: {
    showHelp(m) {
      this.msg = m
      this.show = true
    },
    closeModal() {
      this.show = false
    }
  },
  components: {
    Rune,
    Modal
  }
}
</script>

<style lang="stylus">

</style>
