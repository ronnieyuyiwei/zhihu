<template>
  <div class="foot-menu">
    <template v-for="item in list">
      <router-link :to='item.path'>
        <div><svg class="icon" aria-hidden="true">
          <use :xlink:href='item.icon'></use>
        </svg>
        </div>
        <div><span>{{item.title}}</span></div>
      </router-link>
    </template>
  </div>
</template>
<style lang='scss' scoped>
  .foot-menu {
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
    font-size: 23px;
    border-top: 1px solid #E7E7E7;
    z-index: 999;
    a {
      display: block;
      flex: 1;
      span {
        margin-top: -4px;
        display: block;
        font-size: 14px;
        color: #BFBFCD
      }
    }
    .active a {
      color: #0283FE;
    }
  }
</style>
<script>
export default{
  data () {
    return {
      isActive: false,
      list: [
        {
          title: '首页',
          path: '/home',
          icon: '#icon-shouye'
        },
        {
          title: '发现',
          path: '/discovery',
          icon: '#icon-faxianhou'
        },
        {
          title: '通知',
          path: '/notice',
          icon: '#icon-tongzhi'
        },
        {
          title: '私信',
          path: '/register',
          icon: '#icon-icon161605'
        },
        {
          title: '更多',
          path: '/more',
          icon: '#icon-gengduo'
        }
      ]
    }
  },
  name: 'foot-menu'
}

</script>
