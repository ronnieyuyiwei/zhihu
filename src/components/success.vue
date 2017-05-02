<template>
  <div class="success">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chenggong"></use>
      </svg>
    </div>
    <div>发布成功</div>
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
      font-size: 30px;
      color: #23DE55;
    }
    font-size: 15px;
    color: $c-font;
  }
</style>
<script>
  export default {
    name: 'success'
  }
</script>
