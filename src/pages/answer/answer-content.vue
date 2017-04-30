<template>
   <div class="answer-content">
     <div class="operate">
       <div class="back">
         <svg class="icon" aria-hidden="true">
           <use xlink:href='#icon-fanhui'></use>
         </svg>
       </div>
       <div class="display">
          回答
       </div>
       <div class="share">
         <svg class="icon" aria-hidden="true">
           <use xlink:href='#icon-msnui-more'></use>
         </svg>
       </div>
     </div>
     <div class="title">
       如何解决Vue在部分机型上渲染失败？
     </div>
     <div class="blank"></div>
     <div class="answer">
       <div class="author">
         <div class="head-sculpture">
           <img src="../../img/head.jpg">
         </div>
         <div class="person-intro">
           <span class="name">喵小星</span>
           <span class="sign">这是一个有理想的人</span>
         </div>
         <div class="focus">
           <div>
             <svg class="icon" aria-hidden="true">
              <use xlink:href='#icon-jia'></use>
             </svg>&nbsp;关注</div>
         </div>
       </div>
       <div class="content">
         <p>小时候最有印象的是我外婆在的时候她每年会做年糕。我跟她到磨米的地方，跟她磨米浆。到晚上的时候吃完年夜饭，9点蒸年糕。我们小孩子就在那吃糖，打游戏，年糕出锅以后，我们开始吃，吃完以后我外婆还会炸，半夜还在炸年糕。然后我们再吃一次炸年糕，晚上就撑的睡不着。一般我们过年晚上就是大年晚上都是熬通宵，熬到三、四点，所以小时候那小时候最有印象的是我外婆在的时候她每年会做年糕。我跟她到磨米的地方，跟她磨米浆。到晚上的时候吃完年夜饭，9点蒸年糕。我们小孩子就在那吃糖，打游戏，年糕出锅以后，我们开始吃，吃完以后我外婆还会炸，半夜还在炸年糕。然后我们再吃一次炸年糕，晚上就撑的睡不着。一般我们过年晚上就是大年晚上都是熬通宵，熬到三、四点，所以小时候那</p>
       </div>
       <div class="copyright">
         <div>
           <p>创建于&nbsp;2017-01-17</p>
           <p>著作权归作者所有</p>
         </div>
       </div>
     </div>
     <div class="answer-foot">
       <AnswerFoot></AnswerFoot>
     </div>
   </div>

</template>
<style lang="scss" scoped>
  @import "../../scss/config";
.answer-content{
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
  .title{
    width: 100%;
    min-height: 50px;
    max-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
    line-height: 50px;
    font-weight: 600;
    font-size: 18px;
  }
  .blank{
    width: 100%;
    height: 7px;
    background: #EFEFF4;
  }
  .answer{
    width: 100%;
    .author{
      display: flex;
      height: 53px;
      align-items: center;
      border-bottom: 1px solid $border-gray;
      .head-sculpture{
        flex: 1;
        margin-left: 10px;
        img{
          width: 38px;
          margin-top: 3px;
          border-radius: 1000px;
        }
      }
      .person-intro{
        flex:4;
        span{
          display: block;
        }
        .name{
          font-size: 14px;
          color: #4E586E;
          font-weight: 600;
        }
        .sign{
          font-size: 12px;
        }
      }
      .focus{
        flex: 1.4;
        justify-content: flex-end;
        div {
          width: 70px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          border: 1px solid #4096FE ;
          color: #4096FE;
        }
      }
    }
    .content{
      width: 100%;
      font-size: 17px;
      letter-spacing: 1px;
      line-height: 27px;
      color: $c-font;
      p{
        padding:0 7px 0 12px;
      }
    }
    .copyright{
      width: 100%;
      height: 180px;
      padding-bottom: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      p{
        padding-right: 30px;
        font-size: 16px;
        color: $sm-font;
        font-weight: 600;
      }
      div{
        margin-top: -20px;
      }
    }
  }
}
</style>
<script>
import AnswerFoot from '../../components/answer-foot.vue'
export default {
  name: 'answer-content',
  components: {
    AnswerFoot
  }
}
</script>
