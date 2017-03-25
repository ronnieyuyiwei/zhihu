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
        <label><input type="text" @change='test' v-model="account" placeholder="用户名"></label>
        <label><input type="text" v-model="password" placeholder="密码 （不少于6位）"></label>
        <label><input type="text" v-model='second_password' placeholder="再次输入密码"></label>
      </div>
      <div class="captcha">
        <div class="captcha-input">
          <label><input type="text" v-model="captcha" placeholder="验证码 （不区分大小写）"></label>
        </div>
        <div class="capthca-pic" v-html='pic' @click="getCaptcha"></div>
      </div>
      <div class="notice-msg">{{msg}}</div>
      <div class="submit"><button type="submit" class="btn" @click="register">注册</button></div>
      <div class="go-login"><a>已有知乎账号？ 去登录</a></div>
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
      msg: 'nothing',
      captcha: '',
      pic: '<p style="color: red">99999</p>'
    }
  },
  mounted: function () {
    this.getCaptcha()
  },
  methods: {
    test () {
      Axios.get('/register/getAccount', {
        params: {
          account: this.account
        }
      })
      .then((response) => {
        this.msg = response.data.message
      })
      .catch((error) => {
        console.log(error)
      })
    },
    register () {
      Axios.get('/register/getAccount', {
        params: {
          account: this.account
        }
      })
      .then((response) => {
        this.msg = response.data.message + response.data.permission
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
        }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getCaptcha () {
      Axios.get('/register/captcha', (err, response) => {
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
  .go-login {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
