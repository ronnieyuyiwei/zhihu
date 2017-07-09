<template>
  <div class="question">
    <div v-show='step1' class="fill-title">
      <div class="button-bar">
        <router-link to="/home">
          <a class="cancel">取消</a>
        </router-link>
        <label v-show='titleLimit1'>还可以输入&nbsp;{{titleCount}}&nbsp;字</label>
        <label class='warning' v-show='titleLimit2'>已超出&nbsp;{{titleExceed}}&nbsp;字</label>
        <a class="next-step" v-if='titleNext' @click='goStep2'>下一步</a>
        <a class="next-step fake" v-else='titleNext' href="javascript:;">下一步</a>
      </div>
      <div class="input">
        <textarea v-model='title' @input='checkTitle' placeholder="请写下你的问题并用问号结尾" autofocus></textarea>
      </div>
    </div>
    <div v-show='step2' class="fill-describle">
      <div class="button-bar">
          <span @click="backStep1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </span>
        <a class="next-step" @click='goStep3'>下一步</a>
      </div>
      <div class="input">
        <textarea v-model='describe' placeholder="请填写问题相关描述信息（选填）" ></textarea>
      </div>
    </div>
    <div v-show='step3' class="fill-topic">
      <div class="button-bar">
          <span @click="backStep2">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
          </span>
        <div class="title">{{topicNotice}}</div>
        <a v-if='permitSubmit' class="next-step" @click="commit">发布</a>
        <a class="next-step fake" v-else>发布</a>
      </div>
      <div class="search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sou"></use>
        </svg>
        <div class="topic-label">
          <label v-for='item in topicList' @click="deleteTopic(item)">{{item}}</label>
        </div>
        <div>
          <input v-model="topic" type="text" placeholder="搜索话题" autofocus @input="topicSearch">
        </div>
      </div>
      <div class="topic-preview">
        <div class="topic-list" v-for="topic in topicPreviewList" @click="addTopic(topic.name)">
          <div class="img"><img src="../../img/3.jpg" alt=""></div>
          <div class="content">
            <div class="topic-name">{{topic.name}}</div>
            <div class="description">测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios'
  import AutoSize from '../../js/autosize.js'
  export default {
    name: 'question',
    data () {
      return {
        step1: true,
        step2: false,
        step3: false,
        titleLimit1: false,
        titleLimit2: false,
        titleNext: false,
        title: '',
        titleCount: '',
        titleExceed: '',
        describe: '',
        topic: '',
        topicNotice: '至少添加一个话题', // 话题页面提示
        topicPreviewList: [], // 话题展示列表
        topicList: [] // 待提交的问题列表
      }
    },
    mounted: function () {
      AutoSize(document.querySelectorAll('textarea'))
    },
    watch: {
      topicList: function () {
        if (this.topicList.length === 0) {
          this.topicNotice = '至少添加一个话题'
        } else if (this.topicList.length === 5) {
          this.topicNotice = '已经到达话题上限制'
        } else {
          this.topicNotice = '已添加话题可点选删除'
        }
      }
    },
    computed: {
      permitSubmit: function () {
        if (this.title && this.topicList.length > 0 && this.topicList.length <= 5) {
          return true
        }
      }
    },
    methods: {
      goStep2 () {
        this.step1 = false
        this.step2 = true
      },
      goStep3 () {
        this.step2 = false
        this.step3 = true
      },
      backStep1 () {
        this.step2 = false
        this.step1 = true
      },
      backStep2 () {
        this.step3 = false
        this.step2 = true
      },
      commit () {
        Axios.post('/question/addQuestion', {
          title: this.title,
          describe: this.describe,
          topic: this.topicList
        })
        .then((response) => {
          console.log(response.data)
        })
      },
      checkTitle () {
      /*
        let reg = /.*[//?？]$/   // 匹配是否问号结尾
        if (reg.test(this.title)) {
          console.log('问号结尾')
        } else {
          console.log('没有问号结尾')
        }
        */
        let count = this.title.length
        if (count === 0) {
          this.titleNext = false
        }
        if (count > 0 && count <= 40) {        // 显示提示
          this.titleNext = true
          this.titleLimit1 = false
          this.titleLimit2 = false
        } else if (count > 40 && count <= 50) {  // 问题不得超过50字
          this.titleNext = true
          this.titleLimit1 = true
          this.titleLimit2 = false
          this.titleCount = 50 - count
        } else if (count > 50) {
          this.titleNext = false
          this.titleLimit1 = false
          this.titleLimit2 = true
          this.titleExceed = count - 50
        }
      },
      topicSearch () {
        let count = this.topic.length
        if (count > 4) {
          this.topicNotice = '话题长度不能超过6个字'
        } else {
          if (this.topicList.length === 0) {
            this.topicNotice = '至少添加一个话题'
          }
          if (count !== 0) {
            Axios.post('/question/searchTopic', {
              topic: this.topic
            })
            .then((response) => {
              this.topicPreviewList = []
              response.data.forEach((result) => {
                this.topicPreviewList.push({
                  name: result.name
                })
              })
            })
          }
        }
      },
      addTopic (topicName) {
        if (this.topicList.length > 0 && this.topicList.length <= 5) { // 防止重复添加，超额添加
          for (let i = 0; i < this.topicList.length; i++) {
            if (this.topicList[i] === topicName) {
              break
            }
            if (i === this.topicList.length - 1) {
              this.topicList.push(topicName)
            }
          }
        } else if (this.topicList.length === 0) {
          this.topicList.push(topicName)
        }
      },
      deleteTopic (topicName) {
        for (let i = 0; i < this.topicList.length; i++) {
          if (this.topicList[i] === topicName) {
            this.topicList.splice(i, 1)
          }
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../scss/config";
  .question {
    .icon {
      margin-top: 10px;
      font-size: 23px;
      color: $icon;
    }
    .button-bar {
      width: 100%;
      height: 45px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      a {
        color: #0283FE;
        width: 50px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: 700;
      }
      .fake {
        color: rgba(2,131,254,0.3);
      }
      .cancel {
        float: left;
        margin-left: 12px;
      }
      .next-step {
        float: right;
        margin-right: 8px;
      }
      span {
        display: inline-block;
        min-width: 40px;
        text-align: center;
      }
      label{
        line-height: 40px;
        font-size: 14px;
        color: $font;
      }
      .warning {
        color: red;
      }
    }
    .input {
      display: flex;
      width: 96%;
      color: $sm-font;
      border-bottom: 1px solid $border;
      font-size: 16px;
      margin: 0 auto;
      textarea {
        width: 100%;
        border: none;
        font-size: 17px;
        justify-content: center;
    }
    }
    .fill-topic {
      .title {
        line-height: 40px;
        font-size: 15px;
      }
      .next-step {
        letter-spacing: 9px;
        text-align: right;
        margin-right: 3px;
      }
      .search {
        border-top: 1px solid $border;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .topic-label {
          label {
            background: #E8F0FD;
            padding: 3px 8px 3px 8px;
            font-size: 12px;
            color: $font;
            margin-left: 6px;
          }
        }
        .icon {
        }
        input {
          height: 48px;
          font-size: 14px;
          padding-left: 5px;
          border: none;
        }
      }
      .topic-preview {
        width: 100%;
        height: 60px;

        .topic-list {
          display: flex;
          padding: 7px 0 7px 0;
          border-top: 1px solid $border;
          .img {
            flex: 1;
            text-align: center;
            img {
              height: 50px;
              width: 50px;
              border-radius: 2000px;
            }
          }
          .content {
            flex: 4;
            .topic-name {
              height: 20px;
              font-size: 14px;
              color: $pr-font;
              font-weight: 600;
            }
            .description {
              height: 35px;
              width: 95%;
              font-size: 12px;
              color: $sp-font;
              margin-top: 3px;
              display: -webkit-box;
              display: -moz-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              -moz-box-orient: vertical;
              -moz-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
  }

</style>

