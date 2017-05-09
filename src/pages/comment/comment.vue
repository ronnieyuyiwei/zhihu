<template>
  <div class="comment">
    <div class="operate">
      <div class="back" @click='goBack'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-fanhui'></use>
        </svg>
      </div>
      <div class="display">
        评论
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-paixu'></use>
        </svg>
      </div>
    </div>
    <div class="comment-details">
      <div class="comment-template">
        <div class="left-side">
          <img src="../../img/head.jpg">
        </div>
        <div class="right-side">
          <div class="account">绅士帽</div>
          <div class="content">这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容</div>
          <div class="btn-bar">
            <div class="zan">
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-cha-copy'></use>
              </svg>
              赞
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-dian'></use>
              </svg>
            </div>
            <div>回复</div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-dian'></use>
              </svg>
            </div>
            <div>周四 15:30</div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-details">
      <div class="comment-template">
        <div class="left-side">
          <img src="../../img/head.jpg">
        </div>
        <div class="right-side">
          <div class="account">绅士帽</div>
          <div class="content">这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容</div>
          <div class="btn-bar">
            <div class="zan">
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-cha-copy'></use>
              </svg>
              赞
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-dian'></use>
              </svg>
            </div>
            <div>回复</div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-dian'></use>
              </svg>
            </div>
            <div>周四 15:30</div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-input">
      <div class="input">
        <textarea placeholder="请输入评论"></textarea>
      </div>
      <div class="btn">发布</div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  @import "../../scss/config";
  .comment {
    .operate{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 22px;
      text-align: center;
      color: #54585D;
      font-weight: 600;
      border-bottom: 1px solid $border-gray;
      .back{
        flex:1;
      }
      .display{
        flex:6;
        font-size: 16px;
      }
      .share{
        flex:1;
      }
    }
    .comment-details {
      width: 100%;
      display: flex;
      justify-content: center;
      .comment-template {
        margin-top: 10px;
        width: 97%;
        display: flex;
        justify-content: center;
        .left-side {
          flex: 1;
          img {
            width: 35px;
            border-radius: 2000px;
          }
        }
        .right-side {
          flex: 7;
          padding-bottom: 6px;
          border-bottom: 1px solid $border;
          .account {
            color: #000000;
            font-size: 16px;
            font-weight: 600;
          }
          .content {
            color: $c-font;
            font-size: 14px;
          }
          .btn-bar {
            margin-top: 8px;
            display: flex;
            div {
              margin-right: 5px;
              flex-direction: row;
              color: $sm-font;
              font-size: 13px;
            }

          }
        }
      }
    }
    .comment-input {
      position: fixed;
      bottom: 0;
      width: 100%;
      border-top: 1px solid $border;
      display: flex;
      min-height: 48px;
      .input {
        flex: 7;
        text-align: center;
        textarea {
          width: 93%;
          margin-top: 7px;
          height: 20px;
          background: #E6E6E6;
          border-radius: 5px;
          border: none;
          font-size: 15px;
          padding-top: 6px;
          line-height: 19px;
        }
      }
      .btn {
        margin-left: -10px;
        flex: 1.2;
        text-align: center;
        line-height: 48px;
        font-size: 15px;
      }
    }
  }
</style>
<script>
import AutoSize from '../../js/autosize.js'
export default {
  mounted: function () {
    AutoSize(document.querySelectorAll('textarea'))
  }
}
</script>
