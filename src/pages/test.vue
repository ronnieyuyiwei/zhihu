<template>
  <div class="test">
    <p>本文件主要用于测试</p>
    <!--<form action="/api/picture/test/updatePic" enctype="multipart/form-data" method="post">-->
    <!--<input type="text" name="title"><br>-->
    <!--<input type="file" name="upload" multiple="multiple"><br>-->
    <!--<input type="submit" value="Upload">-->
    <!--</form>-->
    <!--<input type="file" @change="updateImage">-->
    <input type="file" @change="updateImage"/>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    methods: {
      updateImage (e) {
        let formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('action', 'test')
        Axios({
          url: '/picture/test/updatePic',
          method: 'post',
          data: formData,
          headers: {'Content-Type': 'multipart/form-data'}
        }).then((res) => { console.log(res) })
      }
    }
  }

</script>
<style lang='scss' scoped>

</style>
