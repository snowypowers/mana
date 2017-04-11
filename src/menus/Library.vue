<template lang="pug">
.menu#library
  Modal(ref="modal", :show='show', @close="closeModal")
    h3(slot='header') {{ info.title }}
    div(slot='body')
      p(v-for="(para, index) in info.body", :index="index") {{para}}
  .rune-button(v-for="(val, key, index) in lib", :key="index",  @contextmenu.prevent="infoModal(val?key:'')")
    Rune( :hex="val?key:'0018240418001800'", disabled='true')
      RuneInfo(:hex="val?key:'undiscovered'")

</template>

<script>
import Rune from '../Rune.vue'
import RuneInfo from '../RuneInfo.vue'
import Modal from '../Modal.vue'
import {standard} from '../game/runes.js'
export default {
  name: 'Library',
  data () {
    return {
      show: false,
      info: {
        title: 'Nil',
        body: []
      }
    }
  },
  computed: {
    lib() {
      return this.$store.state.library
    }
  },
  methods: {
    blockClick() {
      console.log("blocked!")
      return null
    },
    closeModal() {
      this.show = false
    },
    infoModal(hex) {
      this.show = true
      if (hex == '') {
        this.info = {
          title: '???',
          body: ['You have not discovered this rune yet!']
        }
      } else {
        this.info = standard[hex].info
      }

    }
  },
  components: {
    Rune,
    RuneInfo,
    Modal
  }
}
</script>

<style lang="stylus">

</style>
