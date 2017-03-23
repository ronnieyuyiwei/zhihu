<template>
  <div class="login">
    <label>账户：<input type="text" v-model="account" placeholder="账户"></label>
    <br>
    <label>密码：<input type="text" v-model="password" placeholder="密码"></label>
    <button type="submit" class="btn" @click="login">登录</button>
    <div>{{msg}}</div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      account: '',
      password: '',
      msg: 'nothing'
    }
  },
  methods: {
    login () {
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
