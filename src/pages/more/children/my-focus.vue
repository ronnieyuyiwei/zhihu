<template>
  <div class="my-focus">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      我的创作
    </div>
    <div class="menu">
      <div class="btn" v-for='item in menus'>
        <router-link :to='item.path'>
          <div>{{item.name}}</div>
        </router-link>
      </div>
    </div>
    <div class="menu-conent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'focus',
  data () {
    return {
      menus: [
        {
          name: '问题',
          path: 'question'
        },
        {
          name: '用户',
          path: 'column'
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
  @import "../../../scss/config";
  .my-focus {
    position: absolute;
    top: 0 ;
    left: 0;
    background: white ;
    width: 100%;
    min-height: 1000px;
    .title{
      width: 100%;
      height: 50px;
      text-align: center;
      font-size: 16px;
      color: $c-font;
      line-height: 50px;
      svg{
        color: $font;
        font-size: 20px;
        position: absolute;
        top: 15px;
        left: 5px;
      }
    }
    .menu {
      height: 40px;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
      display: flex;
      padding: 0 30px 0 30px;
      text-align: center;
      justify-content: center;
      line-height: 40px;
      font-size: 14px;
      color: $sp-font;
      font-weight: 600;
      .btn{
        flex: 1;
        a{
          display: inline-block;
          width: 50%;
          height: 40px;
        }
        .router-link-active{
          border-bottom: 2px solid $blue
        }
      }
    }
  }
</style>
