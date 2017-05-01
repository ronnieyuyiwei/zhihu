<template>
  <div class="add-answer">
    <div class="title-bar">
      <span class="cancel">取消</span>
      <label>添加回答</label>
      <span v-show='flag'>发布</span>
      <span class="fake" v-show='!flag'>发布</span>
    </div>
    <div class="input">
      <textarea v-model="answer" @input='checkWords' autofocus placeholder="填写回答内容"></textarea>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  @import '../../scss/config.scss';
  .add-answer {
    width: 100%;
    background: white;
    position: absolute;
    top: 0 ;
    left: 0;
    .title-bar {
      width: 100%;
      height: 45px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      line-height: 45px;
      border-bottom: 1px solid $border;
      span {
        color: #0283FE;
        width: 50px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: 700;
        display: inline-block;
      }
      label {
        font-size: 16px;
        font-weight: 500;
      }
      span.cancel {
        float: left;
      }
      .fake {
        color: rgba(2,131,254,0.3);
      }
    }
    .input {
      width: 100%;
      display: flex;
      justify-content: center;
      textarea {
        width: 96%;
        min-height: 400px;
        border: none;
        font-size: 15px;
        padding-top: 10px;
        padding-left: 5px;
        margin: 0 auto;
      }
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        answer: '',
        flag: false
      }
    },
    methods: {
      checkWords: function () {
        if (this.answer.length !== 0) {
          this.flag = true
        } else {
          this.flag = false
        }
      }
    }
  }
</script>
