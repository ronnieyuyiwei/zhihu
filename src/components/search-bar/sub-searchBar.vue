<template>
  <div class="search-bar">
    <div class="back" @click="goBack">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
    <div class="search"><input type="text" placeholder="搜索回答、文章话题或用户"></div>
  </div>
</template>
<script>
export default {
  name: 'search-bar',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../scss/config";
  .search-bar {
    height: 55px;
    width: 100%;
    max-width: 640px;
    position: fixed;
    top: 0;
    background: white;
    border-bottom: 1px solid #E7E7E7;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    .search {
      flex: 9;
      text-align: center;
      input {
        width: 92%;
        height: 25px;
        font-size: 14px;
        padding-left: 10px;
        border-radius: 5px;
        background: #E7E7E7;
        outline: none;
        border: none;
      }
    }
    .back {
      flex: 1;
      font-size: 22px;
      text-align: center;
    }
    .icon {
      color: $font;
    }
  }
</style>
