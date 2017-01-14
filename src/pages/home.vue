<template>
  <div class="home">
    <div class="head-content">
      <div class="search-bar">
        <div class="search"><input type="text" placeholder="搜索回答、文章话题或用户"></div>
        <div class="live">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shandianfahuo01"></use>
          </svg>
        </div>
      </div>
      <div class="button-bar">
        <div class="ask">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-myQuestion"></use>
          </svg>
          <span>提问</span>
        </div>
        <div class="answer">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingdan"></use>
          </svg>
          <span>回答</span>
        </div>
        <div class="share">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <span>分享</span>
        </div>
      </div>
    </div>
    <div class="body-content">
      <ProblemContent></ProblemContent>
      <ProblemContent></ProblemContent>
      <ProblemContent></ProblemContent>
      <ProblemContent></ProblemContent>
    </div>
    <div class="foot-content">
      <FootMenu></FootMenu>
    </div>

  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/config";

  .home {
    background: #f8f8f8;
  }
  .head-content {
    background: white;
    .search-bar {
      height: 55px;
      width: 100%;
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
    .button-bar {
      margin-top: 55px;
      height: 35px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      text-align: center;
      color: $font;
      font-size: 17px;
      font-weight: 600;
      border-bottom: 1px solid #E7E7E7;
      div {
        flex: 1;
        border-right: 1px solid #E7E7E7;
        font-weight: 700;
      }
      span {
        font-size: 15px;
      }
    }
  }

  .body-content {
    margin-top: 10px;
    width: 100%;
    background: #f8f8f8;
    div{
      background: white;
    &:last-child{
      padding-bottom: 52px;
    }
    }
  }

</style>
<script>
import ProblemContent from '../components/problem-content.vue'
import FootMenu from '../components/foot-menu.vue'
export default{
 name: 'home',
 components: {
    ProblemContent,
    FootMenu
  }
}
</script>
