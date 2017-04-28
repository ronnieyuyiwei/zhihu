<template>
  <div class="my-creation">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      我的创作
    </div>
    <div class="menu">
      <!--<div @click="changeMenu('answer')"><span>回答</span></div>-->
      <!--<div @click="changeMenu('question')"><span>提问</span></div>-->
      <!--<div @click="changeMenu('share')"><span>分享</span></div>-->
      <!--<div>专栏</div>-->
      <template v-for='item in menu'>
        <router-link :to='itme.path'>
          <div>{{item.title}}</div>
        </router-link>
      </template>
    </div>
    <div v-show='menu.answer' class="order">
      <div>按时间排序</div>
      <div>按赞同排序</div>
    </div>

    <div class="menu-question" v-if='menu.question'>
      <my-question v-for='(item, index) in questionList' v-bind:data='item' v-bind:index='index'></my-question>
    </div>
    <div v-show='menu.answer' class="answer">
      <div class='answer-title'>222222222</div>
      <div class='answer-content'>333</div>
      <div class='answer-info'>3334</div>
    </div>
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
      questionList: [],
      menu: [
        {
          title: 'answer',
          path: ''
        },
        {
          title: 'question'
        },
        {
          title: 'share'
        },
        {
          title: 'column'
        }
      ]
    }
  },
  mounted: function () {
    Axios.get('/question/getQuestion', (err, response) => {
      if (err) {
        console.log(err)
      }
    })
   .then((response) => {
     for (let i = 0; i < response.data.length; i++) {
       this.questionList.push({
         questionTitle: response.data[i].title,
         questionContent: response.data[i].describe
       })
     }
   })
    .catch((error) => {
      console.log(error)
    })
  },
  methods: {
    changeMenu: function (data) {
      for (var item in this.menu) {
        if (data === item) {
          this.menu[item] = true
        } else {
          this.menu[item] = false
        }
      }
    }
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
      line-height: 40px;
      font-size: 14px;
      color: $sp-font;
      font-weight: 600;
      div {
        flex: 1;
        height: 40px;
      }
      span {
        display: inline-block;
        width: 60%;
      }
      span.active {
        border-bottom: 2px solid $blue
      }

    }
    .menu-question{
      background: $border-gray;
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
