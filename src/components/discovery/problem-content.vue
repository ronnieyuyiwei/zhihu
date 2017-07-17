<template>
  <div class="content-section">
    <div class="swiper-container">
      <div class="refresh-tip">
        {{refreshTip}}33333333
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div v-for='item in questionList' class="section" @click="goQuestion(item.path)">
              <div class="info">
                <div class="topic">
                  <img src="../../img/head.jpg">
                </div>
                <div class="brief-intro">
                  来自话题：微信应用
                </div>
              </div>
              <div class="title">
                <p>{{item.title}}</p>
              </div>
              <div class="content">
                <p>{{item.content}}</p>
              </div>
              <div class="operate">
                <span>{{item.agreeNum}}&nbsp;赞</span>·
                <span>{{item.commentNum}}&nbsp;评论</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/config";
  @import "../../scss/swiper";
  .content-section {
    .swiper-container {
      overflow: visible;
      .swiper-slide {
        height: auto;
        .section {
          border-bottom: 1px solid #E7E7E7;
          border-top: 1px solid #E7E7E7;
          margin-bottom: 8px;
          background: white;
        }
        .info {
          height: 40px;
          width: 100%;
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          color: $sm-font;
          .topic {
            flex: 1;
            text-align: center;

            img {
              width: 20px;
              height: 20px;
              border-radius: 100px;
            }
          }
          .brief-intro {
            flex: 9;
          }
        }
        .title {
          width: 100%;
          max-height: 65px;
          font-family: Hei;
          font-size: 16px;
          font-weight: 800;
          color: #2F2F2F;
          p {
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;
            padding: 0 8px 0 8px;
          }
        }
        .content {
          width: 100%;
          color: #464646;
          display: -webkit-box;
          display: -moz-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          -moz-box-orient: vertical;
          -moz-line-clamp: 3;
          overflow: hidden;
          p {
            -webkit-margin-before: 7px;
            -webkit-margin-after: 0;
            padding: 0 8px 0 8px;
            font-size: 15px;
          }
        }
        .operate {
          background: white;
          width: 100%;
          height: 30px;
          padding-top: 8px;
          color: $sm-font;
          font-size: 15px;
          span {
            margin-left: 5px;
            margin-right: 7px;
          }
          span:first-child {
            margin-left: 8px;
          }
        }
      }
    }
  }
</style>
<script>
import Axios from 'axios'
import Swiper from 'swiper'
export default{
  name: 'problem-content',
  data () {
    return {
      refreshTip: '',
      questionList: []
    }
  },
  methods: {
    initializeSwiper: function () {
      var vm = this
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheelControl: true,
        freeMode: true,
        onTouchMove: function (swiper) {
          if (mySwiper.translate > 0 && mySwiper.translate < 50) {
            vm.refreshTip = '下拉刷新'
          } else {
            vm.refreshTip = '释放更新'
          }
        },
        onTouchEnd: function (swiper) {
          var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight
          var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight
          console.log('__________')
          console.log('mySwiper.translate' + mySwiper.translate)
          console.log('vh' + _viewHeight)
          console.log('ch' + _contentHeight)
          console.log('__________')
          if (mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
            console.log('触发上拉加载')
          }
        }
      })
    },
    getData () {
      Axios.get('/question/discovery/getQuestion')
        .then((response) => {
          response.data.forEach((data) => {
            this.questionList.push({
              title: data.title,
              content: data.content,
              agreeNum: data.agreeNum || 0,
              commentNum: data.commentNum || 0,
              path: data.answer ? `/question/${data.qid}/answer/${data.asId}` : `/question/${data.qid}`
            })
          })
        })
    },
    goQuestion (path) {
      this.$router.push(path)
    }
  },
  mounted: function () {
    this.getData()
    this.$nextTick(this.initializeSwiper())
  }
}
</script>
