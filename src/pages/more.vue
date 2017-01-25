<template>
  <div class="more">
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
           <div class="icon"></div>
           <div class="my-operate">
             <span>{{item.title}}</span>
             <span>
               <svg class="icon" aria-hidden="true">
               <use :xlink:href='item.icon'></use>
               </svg>
             </span>
             <span>
               <svg class="icon" aria-hidden="true">
               <use xlink:href='#icon-jiantou'></use>
             </svg>
             </span>
           </div>
       </template>
     </div>
     <div class="others"></div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/config";
  .more{
    .operate{
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
    .person{
      width: 100%;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      .head{
        flex:1.2;
        img{
          width: 60px;
          border-radius: 1000px;
        }
      }
      .info{
        flex: 4;
      }
      .icon{
        flex: 1;
      }
    }
  }

</style>
<script>
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
  }
}
</script>
