<template>
  <div class="test">
    <label><input type="text" v-bind:value="msg" v-on:input="changeMsg"></label>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: 'test',
  data: function () {
    return {
      msg: ''
    }
  },
  methods: {
    changeMsg: function () {
      this.$emit('changeMsg', '12345')
      console.log(this.msg)
    }
  }
}
</script>
