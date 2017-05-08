<template>
   <div class="answer-content">
     <div class="operate">
       <div class="back" @click='goBack'>
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
       {{title}}
     </div>
     <div class="blank"></div>
     <div class="answer">
       <div class="author">
         <div class="head-sculpture">
           <img src="../../img/head.jpg">
         </div>
         <div class="person-intro">
           <span class="name">{{responder}}</span>
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
         <p>{{content}}</p>
       </div>
       <div class="copyright">
         <div>
           <p>创建于&nbsp;{{date}}</p>
           <p>著作权归作者所有</p>
         </div>
       </div>
     </div>
     <div class="answer-foot">
       <answer-foot></answer-foot>
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
import AnswerFoot from '../../components/answer/answer-foot.vue'
import Axios from 'axios'
export default {
  name: 'answer-content',
  data () {
    return {
      title: '',
      responder: '',
      content: '',
      date: ''
    }
  },
  components: {
    AnswerFoot
  },
  created: function () {
    this.getData()
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    getData () {
      Axios.get('/answer/getAnswer_content', {
        params: {
          questionId: this.$route.params.qid,
          answerId: this.$route.params.asId
        }
      })
      .then((response) => {
        this.title = response.data[0].title
        this.responder = response.data[0].responder
        this.content = response.data[0].content
        this.date = response.data[0].date
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
