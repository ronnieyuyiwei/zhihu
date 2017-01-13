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
      <div class="content-section">
        <div class="info">
          <div class="topic">
            <img src="../img/head.jpg">
          </div>
          <div class="brief-intro">
            来自话题：微信应用
          </div>
        </div>
        <div class="title">
          什么的微信小程序？什么的微信小程序？什么的微信小程序？ 什么的微信小程序？



        </div>
        <div class="content">
          小程序是一种无需安装，即可使用的手机「应用」。只需要扫描二维码，或是搜一搜，就能立即使用，可以解决手机内存不够的问题。
          不同的小程序，能帮你实现不同的功能。
          例如，买电影票、餐厅排号、餐馆点菜、查询公交、查询股票信息、查询天气、收听电台、预定酒店、共享单车、打车、查汇率、查单词、买机票、网购……
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../scss/config";

  .home {
    background: #f8f8f8;
  }
  .head-content {
    background: white;
    .search-bar {
      height: 55px;
      width: 100%;
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
      height: 35px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      text-align: center;
      color: $font;
      font-size: 17px;
      font-weight: 600;
      border-top: 1px solid #E7E7E7;
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
    background: white;
    margin-top: 10px;
    width: 100%;
    .content-section{
      .info{
        height: 40px;
        width: 100%;
        display: inline-flex;
        align-items: center;
        font-size: 13px;
        color: $sm-font;
        .topic{
          flex: 1;
          text-align: center;

          img{
            width: 20px;
            height: 20px;
            border-radius: 100px;
          }
        }
        .brief-intro{
          flex: 9;
        }
      }
      .title{
        width: 100%;
        max-height: 65px;
        font-family: Hei;
        font-size: 16px;
        font-weight: 800;
        color: #2F2F2F;
        padding: 0 8px 5px 8px;
      }
      .content{
        width: 100%;
        max-height: 80px;
        padding:0 9px 0 9px;
      }
    }
  }
</style>
<script>
    export default{
      name: 'home'
    }
</script>
