<template>
  <div class="smile">
    <button v-on:click="shuffle">Shuffle</button>
    <input type="range" min="0" max="100">
  </div>
</template>
<script>
export default {
  name: 'smile',
  data: function () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .flip-list-move {
    transition: transform 1s;
  }
</style>
