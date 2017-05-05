<template>
  <div class="more">
    <search-bar></search-bar>
    <div class="operate">更多</div>
    <div v-if='login'>
      <div class="person">
        <div class="head">
          <img src="../../img/head.jpg">
        </div>
        <div class="info">
          <span class="name">{{account}}</span>
          <span class="notice">查看或编辑个人资料</span>
        </div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-jiantou'></use>
        </svg>
      </div>
    </div>
    <div v-else>
      <div class="login-btn">
        <div>登录知乎，体验更多功能</div>
        <button @click='goRegister'>注册/登录</button>
      </div>
    </div>
    <div class="mine">
      <template v-for="item in list">
        <div class="my-operate">
          <router-link :to='item.href'>
            <span class="left-icon">
              <svg class="icon" aria-hidden="true">
              <use :xlink:href='item.icon'></use>
            </svg>
            </span>
            <span class="title">{{item.title}}</span>
            <span class="right-icon">
             <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-jiantou'></use>
             </svg>
          </span>
          </router-link>
        </div>
      </template>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="quit" @click='quit'>
      退出我的账号
    </div>
    <foot-menu></foot-menu>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/config";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .more {
    background: #EEEEF3;
    .operate {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #54585D;
      font-weight: 600;
      border-bottom: 1px solid $border;
    }
    .person {
      width: 100%;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid $border;
      background: white;
      .head {
        flex: 1.2;
        img {
          margin-left: 15px;
          width: 50px;
          border-radius: 1000px;
        }
      }
      .info {
        flex: 4;
        span {
          display: block;
        }
        .name {
          font-size: 14px;
          color: $c-font;
        }
        .notice {
          font-size: 12px;
          color: $sm-font;
        }
      }
      .icon {
        flex: 1;
        color: $sm-font;
        font-size: 18px;
      }
    }
    .login-btn {
      width: 100%;
      height: 95px;
      text-align: center;
      border-bottom: 1px solid $border;
      background: white;
      div {
        padding-top: 20px;
        font-size: 16px;
        font-weight: 500;
      }
      button {
        margin-top: 10px;
        padding: 4px 22px 4px 22px;
        background: #ffffff;
        border: 1px solid $blue;
        border-radius: 5px;
        color: $blue;
        font-size: 13px;
      }
    }
    .mine {
      margin-top: 15px;
      background: white;
      .my-operate {
        height: 43px;
        display: flex;
        text-align: center;
        line-height: 43px;
        a{
          display: inline-flex;
          width: 100%;
        }
        .left-icon {
          flex: 1.2;
          font-size: 22px;
          color: $icon;
        }
         .title{
           flex: 4;
           text-align: left;
           color: $c-font;
           font-size: 14px;
           border-bottom: 1px solid $border;
         }
         .right-icon {
           flex: 1;
           color: $sm-font;
           font-size: 15px;
           border-bottom: 1px solid $border;
         }

      }
    }
    .quit {
      width: 100%;
      height: 45px;
      margin-top: 15px;
      background: #ffffff;
      color: rgba(243,58,3,0.9);
      text-align: center;
      line-height: 45px;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
    }
  }
</style>
<script>
import SearchBar from '../../components/search-bar.vue'
import FootMenu from '../../components/foot-menu.vue'
import Axios from 'axios'
export default {
  data () {
    return {
      login: false,
      account: '',
      list: [
        {
          title: '我的创作',
          icon: '#icon-bianji1',
          href: '/more/my_creation/'
        },
        {
          title: '我的关注',
          icon: '#icon-guanzhu',
          href: `/more/my_creation/`
        },
        {
          title: '我的收藏',
          icon: '#icon-shoucang',
          href: `/more/my_creation/`
        },
        {
          title: '我的草稿',
          icon: '#icon-caogao',
          href: `/more/my_creation/`
        },
        {
          title: '最近浏览',
          icon: '#icon-zuijin',
          href: `/more/my_creation/`
        }
      ]
    }
  },
  created: function () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      Axios.get('/login/checkLogin')
      .then((response) => {
        console.log('more页面的response' + response.data.login)
        if (response.data.login) {
          this.login = true
          this.account = response.data.account
          for (var item in this.list) {
            this.list[item].href += this.account
          }
        } else {
          this.login = false
        }
      })
    },
    goRegister () {
      this.$router.push('register')
    },
    quit () {             // 退出登录
      Axios.get('/login/quitLogin')
      .then((response) => {
        if (!response.data.login) {
          this.login = false
        }
      })
    }
  },
  components: {
    SearchBar,
    FootMenu
  }
}
</script>
