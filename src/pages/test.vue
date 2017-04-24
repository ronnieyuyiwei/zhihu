<template>
  <div class="test">
    <!--g<div>{{text}}</div>-->
    <!--<div class="dv" contenteditable="true" @input="handleClick($event)"></div>-->
    <div>{{msg}}</div>
    <input type="text" v-model="msg">
  </div>
</template>
<style lang="scss" scoped>
  div{
    font-size: 16px;
  }
  .dv {
    margin-left: 100px;
    margin-top: 100px;
    width: 400px;
    height: 400px;
    border: 1px solid black;
  }
  textarea{
    width: 500px;
    resize: both;
  }
</style>
<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
