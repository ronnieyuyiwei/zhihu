<template>
  <div class="question">
    <div class="question-body">
      <div class="topic">
        <span>话题内容</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
      <div class="question-content">
        <div class="title">{{title}}</div>
        <div class="describe">{{describe}}</div>
        <div class="info">
          <div class="focus">1016人关注</div>
          <div class="comment">{{commentNum}}&nbsp条评论</div>
          <div class="add-focus">
            <button>+&nbsp;关注</button>
          </div>
        </div>
        <div class="button-bar">
          <div class="invite-people">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yaoqing"></use>
              </svg>
            </span>&nbsp;
            <span>
              邀请回答
            </span>
          </div>
          <div class="add-answer" @click='addAnswer'>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bianji"></use>
              </svg>
            </span>&nbsp;
            <span>
              添加回答
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="answer-preview">
      <answer-preview :qid='questionId'></answer-preview>
    </div>
    <div class="question-view">
      <router-view :qid='questionId'></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 @import "../../scss/config";
  .question{
    .question-body {
      .topic {
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          flex: 7;
        }
        svg {
          flex:1;
          color: $icon;
          font-size: 20px;
        }
        width: 100%;
        height: 30px;
        border-bottom: 1px dashed $border;
      }
      .question-content {
        width: 100%;
        min-height: 100px;
        margin-top: 15px;
        .title {
          font-family: SimHei;
          font-size: 18px;
          font-weight: 600;
          padding: 0 10px 0 10px;
        }
        .describe {
          margin-top: 13px;
          font-size: 15px;
          color: $c-font;
          padding: 0 10px 0 10px;
        }
        .info {
          width: 100%;
          margin-top: 15px;
          display: flex;
          align-content: space-around;
          align-items: center;
          .focus {
            flex: 1;
            font-size: 15px;
            color: #6D7784;
            margin-left: 10px;
          }
          .comment {
            flex: 1;
            font-size: 15px;
            color: #6D7784;
          }
          .add-focus {
            flex: 2;
            button{
              float: right;
              margin-right: 20px;
              width: 80px;
              height: 30px;
              border: none;
              background: #0083FE;
              border-radius: 5px;
              font-size: 14px;
              color: #ffffff;
            }

          }
        }
        .button-bar {
          width: 100%;
          margin-top: 15px;
          height:45px;
          border-top: 1px solid $border;
          border-bottom: 1px solid $border;
          display: flex;
          text-align: center;
          line-height: 45px;
          font-size: 14px;
          color: #6D7784;
          .invite-people{
            height: 45px;
            flex: 1;
            border-right: 1px solid $border;
          }
          .add-answer {
            height: 45px;
            flex: 1;
          }
          .icon {
            font-size: 19px;
          }
        }
      }
    }
    .answer-preview {
      width: 100%;
    }
    .question-view { // 弹出层
      width: 100%;
    }
  }
</style>
<script>
import Axios from 'axios'
import AnswerPreview from '../../components/answer/answer-template.vue'
export default {
  name: 'question',
  data () {
    return {
      title: '',
      describe: '',
      focus: '',
      commentNum: '',
      questionId: this.$route.params.id
    }
  },
  components: {
    AnswerPreview
  },
  created: function () {
    this.getData()
  },
  computed: {
    layerPop: function () {
      let reg = /add_answer$/                 // 匹配路由后缀 控制隐藏
      if (reg.test(this.$route.path)) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    getData () {
      Axios.get('/question/getData', {
        params: {
          questionId: this.$route.params.id
        }
      })
      .then((response) => {
        if (response.data.status) {
          this.title = response.data.title
          this.describe = response.data.describe
          this.commentNum = response.data.commentNum
        } else {
          this.$router.replace('/error')  // 404
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
    },
    addAnswer () {
      this.$router.push(`${this.$route.path}/add_answer`)
    }
  }
}
</script>
