<template>
  <div class="more">
    <search-bar></search-bar>
    <div class="operate">更多</div>
    <div class="person">
      <div class="head">
        <img src="../img/head.jpg">
      </div>
      <div class="info">
        <span class="name">申智珉</span>
        <span class="notice">查看或编辑个人资料</span>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href='#icon-jiantou'></use>
      </svg>
    </div>
    <div class="mine">
      <template v-for="item in list">
        <div class="my-operate">
            <span class="left-icon">
              <svg class="icon" aria-hidden="true">
              <use :xlink:href='item.icon'></use>
            </svg>
            </span>
             <span class="title">{{item.title}}</span>
             <span class="right-icon">
             <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-jiantou'></use>
             </svg>
          </span>
        </div>
      </template>
    </div>
    <foot-menu></foot-menu>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/config";
  .more {
    .operate {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #54585D;
      font-weight: 600;
      border-bottom: 1px solid $border-gray;
    }
    .person {
      width: 100%;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid $border-gray;
      .head {
        flex: 1.2;
        img {
          margin-left: 15px;
          width: 50px;
          border-radius: 1000px;
        }
      }
      .info {
        flex: 4;
        span {
          display: block;
        }
        .name {
          font-size: 14px;
          color: $c-font;
        }
        .notice {
          font-size: 12px;
          color: $sm-font;
        }
      }
      .icon {
        flex: 1;
        color: $sm-font;
        font-size: 18px;
      }
    }
    .mine {
      .my-operate {
        height: 43px;
        display: flex;
        text-align: center;
        line-height: 43px;
        .left-icon {
          flex: 1.2;
          font-size: 22px;
          color: $icon;
        }
         .title{
           flex: 4;
           text-align: left;
           color: $c-font;
           font-size: 14px;
           border-bottom: 2px solid $border-gray;
         }
         .right-icon {
           flex: 1;
           color: $sm-font;
           font-size: 15px;
           border-bottom: 2px solid $border-gray;
         }

      }
    }
  }
</style>
<script>
import SearchBar from '../components/search-bar.vue'
import FootMenu from '../components/foot-menu.vue'
export default {
  data () {
    return {
      list: [
        {
          title: '我的关注',
          icon: '#icon-guanzhu'
        },
        {
          title: '我的收藏',
          icon: '#icon-shoucang'
        },
        {
          title: '我的草稿',
          icon: '#icon-caogao'
        },
        {
          title: '最近浏览',
          icon: '#icon-zuijin'
        }
      ]
    }
  },
  components: {
    SearchBar,
    FootMenu
  }
}
</script>
