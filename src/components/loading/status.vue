<template>
  <div class="status">
    <div class="success" v-if='status'>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chenggong"></use>
      </svg>
      <div class="message">发布成功</div>
    </div>
    <div class="error" v-else="status">
      <div>
        <svg class="icon" id="error" aria-hidden="true">
          <use xlink:href="#icon-cha"></use>
        </svg>
      </div>
      <div class="message">发布失败</div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  @import "../../scss/config";
  .status {
    display: flex;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: $border;
    border-radius: 8px;
    margin: 0 auto;
  }
  .success, .error {
    width: 70px;
    height: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      font-size: 28px;
      color: #23DE55;
    }
    font-size: 14px;
    color: $c-font;
    .message {
      margin-top: 5px;
    }
    #error {
      color: #D53027;
      font-size: 26px;
    }
  }

</style>
<script>
  export default {
    name: 'success',
    props: ['status']
  }
</script>
