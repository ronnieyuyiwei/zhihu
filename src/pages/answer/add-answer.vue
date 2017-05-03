<template>
  <div class="add-answer">
    <div class="title-bar">
      <span class="cancel">取消</span>
      <label>添加回答</label>
      <span v-show='flag' @click='addAnswer'>发布</span>
      <span class="fake" v-show='!flag' >发布</span>
    </div>
    <div class="input">
      <textarea v-model="answer" @input='checkWords' autofocus placeholder="填写回答内容"></textarea>
    </div>
    <div class="loading" v-show='loading_gif'>
      <div class="loading-gif">
        <div v-show='success'><Success></Success></div>
        <div v-show='loading'><Loading></Loading></div>
        <div v-show='error'><Error></Error></div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  @import '../../scss/config.scss';
  .add-answer {
    width: 100%;
    background: white;
    position: absolute;
    top: 0 ;
    left: 0;
    .title-bar {
      width: 100%;
      height: 45px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      line-height: 45px;
      border-bottom: 1px solid $border;
      span {
        color: #0283FE;
        width: 60px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: 700;
        display: inline-block;
      }
      label {
        font-size: 16px;
        font-weight: 500;
      }
      span.cancel {
        float: left;
      }
      .fake {
        color: rgba(2,131,254,0.3);
      }
    }
    .input {
      width: 100%;
      display: flex;
      justify-content: center;
      textarea {
        width: 96%;
        min-height: 400px;
        border: none;
        font-size: 15px;
        padding-top: 10px;
        padding-left: 5px;
        margin: 0 auto;
      }
    }
    .loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 600px;
      background: rgba(151,151,151,0.6);
      display: flex;
      justify-content: center;
      .loading-gif {
        margin-top: 52%;
        width: 70px;
        height: 70px;
        background: #F9F9F1;
        border: 1px solid $border;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
<script>
import Axios from 'axios'
import Loading from '../../components/loading'
import Success from '../../components/success'
import Error from '../../components/error'
export default {
  data () {
    return {
      account: '',
      answer: '',
      flag: false,
      loading_gif: false,
      success: false,
      loading: false,
      error: false
    }
  },
  props: ['qid'],    // 获取上层路由传来的问题id
  created: function () {
    this.checkLogin()
  },
  components: {
    Loading,
    Success,
    Error
  },
  methods: {
    checkLogin () {
      Axios.get('/login/checkLogin')
      .then((response) => {
        if (response.data.login) {
          this.account = response.data.account
        }
      })
    },
    checkWords: function () {
      if (this.answer.length !== 0) {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    addAnswer () {
      this.loading_gif = true
      this.loading = true
      Axios.post('/answer/addAnswer', {
        qid: this.qid,
        responder: this.account,
        content: this.answer
      })
      .then((response) => {
        if (response.data === 'ok') {
          setTimeout(() => {
            this.loading = false
            this.success = true
          }, 800)                         // loading 动画延迟
          setTimeout(() => {
            this.success = false
            this.loading_gif = false
            this.$router.go(-1)
          }, 1800)                         // 成功动画跳转延迟
        } else {
          setTimeout(() => {
            this.loading = false
            this.error = true
          }, 800)
          setTimeout(() => {
            this.error = false
            this.loading_gif = false
            this.$router.go(-1)
          }, 1800)
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
    }
  }
}
</script>
