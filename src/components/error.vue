<template>
  <div class="success">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cha"></use>
      </svg>
    </div>
    <div class="message">发布失败</div>
  </div>
</template>
<style lang='scss' scoped>
  @import "../scss/config";
  .success {
    width: 70px;
    height: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      font-size: 28px;
      color: #CC0000;
    }
    font-size: 14px;
    color: $c-font;
    .message {
      margin-top: 5px;
    }
  }
</style>
<script>
  export default {
    name: 'success'
  }
</script>
