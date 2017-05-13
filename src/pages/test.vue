<template>
  <div class="test">
    <form action="/test" method="get">
      <input type="text" name="xss">
      <input type="submit">
    </form>
    <hr>
    你输入的字符为: {{msg}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: null
      }
    }
  }
</script>
<style lang='scss' scoped>

</style>
