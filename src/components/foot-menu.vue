<template>
   <div class="foot-menu">
     <div class="home">
       <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-shouyeshouye"></use>
       </svg>
       <span>首页</span>
     </div>
     <div class="discovery">
       <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-faxianhou"></use>
       </svg>
       <span>发现</span>
     </div>
     <div class="notice">
       <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-tongzhi"></use>
       </svg>
       <span>通知</span>
     </div>
     <div class="message">
       <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-icon161605"></use>
       </svg>
       <span>私信</span>
     </div>
     <div class="more">
       <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-gengduo"></use>
       </svg>
       <span>更多</span>
     </div>
   </div>
</template>
<style lang='scss'>
.foot-menu{
  height: 52px;
  width: 100%;
  max-width: 640px;
  background: white;
  position: fixed;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #BFBFCD;
  font-size: 24px;
  border-top: 1px solid #E7E7E7;

  div{
    margin-top: 6px;
    flex: 1;
    span{
      margin-top: -3px;
      display: block;
      font-size: 14px;
    }
  }
}
</style>
<script>
export default{
  name: 'foot-menu'
}
</script>
