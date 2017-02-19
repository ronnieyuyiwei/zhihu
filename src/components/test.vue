<template>
  <div class="test">
    <button v-on:click='increment'>{{counter}}</button>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: 'button-counter',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }

}
</script>
