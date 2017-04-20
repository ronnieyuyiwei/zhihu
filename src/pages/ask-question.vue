<template>
  <div class="question">
    <div v-show='step1' class="fill-title">
      <div class="button-bar">
        <router-link to="/home">
          <a class="cancel">取消</a>
        </router-link>
        <a class="next-step" @click='goStep2'>下一步</a>
      </div>
      <input v-model.trim='title' type="text" @input='checkTitle' placeholder="请写下你的问题并用问号结尾" autofocus>
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
      <input v-model.trim='describe' type="text" placeholder="请填写问题相关的描述信息（选填）" autofocus>
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
  export default {
    name: 'question',
    data () {
      return {
        step1: true,
        step2: false,
        step3: false,
        title: '',
        describe: '',
        topic: ''
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
          title: this.title
        })
        .then((response) => {
          console.log(response.data)
        })
      },
      checkTitle () {
        let reg = /.*[//?？]$/   // 匹配是否问号结尾
        if (reg.test(this.title)) {
          console.log('问号结尾')
        } else {
          console.log('没有问号结尾')
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../scss/config";
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
    }
    input {
      width: 100%;
      border: none;
      height: 40px;
      padding-left: 20px;
      font-size: 16px;
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
        }
      }
    }
  }

</style>

