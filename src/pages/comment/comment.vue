<template>
  <div class="comment">
    <div class="operate">
      <div class="back" @click="goBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-fanhui'></use>
        </svg>
      </div>
      <div class="display">
        评论
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-paixu'></use>
        </svg>
      </div>
    </div>
    <div class="comment-body" v-if='hasComment'>
      <router-link to='/home' tag='div' class="comment-details" v-for='item in commentTemplate' >
        <div class="comment-template">
          <div class="left-side">
            <img src="../../img/head.jpg">
          </div>
          <div class="right-side">
            <div class="account">{{item.discussant}}</div>
            <div class="content">{{item.content}}</div>
            <div class="btn-bar">
              <div class="zan">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href='#icon-cha-copy'></use>
                </svg>
                赞
              </div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href='#icon-dian'></use>
                </svg>
              </div>
              <div>回复</div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href='#icon-dian'></use>
                </svg>
              </div>
              <div>{{item.date}}</div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class='no-comment' v-else='hasComment'>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-icon86'></use>
        </svg>
      </div>
      <div class="msg">没有任何评论</div>
    </div>
    <div class="comment-input">
      <div class="input">
        <textarea v-model="comment" placeholder="请输入评论"></textarea>
      </div>
      <div class="btn" @click="addComment()">发布</div>
    </div>
    <div class="loading" v-show='loading_gif'>
      <!--载入动画-->
      <loading v-show='loading'></loading>
      <!--完成动画-->
      <status v-show='status' :status='axStatus'></status>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  @import "../../scss/config";
  .comment {
    .operate{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 22px;
      text-align: center;
      color: #54585D;
      font-weight: 600;
      border-bottom: 1px solid $border-gray;
      .back{
        flex:1;
      }
      .display{
        flex:6;
        font-size: 16px;
      }
      .share{
        flex:1;
      }
    }
    .comment-body{
      width: 100%;
    }
    .no-comment {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: $icon;
      .icon {
        font-size: 65px;
      }
      .msg {
        margin-top: 15px;
      }
    }
    .comment-details {
      width: 100%;
      display: flex;
      justify-content: center;
      .comment-template {
        margin-top: 10px;
        width: 97%;
        display: flex;
        justify-content: center;
        .left-side {
          flex: 1;
          img {
            width: 35px;
            border-radius: 2000px;
          }
        }
        .right-side {
          flex: 7;
          padding-bottom: 6px;
          border-bottom: 1px solid $border;
          .account {
            color: #000000;
            font-size: 16px;
            font-weight: 600;
          }
          .content {
            color: $c-font;
            font-size: 14px;
          }
          .btn-bar {
            margin-top: 8px;
            display: flex;
            div {
              margin-right: 5px;
              flex-direction: row;
              color: $sm-font;
              font-size: 13px;
            }

          }
        }
      }
    }
    .comment-input {
      position: fixed;
      bottom: 0;
      width: 100%;
      border-top: 1px solid $border;
      display: flex;
      min-height: 48px;
      .input {
        flex: 7;
        text-align: center;
        textarea {
          width: 93%;
          margin-top: 7px;
          height: 20px;
          background: #E6E6E6;
          border-radius: 5px;
          border: none;
          font-size: 15px;
          padding-top: 6px;
          line-height: 19px;
        }
      }
      .btn {
        margin-left: -10px;
        flex: 1.2;
        text-align: center;
        line-height: 48px;
        font-size: 15px;
        color: $blue;
      }
    }
    .loading {
      position: absolute;
      width: 100%;
      top: 200px;
    }
  }
</style>
<script>
import AutoSize from '../../js/autosize.js'
import Loading from '../../components/loading/loading.vue'
import Status from '../../components/loading/status.vue'
import Axios from 'axios'
export default {
  created: function () {
    AutoSize(document.querySelectorAll('textarea'))
    this.checkLogin()
    this.getData()
  },
  data () {
    return {
      account: '',
      comment: '',
      hasComment: false,
      commentTemplate: [],
      loading_gif: false,
      axStatus: false,
      loading: false,
      status: false
    }
  },
  components: {
    Loading,
    Status
  },
  methods: {
    getData () {
      Axios.get('/comment/getQuestionComment', {
        params: {
          qid: this.$route.params.qid
        }
      })
      .then((response) => {
        if (response.data) {
          this.hasComment = true
          for (let i = 0; i < response.data.length; i++) {
            this.commentTemplate.push({
              date: response.data[i].date,
              discussant: response.data[i].discussant,
              content: response.data[i].content
            })
          }
        }
      })
    },
    checkLogin () {
      Axios.get('/login/checkLogin')
      .then((response) => {
        if (response.data.login) {
          this.account = response.data.account
        }
      })
    },
    addComment () {
      this.loading_gif = true
      this.loading = true
      Axios.post('/comment/addComment', {
        qid: this.$route.params.qid,
        discussant: this.account,
        comment: this.comment
      })
      .then((response) => {
        if (response.data) {
          this.loading = false
          this.axStatus = true
          this.status = true
          setTimeout(() => {            // 显示成功动画1秒
            this.$router.go(-1)
          }, 1000)
        } else {
          this.loading = false
          this.axStatus = false
          this.status = true
          setTimeout(() => {            // 显示失败动画1秒
            this.$router.go(-1)
          }, 1000)
        }
      })
      .catch((err) => {
        console.log(err.msg)
        this.loading = false
        this.axStatus = false
        this.status = true
        setTimeout(() => {            // 显示失败动画1秒
          this.$router.go(-1)
        }, 1500)
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
