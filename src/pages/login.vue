<template>
  <div class="login">
    <label>账户：<input type="text" @change='test' v-model="account" placeholder="账户"></label>
    <br>
    <label>密码：<input type="text" v-model="password" placeholder="密码"></label>
    <button type="submit" class="btn" @click="login">登录</button>
    <button class="btn" @click="getCaptcha">获取验证码</button>
    <div>{{msg}}</div>
    <div v-html="pic">
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
      pic: '<p style="color: red">99999</p>'
    }
  },
  methods: {
    test () {
      Axios.get('/login/getAccount', {
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
    login () {
      Axios.get('/login/getAccount', {
        params: {
          account: this.account
        }
      })
      .then((response) => {
        this.msg = response.data.message + response.data.permission
        if (response.data.permission) {
          Axios.post('/login/createAccount', {
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
      Axios.get('/login/captcha', (err, response) => {
        if (err) console.log(err)
      })
      .then((response) => {
        this.pic = response.data
      })
    }
  }
}
</script>
<style lang="scss">
  .login {
    margin-top: 200px;
    input {
      margin-top: 40px;
    }
  }
</style>
