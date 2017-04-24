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
    <my-question v-for='(item, index) in questionList' v-bind:data='item' v-bind:index='index'></my-question>
    <foot-menu></foot-menu>
  </div>
</template>

<script>
import FootMenu from '../components/foot-menu.vue'
import MyQuestion from '../components/question.vue'
import Axios from 'axios'
export default{
  name: 'my-creation',
  components: {
    FootMenu,
    MyQuestion
  },
  data () {
    return {
      questionList: []
    }
  },
  mounted: function () {
    Axios.get('/question/getQuestion', (err, response) => {
      if (err) {
        console.log(err)
      }
    })
   .then((response) => {
     for (let i = response.data.length; i > 0; i--) {
       this.questionList.push({
         questionTitle: response.data[i - 1].title,
         questionContent: response.data[i - 1].describe
       })
       console.log(i)
     }
   })
    .catch((error) => {
      console.log(error)
    })
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
  }
</style>
