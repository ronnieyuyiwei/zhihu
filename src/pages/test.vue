<template>
  <div class="test">
    <div>
      <input type="file" id="poster" name="img" accept="image/*" @change='uploadImage'>
    </div>
    <div style="width:300px;height:300px;border:5px red solid"><img :src='pic' width="300px"></div>
    <div>显示pic： {{pic}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pic: null,
        images: []
      }
    },
    methods: {
      uploadImage (e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files)
      },
      createImage (file) {
        if (typeof FileReader === 'undefined') {
          alert('您的浏览器不支持图片上传，请升级您的浏览器')
          return false
        }
        var vm = this
        var reader = new FileReader()
        reader.readAsDataURL(file[0])
        reader.onload = function (e) {
          console.log(e.target.result)
          vm.images.push(e.target.result)
          vm.pic = e.target.result
        }
      }
    }
  }
</script>
<style lang='scss' scoped>

</style>
