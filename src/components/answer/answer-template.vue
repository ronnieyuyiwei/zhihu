<template>
  <div class="answer-template">
    <div class="basic-info">
      <div class="num">{{num}}个回答</div>
      <div class="order">
        <span>按时间排序</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-right-copy"></use>
        </svg>
      </div>
    </div>
    <div v-if='hasValue'>
      <div class="answer-content" v-for='data in answerList' >
        <router-link tag='div' to='/home' class="answer" >
          <div class='answer-people'>
            <span><img src="../../img/1.jpg"></span>
            <span>{{data.responder}}</span>
          </div>
          <div class='answer-content'>
            {{data.content}}
          </div>
          <div class='answer-info'>
            <span>{{data.asCommentNum}}&nbsp;赞同</span> ·
            <span>{{data.asZanNum}}&nbsp;评论</span> ·
            <span>1&nbsp;年前</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="message" v-else='hasvalue'>
      <div>暂时还没有用户回答，您可以关注该问题</div>
      <div>有新的回答会及时通知您</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/config";
  .answer-template {
    .basic-info {
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      text-align: center;
      color: $sp-font;
      .num {
        width: 70px;
      }
      .order {
        width: 100px;
      }
    }
    .answer-content {
      &:last-child {
        padding-bottom: 100px;
      }
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
    }

    .message {
      height: 60px;
      text-align: center;
      color: $sp-font;
      margin-top: 25px;
      font-size: 14px;
    }
  ;
  }
</style>
<script>
import Axios from 'axios'
export default {
  name: 'answer-template',
  data () {
    return {
      hasValue: false,
      answerList: []
    }
  },
  props: ['qid'],
  created: function () {
    this.fetchData()
  },
  watch: {
    $route: function () {
      this.answerList = []       // 改变路由后必须清除原数据，否则会重复
      this.fetchData()
    }
  },
  computed: {
    num: function () {        // 回答数
      if (this.hasValue) {
        return this.answerList.length
      } else {
        return 0
      }
    }

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
          this.hasValue = true
          for (let i = 0; i < response.data.length; i++) {
            this.answerList.push({
              content: response.data[i].content,
              responder: response.data[i].responder,
              asCommentNum: response.data[i].num,
              asZanNum: response.data[i].zan
            })
          }
        } else {
          this.hasValue = false
        }
      })
    }
  }
}
</script>
