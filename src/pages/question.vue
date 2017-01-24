<template>
    <div class="question">
       <div class="button-bar">
         <router-link to="/home">
           <a class="cancel">取消</a>
         </router-link>
         <a class="next-step">下一步</a>
       </div>
      <input type="text" placeholder="请写下你的问题并用问号结尾" autofocus>
    </div>
</template>
<style lang="scss" scoped>
.question{
  .button-bar{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    a{
      color: #0283FE;
      width: 50px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: 700;
    }
    .cancel{
      float: left;
      margin-left: 12px;
    }
    .next-step{
      float: right;
      margin-right: 8px;
    }
  }
  input{
    width: 100%;
    border: none;
    height: 40px;
    padding-left: 20px;
    font-size: 16px;
  }
}

</style>
<script>
export default {
  name: 'question'
}
</script>
