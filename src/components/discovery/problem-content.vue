<template>
  <div class="content-section">
    <div v-for='item in questionList' class="section" @click="goQuestion(item.path)">
      <div class="info">
        <div class="topic">
          <img src="../../img/head.jpg">
        </div>
        <div class="brief-intro">
          来自话题：微信应用
        </div>
      </div>
      <div class="title">
        <p>{{item.title}}</p>
      </div>
      <div class="content">
        <p>{{item.content}}</p>
      </div>
      <div class="operate">
        <span>{{item.agreeNum}}&nbsp;赞</span>·
        <span>{{item.commentNum}}&nbsp;评论</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../scss/config";
  .content-section {
    margin-bottom: 8px;
    .section {
      border-bottom: 1px solid #E7E7E7;
    }
    .info {
      height: 40px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      font-size: 14px;
      color: $sm-font;
      .topic {
        flex: 1;
        text-align: center;

        img {
          width: 20px;
          height: 20px;
          border-radius: 100px;
        }
      }
      .brief-intro {
        flex: 9;
      }
    }
    .title {
      width: 100%;
      max-height: 65px;
      font-family: Hei;
      font-size: 16px;
      font-weight: 800;
      color: #2F2F2F;
      p {
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        padding: 0 8px 0 8px;
      }
    }
    .content {
      width: 100%;
      color: #464646;
      display: -webkit-box;
      display: -moz-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      -moz-box-orient: vertical;
      -moz-line-clamp: 3;
      overflow: hidden;
      p {
        -webkit-margin-before: 7px;
        -webkit-margin-after: 0;
        padding: 0 8px 0 8px;
        font-size: 15px;
      }
    }
    .operate {
      background: white;
      width: 100%;
      height: 30px;
      padding-top: 8px;
      color: $sm-font;
      font-size: 15px;
      span {
        margin-left: 5px;
        margin-right: 7px;
      }
      span:first-child {
        margin-left: 8px;
      }
    }
  }
</style>
<script>
import Axios from 'axios'
export default{
  name: 'problem-content',
  data () {
    return {
      questionList: []
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData () {
      Axios.get('/question/discovery/getQuestion')
        .then((response) => {
          console.log('as' + response.data.answer)
          response.data.forEach((data) => {
            this.questionList.push({
              title: data.title,
              content: data.content,
              agreeNum: data.agreeNum || 0,
              commentNum: data.commentNum || 0,
              path: data.answer ? `/question/${data.qid}/answer/${data.asId}` : `/question/${data.qid}`
            })
          })
        })
    },
    goQuestion (path) {
      this.$router.push(path)
    }
  }
}

</script>
