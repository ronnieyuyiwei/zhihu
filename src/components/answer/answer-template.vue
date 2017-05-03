<template>
  <div class="answer-template">
    <div v-for='data in answerList'>
      <router-link tag='div' to='/home' class="answer" >
        <div class='answer-people'>
          <span><img src="../../img/1.jpg"></span>
          <span>{{data.responder}}</span>
        </div>
        <div class='answer-content'>
          {{data.content}}
        </div>
        <div class='answer-info'>
          <span>2&nbsp;赞同</span> ·
          <span>4&nbsp;评论</span> ·
          <span>1&nbsp;年前</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/config";
  .answer {
    margin-top: 10px;
    padding: 0 10px 0 10px;
    border-bottom: 1px solid $border;
    border-top: 1px solid $border;
    background: white;
    .answer-people{
      margin-top: 15px;
      width:100%;
      word-break:break-all;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      overflow:hidden;
      display: inline-flex;
      align-items: center;
      span{
        img{
          width: 24px;
          border-radius: 2000px;
        }
        margin-left: 5px;
        font-size: 13px;
        font-weight: 600;
        color: $sp-font;
      }
    }
    .answer-content {
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
    .answer-info {
      margin-top: 8px;
      font-size: 14px;
      color: $sm-font;
      padding-bottom: 8px;
    }
  }
</style>
<script>
import Axios from 'axios'
export default {
  name: 'answer-template',
  data () {
    return {
      answerList: []
    }
  },
  props: ['qid'],
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      Axios.get('/answer/getAnswer_preview', {
        params: {
          questionId: this.qid
        }
      })
      .then((response) => {
        if (response.data) {
          for (let i = 0; i < response.data.length; i++) {
            this.answerList.push({
              content: response.data[i].content,
              responder: response.data[i].responder
            })
          }
        }
      })
    }
  }
}
</script>
