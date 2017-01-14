<template>
   <div class="foot-menu">
     <div v-bind:class="{ active: isActive }">
       <router-link to="/home" class="home" >
       <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-shouye"></use>
       </svg>
       <span>首页</span>
       </router-link>
     </div>
    <div>
      <router-link to="/smile" class="discovery" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-faxianhou"></use>
        </svg>
        <span>发现</span>
      </router-link>
    </div>
    <div>
      <router-link to="/smile" class="notice">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tongzhi"></use>
        </svg>
        <span>通知</span>
      </router-link>
    </div>
    <div>
      <router-link to="/smile" class="message">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon161605"></use>
        </svg>
        <span>私信</span>
      </router-link>
    </div>
    <div>
      <router-link to="/smile" class="more">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
        <span>更多</span>
      </router-link>
    </div>
   </div>
</template>
<style lang='scss' scoped>
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
    display: block;
    flex: 1;

    span{
      margin-top: -4px;
      display: block;
      font-size: 14px;
    }
  }
  .active a{
    color: #0283FE;
  }
}
</style>
<script>
export default{
  data () {
    return {
      isActive: true
    }
  },
  name: 'foot-menu'
}
</script>
