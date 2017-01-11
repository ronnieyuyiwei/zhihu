<template>
  <div id="app">
    <h1>Hello App!</h1>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-fenxiang"></use>
    </svg>
    <div class="testDiv">Special Div</div>
    <smile></smile>

  </div>

</template>

<script>
import Hello from './components/Hello'
import Smile from './components/Smile'
export default {
  name: 'app',
  components: {
    Hello,
    Smile
  }
}
</script>

<style lang="scss">
  @import "scss/common";
</style>
