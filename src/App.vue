<template>
  <div id="app">
   <home></home>
  </div>

</template>

<script>
import Home from './pages/home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import "scss/common";
</style>
