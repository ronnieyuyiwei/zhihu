<template>
  <div class="my-creation">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      我的创作
    </div>
    <div class="menu">
      <div>回答</div>
      <div>提问</div>
      <div>分享</div>
      <div>专栏</div>
    </div>
    <div class="order">
      <div>按时间排序</div>
      <div>按赞同排序</div>
    </div>
    <div class="answer">
      <div class='answer-title'></div>
      <div class='answer-content'></div>
      <div class='answer-info'></div>
    </div>
    <div class="question">
      <div class='question-title'>
        前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？前端模块化的意义是什么？
      </div>
      <div class='question-content'>
        这里是回答内容这里是回答内容这里是回答内容这里是回答内容这里是回答内容这里是回答内容这里是回答内容
      </div>
      <div class='question-info'>
        <span>3&nbsp;回答</span>
        <span>4&nbsp;关注</span>
        <span>1&nbsp;年前</span>
      </div>

    </div>
    <foot-menu></foot-menu>
  </div>
</template>

<script>
import FootMenu from '../components/foot-menu.vue'
export default{
  name: 'my-creation',
  components: {
    FootMenu
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
      align-items: center;
      font-size: 14px;
      color: $sp-font;
      font-weight: 600;
      div {
        flex: 1;
      }
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
    .question {
      padding: 0 10px 0 10px;
      border-bottom: 1px solid $border;
      .question-title{
        margin-top: 15px;
        width:100%;
        word-break:break-all;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
        font-size: 17px;
        font-weight: 600;
      }
      .question-content {
        margin-top: 10px;
        width:100%;
        word-break:break-all;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
        overflow:hidden;
        font-size: 15px;
        color: $c-font;
      }
      .question-info {
        margin-top: 8px;
        font-size: 14px;
        color: $sm-font;
        padding-bottom: 8px;
      }
    }
  }
</style>
