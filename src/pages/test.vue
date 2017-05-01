<template>
  <div class="test">
    <div>ceshi
      <img src="../img/1.jpg">
    </div>
    <div v-for='item in list'>
      <p>{{item.title}}</p>
      <img v-bind:src='item.path'>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            title: '1',
            path: require('../img/1.jpg')
          },
          {
            title: '2',
            path: require('../img/1.jpg')
          },
          {
            title: '3',
            path: require('../img/1.jpg')
          }
        ]
      }
    }
  }
</script>
<style></style>
