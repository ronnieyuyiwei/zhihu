<template>
  <div>
    <div class="swiper-container">
      <div class="refresh-tip">{{refreshTip}}</div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="list">列表</div>
          <div class="list">列表</div>
          <div class="list">列表</div>
          <div class="list">列表</div>
          <div class="list">列表</div>
          <div class="list">列表</div>
        </div>
      </div>
      <div class="load-tip">{{refreshTip}}</div>
      <button @click="fecho">3333333444</button>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    data () {
      return {
        refreshTip: '444',
        tips: '12345'
      }
    },
    methods: {
      initializeSwiper: function () {
        var vm = this
        var mySwiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          mousewheelControl: true,
          freeMode: true,
          onTouchMove: function (swiper) {
            if (mySwiper.translate > 0 && mySwiper.translate < 50) {
              vm.refreshTip = '下拉刷新'
            } else {
              vm.refreshTip = '释放更新'
            }
          },
          onTouchEnd: function (swiper) {
            var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight
            var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight
            console.log('__________')
            console.log('mySwiper.translate' + mySwiper.translate)
            console.log('value' + (_viewHeight - _contentHeight))
            console.log('__________')
            if (mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
              alert('触发上拉加载')
            }
          }
        })
      },
      fecho: function () {
        console.log('显示' + this.refreshTip)
      }
    },
    created: function () {
      this.$nextTick(function () {
        this.initializeSwiper()
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/swiper.css";
  .refresh-tip {
    position: absolute;
    left: 0;
    top: 0;
  }
  /*.load-tip {*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
  /*}*/
  .swiper-container {
    width: 100%;
    overflow: visible;
    .swiper-wrapper {
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
      .list {
        width: 100%;
        height: 45px;
        background: yellow;
        border-bottom: 1px solid black;
        line-height: 45px;
      }
    }
  }
</style>
