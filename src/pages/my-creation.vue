<template>
  <div class="my-creation">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      我的创作
    </div>
    <div class="menu">
      <div v-for='item in menus'>
        <router-link :to='item.path'>
          <div>{{item.name}}</div>
        </router-link>
      </div>
    </div>

    <!--<div v-show='menu.answer' class="order">-->
      <!--<div>按时间排序</div>-->
      <!--<div>按赞同排序</div>-->
    <!--</div>-->
    <!--<div v-show='menu.answer' class="answer">-->
      <!--<div class='answer-title'>222222222</div>-->
      <!--<div class='answer-content'>333</div>-->
      <!--<div class='answer-info'>3334</div>-->
    <!--</div>-->
    <!--<foot-menu></foot-menu>-->
  <!--</div>-->
</div>
</template>

<script>
import FootMenu from '../components/foot-menu.vue'
// import Axios from 'axios'
export default {
  name: 'my-creation',
  components: {
    FootMenu
  },
  data () {
    return {
      menus: [
        {
          name: '回答',
          title: 'answer',
          path: 'answer'
        },
        {
          name: '提问',
          title: 'question',
          path: 'question'
        },
        {
          name: '分享',
          title: 'share',
          path: 'answer'
        },
        {
          name: '专栏',
          title: 'column',
          path: 'answer'
        }
      ]
    }
  },
  methods: {
    changeMenu: function (data) {
      for (var item in this.menu) {
        if (data === item) {
          this.menu[item] = true
        } else {
          this.menu[item] = false
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  @import "../scss/config";
  .my-creation {
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
      a {
        flex: 1;
        height: 40px;
      }
      span {
        display: inline-block;
        width: 60%;
      }
      span.active {
        border-bottom: 2px solid $blue
      }

    }
    .menu-question{
      background: $border-gray;
    }
    .order {
      display: flex;
      align-items: center;
      text-align: center;
      height: 40px;
      line-height: 30px;
      color: $sp-font;
      font-size: 14px;
      font-weight: 600;
      border-bottom: 1px solid $border;
      div {
        height: 30px;
        flex: 1;
        &:nth-child(1) {
          border-right: 1px solid $border;
        }
      }
    }
  }
</style>
