<template>
  <div class="search-bar">
    <div class="search"><input type="text" placeholder="搜索回答、文章话题或用户"></div>
    <div class="live">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shandianfahuo01"></use>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'search-bar'
}
</script>
<style lang="scss" scoped>
@import "../scss/config";
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
      z-index: 999;
      .search {
        flex: 9;
        text-align: center;
        input {
          width: 90%;
          height: 25px;
          font-size: 14px;
          padding-left: 10px;
          border-radius: 5px;
          background: #E7E7E7;
          outline: none;
          border: none;
        }
      }
      .live {
        flex: 1;
        text-align: left;
        font-size: 25px;
      }
      .icon {
        color: $font;
      }
    }
</style>
