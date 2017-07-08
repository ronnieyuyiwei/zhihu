<template>
  <div class="more">
    <search-bar></search-bar>
    <div class="operate">更多</div>
    <div v-if='login'>
      <div class="person">
        <div class="head"  @click="openHeadOperate">
          <img v-if="imgExist" :src="imgSrc" alt="头像载入失败">
          <img src='../../img/head.jpg' v-else>
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
    <div class="head-operate" v-show='headOperate' v-bind:style="{height: operateHeight + 'px'}">
      <div class="menu-op">
        <div class="choose-menu">
          <div class="label">设置头像</div>
          <div class="btn" @click='chooseFile'>上传头像</div>
        </div>
        <div class="cancel" @click="cancelHeadOperate">取消</div>
      </div>
      <div >
        <input type="file" id="poster" name="img" accept="image/*" @change='uploadImage'>
      </div>
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
          height: 50px;
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
        a {
          display: inline-flex;
          width: 100%;
        }
        .left-icon {
          flex: 1.2;
          font-size: 22px;
          color: $icon;
        }
        .title {
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
      color: rgba(243, 58, 3, 0.9);
      text-align: center;
      line-height: 45px;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
    }
    #poster {
      height: 30px;
      margin: 0;
      padding: 0;
      opacity: 2;
      position: absolute;
      bottom: 100px;
      left: 100px;
    }
    .head-operate {
      z-index: 999;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(38, 38, 38, 0.2);
      height: 1000px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: flex-end;
      .menu-op {
        z-index: 999;
        width: 96%;
        height: 177px;
        margin-bottom: 10px;
        .choose-menu {
          width: 100%;
          height: 97px;
          border-radius: 6px;
          background: white;
          div {
            text-align: center;
          }
          .label {
            height: 42px;
            line-height: 42px;
            color: $sm-font;
            font-size: 12px;
          }
          .btn {
            height: 55px;
            line-height: 55px;
            font-size: 21px;
            font-weight: 500;
            color: $blue;
            border-top: 1px solid $border;
          }
        }
        .cancel {
          width: 100%;
          height: 55px;
          line-height: 55px;
          background: white;
          border-radius: 5px;
          margin-top: 10px;
          color: $blue;
          font-size: 21px;
          font-weight: 500;
          text-align: center;
        }
      }
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
      operateHeight: 1000,
      headOperate: false,
      images: [],
      pic: null,
      imgExist: false,
      imgSrc: null,
      list: [
        {
          title: '我的创作',
          icon: '#icon-bianji1',
          href: '/more/my_creation/',
          default: '/answer'       // 进入页面的默认值
        },
        {
          title: '我的关注',
          icon: '#icon-guanzhu',
          href: `/more/my_focus/`,
          default: '/question'
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
    this.getHeadImage()
  },
  methods: {
    checkLogin () {
      Axios.get('/login/checkLogin')
      .then((response) => {
        if (response.data.login) {
          this.login = true
          this.account = response.data.account
          for (var item in this.list) {
            this.list[item].href = this.list[item].href + this.account + this.list[item].default
          }
        } else {
          this.login = false
        }
      })
    },
    getHeadImage () {
      Axios.get('/picture/getHeadPicture')
        .then((response) => {
          if (response.data.imgExist) {
            let vm = this
            vm.imgExist = true
            vm.$nextTick(function () {
              vm.imgSrc = require('images/headImg/' + response.data.imgSrc)
            })
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
    },
    openHeadOperate () {  // 打开头像操作框
      this.operateHeight = document.documentElement.clientHeight
      this.headOperate = true
    },
    cancelHeadOperate () { // 取消头像操作框
      this.headOperate = false
    },
    chooseFile () {      // 模拟点击
      document.getElementById('poster').click()
    },
    uploadImage (e) {
      let formData = new FormData()
      formData.append('file', e.target.files[0])
      Axios({
        url: '/picture/uploadHeadPic',
        method: 'post',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      }).then((res) => {
        if (res.data === 'success') {
          this.headOperate = false
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
