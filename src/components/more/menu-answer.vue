<template>
  <div class="menu-answer">
    <div v-for='data in answerList'>
      <router-link tag='div' to='/home' class="answer" >
        <div class='answer-title'>
          {{data.answerTitle}}
        </div>
        <div class='answer-content'>
          {{data.answerContent}}
        </div>
        <div class='answer-info'>
          <span>{{data.answerDate}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/config";
  .answer {
    margin-top: 10px;
    padding: 0 10px 0 10px;
    border-bottom: 1px solid $border;
    border-top: 1px solid $border;
    background: white;
    .answer-title{
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
    .answer-content {
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
    .answer-info {
      margin-top: 8px;
      font-size: 14px;
      color: $sm-font;
      padding-bottom: 8px;
    }
  }
</style>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      answerList: []
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData () {
      Axios.get('/answer/getMyAnswer', {
        params: {
          account: this.$route.params.id
        }
      })
        .then((response) => {
          if (response.data.length > 0) {
            for (let i = 0; i < response.data.length; i++) {
              this.answerList.push({
                answerTitle: response.data[i].answerTitle,
                answerContent: response.data[i].answerContent,
                answerDate: response.data[i].answerDate
              })
            }
          } else {

          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
