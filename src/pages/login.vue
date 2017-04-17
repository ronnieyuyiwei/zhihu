<template>
  <div class="login">
    <div class="close-btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cha"></use>
      </svg>
    </div>
    <div class="title">知乎</div>
    <div class="login-form">
      <div class="user-set">
        <label><input type="text" v-model.trim='account' placeholder="用户名"></label>
        <label><input type="password"  v-model.trim='password' placeholder="密码"></label>
      </div>
      <div class="captcha">
        <div class="captcha-input">
          <label><input type="text" v-model="captcha" placeholder="验证码（不区分大小写）"></label>
        </div>
        <div class="captcha-pic" v-html='pic' @click="getCaptcha"></div>
      </div>
      <div class="notice-msg">{{msg}}</div>
      <div class="submit">
        <button type="submit" class="btn true-btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      account: '',
      password: '',
      msg: '',
      captcha: '',
      pic: ''
    }
  },
  mounted: function () {
    this.getCaptcha()
  },
  methods: {
    login () {
      if (this.account && this.password) {
        Axios.get('/login/checkCaptcha', {
          params: {
            captcha: this.captcha
          }
        })
        .then((response) => {
          if (response.data.permission) {
            Axios.post('/login/checkAccount', {
              account: this.account,
              password: this.password
            })
            .then((response) => {
              this.msg = response.data
            })
          } else {
            this.msg = response.data.message
            this.getCaptcha()     // 重新获取验证码
          }
        })
      } else {
        this.msg = '用户名密码不能为空'
      }
    },
    getCaptcha () {              // 获取验证码
      Axios.get('/login/getCaptcha', (err, response) => {
        if (err) console.log(err)
      })
      .then((response) => {
        this.pic = response.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../scss/config";
  .login {
    .close-btn {
      color: $icon;
      font-size: 23px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .title {
      margin-top: 20px;
      color: #2DA1FE;
      font-size: 55px;
      text-align: center;
      letter-spacing: 8px;
    }
    .login-form {
      width: 93%;
      margin: 10px auto 0 auto;
      .user-set {
        label {
          display: block;
        }
        input {
          padding: 5px;
          height: 35px;
          font-size: 15px;
          letter-spacing: 1px;
          width: 98%;
          border: none;
          border-radius: 0;
          border-bottom: 1px solid $sm-font;
        }
      }
      .captcha {
        display: flex;
        .captcha-input {
          flex: 3;
          input {
            padding: 5px;
            height: 35px;
            font-size: 15px;
            letter-spacing: 1px;
            width: 98%;
            border: none;
            border-radius: 0;
            border-bottom: 1px solid $sm-font;
          }
        }
        .captcha-pic {
          flex: 1;
        }
      }
      .notice-msg {
        color: #FF4600;
      }
      .submit {
        width: 100%;
        margin-top: 10px;
        text-align: center;
        button {
          text-align: center;
          border: none;
          border-radius: 5px;
          background: #2DA1FE;
          width: 90%;
          height: 45px;
          color: #ffffff;
          font-size: 16px;
          letter-spacing: 3px;
        }
      }
    }
    .go-register {
      margin-top: 15px;
      text-align: center;
    }
  }
</style>
