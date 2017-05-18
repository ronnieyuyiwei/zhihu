<template>
  <div class="answer-foot">
    <template v-for="item in list">
      <li @click='handle(item.method)'>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href='item.icon'></use>
        </svg>
        <span>{{item.title}}</span>
      </li>
    </template>
    <div class="vote" v-show="voteDiv" v-bind:style="{ height: voteHeight + 'px', top: -voteHeight + 52 + 'px'}" v-on:click.self='voteHide()'>
      <div class="content">
        <div class="title">为答案投票</div>
        <div class="btn">
          <div class="agree vote-btn">
            <div class="btn-box" :class='{ active: agreeIsActive}' @click="vote('agree')">
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-down-copy-copy'></use>
              </svg>
            </div>
            <div class="msg">赞同</div>
          </div>
          <div class="disagree vote-btn">
            <div class="btn-box" :class='{ active: disagreeIsActive}' @click="vote('disagree')">
              <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-sanjiao'></use>
              </svg>
            </div>
            <div class="msg">反对</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  @import "../../scss/config";
  .answer-foot {
    height: 52px;
    width: 100%;
    max-width: 640px;
    background: white;
    position: fixed;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #888D97;
    font-size: 21px;
    border-top: 1px solid #E7E7E7;
    li {
      height: 52px;
      display: block;
      flex: 1;
      .icon {
        margin-top: 5px;
      }
      span {
        display: block;
        font-size: 13px;
        color: #888D97;
      }
    }
    .vote {
      position: absolute;
      left: 0;
      width: 100%;
      background: rgba(38,38,38,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        width: 240px;
        background: white;
        border-radius: 8px;
        height: 140px;
        .title {
          margin-top: 10px;
          color: $sp-font;
          font-size: 15px;
        }
        .btn {
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          .vote-btn{
            width: 52px;
            color: $sm-font;
            font-size: 14px;
            .btn-box {
              width: 52px;
              height: 52px;
              border: 1px solid $border;
              border-radius: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 35px;
            }
            .active {
              background: $blue;
              .icon {
                color: white;
              }
            }
            .msg {
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
</style>
<script>
import Axios from 'axios'
export default{
  data () {
    return {
      login: false,
      account: '',
      voteHeight: 0,
      agreeIsActive: false,
      disagreeIsActive: false,
      voteDiv: false,
      voteState: null,
      list: [
        {
          title: '赞同',
          icon: '#icon-shangxia',
          method: 'openVote'
        },
        {
          title: '感谢作者',
          icon: '#icon-icon1',
          method: ''
        },
        {
          title: '加入收藏',
          icon: '#icon-shoucang',
          method: ''
        },
        {
          title: '评论',
          icon: '#icon-icon',
          method: ''
        }
      ]
    }
  },
  name: 'answer-foot',
  created: function () {
    this.setVoteHeight()
    this.checkLogin()
    .then((data) => {
      return this.initializeVote()
    }).then((data) => {
      console.log(data)
    })
  },
  methods: {
    setVoteHeight () {
      var clientHeight = document.documentElement.clientHeight
      this.voteHeight = clientHeight
      // document.body.style.overflow = 'hidden'
    },
    checkLogin () {
      return new Promise((resolve, reject) => {
        Axios.get('/login/checkLogin')
         .then((response) => {
           if (response.data.login) {
             this.login = true
             this.account = response.data.account
           } else {
             this.login = false
           }
           resolve('yes')
         })
      })
    },
    initializeVote () {
      return new Promise((resolve, reject) => {
        Axios.post('/answer/vote/initializeVote', {  // 获取当前用户点赞情况
          account: this.account,
          qid: this.$route.params.qid,
          asId: this.$route.params.asId
        })
      .then((response) => {
        if (response.data.agreeNum) {    // 改变点赞数值
          this.list[0].title = response.data.agreeNum + '赞同'
        }
        // 改变初始样式
        console.log(response.data.attitude)
        if (response.data.attitude === 'agree') {
          console.log('发生了改变')
          this.agreeIsActive = true
          this.disagreeIsActive = false
        } else if (response.data.attitude === 'disagree') {
          this.disagreeIsActive = true
          this.agreeIsActive = false
        } else if (response.data.attitude === null) {
          this.disagreeIsActive = false
          this.agreeIsActive = false
        }
      })
        resolve('yes')
      })
    },
    vote (params) {             // 处理投票样式
      if (params === 'agree') {
        this.disagreeIsActive = false
        this.agreeIsActive = true
      } else if (params === 'disagree') {
        this.agreeIsActive = false
        this.disagreeIsActive = true
      }
      setTimeout(() => { this.voteHide() }, 1000)
    },
    handle (params) {
      if (params === 'openVote') {
        this.voteDiv = true
      }
    },
    voteHide () {
      this.voteDiv = false
      if (this.agreeIsActive) {
        Axios.post('/answer/vote', {
          vote: 'agree',
          account: this.account,
          qid: this.$route.params.qid,
          asId: this.$route.params.asId
        })
        .then((response) => {
          if (response.data.agreeNum) {    // 改变点赞数值
            this.list[0].title = response.data.agreeNum + '赞同'
          } else {
            this.list[0].title = '赞同'
          }
        })
      } else if (this.disagreeIsActive) {
        Axios.post('/answer/vote', {
          vote: 'disagree',
          account: this.account,
          qid: this.$route.params.qid,
          asId: this.$route.params.asId
        })
        .then((response) => {
          if (response.data.agreeNum) {    // 改变点赞数值
            this.list[0].title = response.data.agreeNum + '赞同'
          } else {
            this.list[0].title = '赞同'
          }
        })
      }
    }
  }
}
</script>
