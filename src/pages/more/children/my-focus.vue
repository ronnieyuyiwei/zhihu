<template>
  <div class="my-focus">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      我的关注
    </div>
    <div class="menu">
      <div class="btn" v-for='item in menus'>
        <router-link :to='item.path'>
          <div>{{item.name}}</div>
        </router-link>
      </div>
    </div>
    <div class="question-preview">
      <div v-for='item in questionList'>
        <router-link tag='div' class='question-content' :to='item.path'>
          <div class="question-title">{{item.title}}</div>
          <div class="question-info">{{item.focusNum}}人关注，&nbsp;{{item.answerNum}}人回答</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'focus',
  data () {
    return {
      menus: [
        {
          name: '问题',
          path: 'question'
        },
        {
          name: '用户',
          path: 'column'
        }
      ],
      questionList: []
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData () {
      Axios.get('/user/getFocusProblem')
        .then((response) => {
          if (response.data) {
            response.data.forEach((data) => {
              this.questionList.push({
                title: data.title,
                answerNum: data.answerNum,
                focusNum: data.focusNum,
                path: `/question/${data.qid}`
              })
            })
          }
        })
    }
  }
}
</script>
<style lang='scss' scoped>
  @import "../../../scss/config";
  .my-focus {
    position: absolute;
    top: 0 ;
    left: 0;
    background: white ;
    width: 100%;
    min-height: 1000px;
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
      .btn{
        flex: 1;
        a{
          display: inline-block;
          width: 50%;
          height: 40px;
        }
        .router-link-active{
          border-bottom: 2px solid $blue
        }
      }
    }
    .question-preview {
      width: 100%;
      .question-content {
        min-height: 55px;
        width: 95%;
        margin: 0 auto;
        border-bottom: 1px solid $border;
        .question-title {
          margin-top: 12px;
          font-size: 16px;
          font-weight: 600;
          color: $pr-font;
          display: -webkit-box;
          display: -moz-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          -moz-box-orient: vertical;
          -moz-line-clamp: 2;
          overflow: hidden;
        }
        .question-info {
          margin-top: 7px;
          margin-bottom: 7px;
          font-size: 13px;
          color: $sm-font;
        }
      }
    }
  }
</style>
