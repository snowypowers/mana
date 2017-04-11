<template lang="pug">
transition(name='modal', v-if="show")
  div.modal-mask( @click="close")
    div.modal-wrapper
      div.modal-container( @click.stop="")
        div.modal-header
          slot(name='header')
        div.modal-body
          slot(name='body')
        div.modal-footer
          button.modal-default-button( @click="close") OK

</template>

<script>
export default {
  name: 'Modal',
  props: ['show'],
  data () {
    return {

    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus">
.modal-mask
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;


.modal-wrapper
  display: table-cell;
  vertical-align: middle;


.modal-container
  width: 500px
  margin: 0px auto
  padding: 20px 30px
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
  transition: all .3s ease
  font-family: Helvetica, Arial, sans-serif
  background-color: #212121


.modal-header h3
  margin-top: 0
  color: currentColor

.modal-body
  margin: 20px 0
  text-align: left
  word-wrap: break-word

.modal-footer
  min-height: 40px

.modal-default-button
  background-color: #212121
  border: 3px solid currentColor
  border-radius: 5px
  color: currentColor
  padding: 8px 16px
  text-align: center
  display: inline-block
  float: right


.modal-enter
  opacity: 0


.modal-leave-active
  opacity: 0


.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

</style>
