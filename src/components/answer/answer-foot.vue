<template>
  <div class="answer-foot">
    <template v-for="item in list">
      <li>
        <router-link :to='item.path'>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href='item.icon'></use>
          </svg>
        </router-link>
        <span>{{item.title}}</span>
      </li>
    </template>
  </div>
</template>
<style lang='scss' scoped>
  .answer-foot {
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
    color: #888D97;
    font-size: 21px;
    border-top: 1px solid #E7E7E7;
    li {
      display: block;
      flex: 1;
      span {
        margin-top: -3px;
        display: block;
        font-size: 13px;
        color: #888D97;
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
      list: [
        {
          title: '赞同',
          path: '/home',
          icon: '#icon-shangxia'
        },
        {
          title: '感谢作者',
          path: '/discovery',
          icon: '#icon-icon1'
        },
        {
          title: '加入收藏',
          path: '/notice',
          icon: '#icon-shoucang'
        },
        {
          title: '评论',
          path: '/message',
          icon: '#icon-icon'
        }
      ]
    }
  },
  name: 'answer-foot'
}

</script>
