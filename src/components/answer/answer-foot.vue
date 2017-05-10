<template>
  <div class="answer-foot">
    <template v-for="item in list">
      <li>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href='item.icon'></use>
        </svg>
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
      height: 52px;
      display: block;
      flex: 1;
      .icon {
        margin-top: 5px;
      }
      span {
        display: block;
        font-size: 13px;
        color: #888D97;
      }
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
          icon: '#icon-shangxia'
        },
        {
          title: '感谢作者',
          icon: '#icon-icon1'
        },
        {
          title: '加入收藏',
          icon: '#icon-shoucang'
        },
        {
          title: '评论',
          icon: '#icon-icon'
        }
      ]
    }
  },
  name: 'answer-foot'
}

</script>
