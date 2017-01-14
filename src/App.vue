<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
/* eslint-disable */
import Home from './pages/home'

export default {
  name: 'app',
  components: {
    Home
  },
  mounted () {
    this.appShow()
  },
  methods: {
    appShow () {
      const END_TIME = new Date().getTime()
      const diffTime = END_TIME - PAGE_START_TIME
      const timer = setTimeout(() => {
        clearTimeout(timer)
        document.querySelector('.app-loading').className += ' app-loading-hide'
  }, diffTime > 2000 ? 0 : 2000 - diffTime)
    }
  }
}
/* eslint-enable */
</script>

<style lang="scss">
  @import "scss/common";
</style>
