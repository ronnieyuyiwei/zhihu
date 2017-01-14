
<template>
  <div class="Smile">
    <h2>this is the content of Smile Two</h2>
    <img src="../assets/songhuiqiao.jpg">
    <div class="square">
      <div>1</div>
      <div>2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'smile',
  data () {
    return {
      msg: 'Message'
    }
  }
}
</script>
<style lang="scss" scoped>
h1{
  color: red;
}
h2{
  color: purple;
}
p{
  font-size: 30px;
}
img{
  width:90px;
  height:135px;
}
.square{
  width: 200px;
  height: 200px;
  background: cornflowerblue;
  div{
    width: 80px;
    height: 80px;
    background: greenyellow;
    margin: 20px;
  }

}
</style>
