<template>
    <div class="header">
      <div class="search">
        <div class="search-bar">
          <label><input type="text" placeholder="搜索文章话题或用户"></label>
        </div>
        <div class="live">

        </div>
      </div>
      <div class="util"></div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>
