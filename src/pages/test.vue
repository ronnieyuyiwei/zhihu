<template>
  <div class="test">
    <p>本文件主要用于测试</p>
    <!--<form action="/api/picture/test/updatePic" enctype="multipart/form-data" method="post">-->
    <!--<input type="text" name="title"><br>-->
    <!--<input type="file" name="upload" multiple="multiple"><br>-->
    <!--<input type="submit" value="Upload">-->
    <!--</form>-->
    <input type="file" @change="updateImage">
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    methods: {
      updateImage (e) {
        let file = e.target.files
        let form = new FormData()
        form.append('type', 'image')
        form.append('media', file, 'test.jpg')
        form.getLength((err, length) => {
          if (err) {
            console.log(err)
          }
          let headers = Object.assign({'Content-Length': length}, form.getHeaders())
          Axios.post('/picture/test/updatePic', form, {headers: headers})
            .then((response) => {
              console.log(response.data)
            })
            .catch(e => { console.log(e) })
        })
      }
    }
  }
</script>
<style lang='scss' scoped>

</style>
