<template>
  <div class="login">
    <input type="text" v-model='name' placeholder="账号">
    <input type="text" v-model='password' placeholder='密码'>
    <button type="submit" class='btn' @click="login">登录</button>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      axios.post('/login', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
    }
  }
}
</script>
<style >
body{
    background-color:#ff0000;
}

</style>
