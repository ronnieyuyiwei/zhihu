<template>
  <div class="question">
    <div class='question-title'>
      {{data.questionTitle}}
    </div>
    <div class='question-content'>
      {{data.questionContent}}
    </div>
    <div class='question-info'>
      <span>2&nbsp;回答</span>
      <span>4&nbsp;关注</span>
      <span>1&nbsp;年前</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../scss/config";
.question {
      padding: 0 10px 0 10px;
      border-bottom: 1px solid $border;
      .question-title{
        margin-top: 15px;
        width:100%;
        word-break:break-all;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
        font-size: 17px;
        font-weight: 600;
      }
      .question-content {
        margin-top: 10px;
        width:100%;
        word-break:break-all;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
        overflow:hidden;
        font-size: 15px;
        color: $c-font;
      }
      .question-info {
        margin-top: 8px;
        font-size: 14px;
        color: $sm-font;
        padding-bottom: 8px;
      }
    }
</style>
<script>
export default {
  name: 'question',
  props: ['data']
}
</script>
