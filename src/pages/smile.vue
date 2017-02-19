
<template>
  <div class="smile">
    <div>显示total：{{total}}</div>
    <test v-on:increment="incrementTotal"></test>
    <test v-on:increment="incrementTotal"></test>
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
      total: 0
    }
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
