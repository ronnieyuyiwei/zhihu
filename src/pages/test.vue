<template>
  <div class="test">
    <form action="/picture/headPic" enctype="multipart/form-data" method="post">
    <input type="text" name="title"><br>
    <input type="file" name="upload" multiple="multiple"><br>
    <input type="submit" value="Upload">
    </form>
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
