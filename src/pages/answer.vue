<template>
  <div class="answer">
    <div class="question">
      <div class="topic">
        <span>话题内容</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
      <div class="question-content">
        <div class="title">在朝鲜的七个月，没网络没手机一夜回到解放前？</div>
        <div class="describe">这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述</div>
        <div class="info">
          <div class="focus">1016人关注</div>
          <div class="comment">2222条评论</div>
          <div class="add-focus">
            <button>+&nbsp;关注</button>
          </div>
        </div>
        <div class="button-bar">
          <div class="invite-people">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yaoqing"></use>
              </svg>
            </span>&nbsp;
            <span>
              邀请回答
            </span>
          </div>
          <div class="add-answer">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bianji"></use>
              </svg>
            </span>&nbsp;
            <span>
              添加回答
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 @import "../scss/config";
  .answer{
    .question {
      .topic {
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          flex: 7;
        }
        svg {
          flex:1;
          color: $icon;
          font-size: 20px;
        }
        width: 100%;
        height: 30px;
        border-bottom: 1px dashed $border;
      }
      .question-content {
        width: 100%;
        min-height: 100px;
        margin-top: 15px;
        .title {
          font-family: SimHei;
          font-size: 18px;
          font-weight: 600;
          padding: 0 10px 0 10px;
        }
        .describe {
          margin-top: 13px;
          font-size: 15px;
          color: $c-font;
          padding: 0 10px 0 10px;
        }
        .info {
          width: 100%;
          margin-top: 15px;
          display: flex;
          align-content: space-around;
          align-items: center;
          .focus {
            flex: 1;
            font-size: 15px;
            color: #6D7784;
            margin-left: 10px;
          }
          .comment {
            flex: 1;
            font-size: 15px;
            color: #6D7784;
          }
          .add-focus {
            flex: 2;
            button{
              float: right;
              margin-right: 20px;
              width: 80px;
              height: 30px;
              border: none;
              background: #0083FE;
              border-radius: 5px;
              font-size: 14px;
              color: #ffffff;
            }

          }
        }
        .button-bar {
          width: 100%;
          margin-top: 15px;
          height:45px;
          border-top: 1px solid $border;
          border-bottom: 1px solid $border;
          display: flex;
          text-align: center;
          line-height: 45px;
          font-size: 14px;
          color: #6D7784;
          .invite-people{
            height: 45px;
            flex: 1;
            border-right: 1px solid $border;
          }
          .add-answer {
            height: 45px;
            flex: 1;
          }
          .icon {
            font-size: 19px;
          }
        }
      }
    }
  }
</style>
<script>
import Axios from 'axios'
export default {
  name: 'answer',
  data () {
    return {
      title: '',
      describe: '',
      focus: '',
      comments: ''
    }
  },
  methods: {
    getData () {
      Axios.get()
    }
  }
}
</script>
