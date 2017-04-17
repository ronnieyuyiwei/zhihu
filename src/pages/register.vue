<template>
  <div class="register">
    <div class="close-btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cha"></use>
      </svg>
    </div>
    <div class="title">知乎</div>
    <div class="register-form">
      <div class="user-set">
        <label><input type="text" @change='validate' v-model.trim='account' placeholder="用户名"></label>
        <label><input type="password" @change='ps_validate' v-model.trim='password' placeholder="密码（8-15位）"></label>
        <label><input type="password" @change='equal_validate' v-model.trim='password2' placeholder="再次输入密码"></label>
      </div>
      <div class="captcha">
        <div class="captcha-input">
          <label><input type="text" v-model="captcha" placeholder="验证码（不区分大小写）"></label>
        </div>
        <div class="captcha-pic" v-html='pic' @click="getCaptcha"></div>
      </div>
      <div class="notice-msg">{{msg}}</div>
      <div class="submit">
        <div v-if='this.validator'>
          <button type="submit" class="btn true-btn" @click="register">注册</button>
        </div>
        <div v-else>
          <button  class="btn fake-btn">注册</button>
        </div>
        <div class="go-login"><a href="#/login">已有知乎账号？ 去登录</a></div>
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
      password2: '',
      msg: '',
      captcha: '',
      pic: '',
      userCheck: false,
      passwordCheck: false,
      passwordEq: false,
      captchaCheck: false
    }
  },
  mounted: function () {
    this.getCaptcha()
  },
  computed: {
    validator: function () {  // 开放注册按钮
      if (this.userCheck && this.passwordCheck && this.passwordEq) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    validate () {
      if (this.account.length >= 4 && this.account.length <= 10) {
        this.msg = ''
        let reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/  // 匹配中文、字母数字和下划线
        if (reg.test(this.account)) {
          Axios.get('/register/getAccount', {  // 验证用户名是否重复
            params: {
              account: this.account
            }
          })
          .then((response) => {
            if (!response.data.permission) {
              this.msg = response.data.message
              this.userCheck = false
            } else {
              this.msg = response.data.message
              this.userCheck = true
            }
          })
          .catch((error) => {
            console.log(error)
          })
        } else {
          this.userCheck = false
          this.msg = '用户名只能包含中文、字母数字和下划线'
        }
      } else {
        this.userCheck = false
        this.msg = '用户名长度必须在4-10位之间'
      }
    },
    ps_validate () {
      if (this.password.length >= 8 && this.password.length <= 20) {
        this.msg = ''
        let reg = /^[A-Za-z0-9]+$/   // 匹配英文大小写及数字
        if (reg.test(this.password)) {
          this.passwordCheck = true
          this.msg = ''
        } else {
          this.passwordCheck = false
          this.msg = '密码只能包含字母和数字'
        }
      } else {
        this.passwordCheck = false
        this.msg = '密码长度必须在8-20位之间'
      }
    },
    equal_validate () {
      if (this.password2 !== this.password) {
        this.passwordEq = false
        this.msg = '两次输入的密码不一致'
      } else {
        this.passwordEq = true
        this.msg = ''
      }
    },
    register () {
      Axios.get('/register/checkCaptcha', {
        params: {
          captcha: this.captcha
        }
      })
      .then((response) => {
        if (response.data.permission) {
          Axios.post('/register/createAccount', {
            account: this.account,
            password: this.password
          })
          .then((response) => {
            this.msg = response.data
          })
          .catch((error) => {
            console.log(error)
          })
        } else {
          this.msg = response.data.message
          this.captcha = ''
          this.getCaptcha()               // 重新请求验证码
        }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getCaptcha () {              // 获取验证码
      Axios.get('/register/getCaptcha', (err, response) => {
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
  .register {
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
    .register-form {
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
        .fake-btn {
          background: rgba(45,161,254,0.5);
        }
      }
    }
    .go-login {
      margin-top: 15px;
      text-align: center;
    }
  }
</style>
