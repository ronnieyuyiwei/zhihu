<template>
  <div class="question">
    <div class="search-bar">
      <search-bar></search-bar>
    </div>
    <div v-show='questionPage'>
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
            <router-link tag='div' :to="{name: 'comment', params: {qid: this.$route.params.id}}" class="comment">{{commentNum}}&nbsp条评论</router-link>
            <div class="add-focus" v-if='!focused'>
              <button @click='addFocus'>+&nbsp;关注</button>
            </div>
            <div class="focus-btn" @click="cancelFocus" v-else='!focused'>
              <button>已关注</button>
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
            <div class="view-answer" v-if='answered' @click="showMyAnswer">
              查看我的回答
            </div>
            <div class="add-answer" @click='addAnswer' v-else='answered'>
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
      <!--回答层 answer-template-->
      <div class="answer-preview" v-show='!layerPop'>
        <answer-preview :qid='questionId'></answer-preview>
      </div>
    </div>
    <!--弹出层-->
    <div class="question-view">
      <router-view :qid='questionId'></router-view>
    </div>
    <foot-menu></foot-menu>
  </div>
</template>
<style lang="scss" scoped>
 @import "../../scss/config";
  .question{
    .search-bar {
      width: 100%;
    }
    .question-body {
      margin-top: 55px;
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
          .focus-btn {
            flex: 2;
            button{
              float: right;
              margin-right: 20px;
              width: 80px;
              height: 30px;
              border: none;
              background: $bg-color;
              border-radius: 5px;
              font-size: 14px;
              color: #6D7784;
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
          .add-answer, .view-answer {
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
      background: $bg-color;
      min-height: calc(100vh - 128px);
    }
    .question-view { // 弹出层
      width: 100%;
    }
  }
</style>
<script>
import Axios from 'axios'
import SearchBar from '../../components/search-bar/sub-searchBar.vue'
import AnswerPreview from '../../components/answer/answer-template.vue'
import FootMenu from '../../components/foot-menu.vue'
export default {
  name: 'question',
  data () {
    return {
      title: '',
      describe: '',
      focus: '',
      commentNum: '',
      questionId: this.$route.params.id,
      questionPage: true,
      answered: false,
      myAsId: null,  // 我的回答Id
      focused: null // 是否关注过
    }
  },
  components: {
    AnswerPreview,
    FootMenu,
    SearchBar
  },
  watch: {
    $route: function () {
      this.getData()    // 路由变化重新请求数据
      this.checkAnswer()
    }
  },
  created: function () {
    this.getData()
    this.checkAnswer() // 查询是否回答过
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
          // this.$router.replace('/error')  // 404
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
    },
    checkAnswer () {
      Axios.get('/question/checkAnswer', {
        params: {
          questionId: this.$route.params.id
        }
      })
      .then((response) => {
        if (response.data.answered) {
          this.answered = true
          this.myAsId = response.data.asId
          this.focused = response.data.focused
        }
      })
    },
    addFocus () {  // 添加关注
      Axios.post('/user/addProblemFocus', {
        questionId: this.$route.params.id
      })
      .then((response) => {
        if (response.data === 'ok') {
          this.focused = true
        }
      })
    },
    cancelFocus () {
      Axios.post('/user/cancelProblemFocus', {
        questionId: this.$route.params.id
      })
      .then((response) => {
        if (response.data === 'ok') {
          this.focused = false
        }
      })
    },
    showMyAnswer () {
      this.$router.push(`${this.$route.path}/answer/${this.myAsId}`)
    },
    addAnswer () {
      this.$router.push(`${this.$route.path}/add_answer`)
    }
  }
}
</script>
