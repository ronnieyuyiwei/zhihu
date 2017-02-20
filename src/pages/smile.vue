
<template>
  <div class="smile">
    <br>
    <test v-on:changeMsg="change"></test>
    <div>AOA{{msg}}</div>
  </div>
</template>

<script>
import test from '../components/test.vue'
export default {
  name: 'smile',
  components: {
    test
  },
  data: function () {
    return {
      msg: ''
    }
  },
  methods: {
    change: function (msg) {
      this.msg = msg
      console.log('active')
      console.log('qwert' + msg)
      console.log('abcdefg' + name)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
