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
        <div class="title">至少添加一个话题</div>
        <a class="next-step" @click="commit">发布</a>
      </div>
      <div class="search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sou"></use>
        </svg>
        <input v-model="topic" type="text" placeholder="搜索话题" autofocus>
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
        topic: ''
      }
    },
    mounted: function () {
      AutoSize(document.querySelectorAll('textarea'))
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
          describe: this.describe
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
        console.log(count)
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
        display: flex;
        .icon {
          flex: 1;
        }
        input {
          flex: 10;
          padding-left: 5px;
          border: none;
        }
      }
    }
  }

</style>

