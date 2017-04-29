<template>
  <div>
    <p>test</p>
    <div>{{msg}}</div>
    <router-view></router-view>
  </div>
</template>
<style>

</style>
<script>
export default{
  data () {
    return {
      msg: 'hello test vue'
    }
  }
}
</script>
