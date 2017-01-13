<template>
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
      <p>什么的微信小程序？什么的微信小程序？什么的微信小程序？ 什么的微信小程序？</p>
    </div>
    <div class="content">
      <p>小程序是一种无需安装，即可使用的手机「应用」。只需要扫描二维码，或是搜一搜，就能立即使用，可以解决手机内存不够的问题。
        不同的小程序，能帮你实现不同的功能。
        例如，买电影票、餐厅排号、餐馆点菜、查询公交、查询股票信息、查询天气、收听电台、预定酒店、共享单车、打车、查汇率、查单词、买机票、网购……
      </p>
    </div>
    <div class="operate">
      <span>30&nbsp;赞</span>·
      <span>26&nbsp;评论</span>·
      <span>去往专栏</span>
    </div>
  </div>
</template>
<style lang="scss">
@import "../scss/config";
  .content-section{
    margin-bottom: 8px;
    border-top: 1px solid #E7E7E7;
    border-bottom: 1px solid #E7E7E7;
    .info{
      height: 40px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      font-size: 14px;
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
      p{
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        padding:0 8px 0 8px;
      }
    }
    .content{
      width: 100%;
      color: #464646;
      display: -webkit-box;
      display: -moz-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      -moz-box-orient: vertical;
      -moz-line-clamp: 3;
      overflow: hidden;
      p{
        -webkit-margin-before: 7px;
        -webkit-margin-after: 0;
        padding:0 8px 0 8px;
        font-size: 15px;
      }
    }
    .operate{
      background: white;
      width: 100%;
      height: 30px;
      padding-top: 8px;
      color: $sm-font;
      font-size: 15px;
      span{
        margin-left: 5px;
        margin-right: 7px;
      }
      span:first-child{
        margin-left: 8px;
      }
    }
  }
</style>
<script>
    export default{
        name: 'problem-content'
    }
</script>
