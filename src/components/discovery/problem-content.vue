<template>

    <!--<div v-for='item in questionList' class="section" @click="goQuestion(item.path)">-->
      <!--<div class="info">-->
        <!--<div class="topic">-->
          <!--<img src="../../img/head.jpg">-->
        <!--</div>-->
        <!--<div class="brief-intro">-->
          <!--来自话题：微信应用-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="title">-->
        <!--<p>{{item.title}}</p>-->
      <!--</div>-->
      <!--<div class="content">-->
        <!--<p>{{item.content}}</p>-->
      <!--</div>-->
      <!--<div class="operate">-->
        <!--<span>{{item.agreeNum}}&nbsp;赞</span>·-->
        <!--<span>{{item.commentNum}}&nbsp;评论</span>-->
      <!--</div>-->
    <!--</div>-->
  <!--<div class="swiper-container">-->
    <!--<div class="refresh-tip">{{refreshTip}}</div>-->
    <!--<div class="swiper-wrapper">-->
      <!--<div class="swiper-slide">-->
        <!--&lt;!&ndash;<div v-for="n in 30" style="height: 45px; border-bottom: 1px solid black">&ndash;&gt;-->
          <!--&lt;!&ndash;{{n}}&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<div class="list-group-item">列表1</div>-->
        <!--<div class="list-group-item">列表2</div>-->
        <!--<div class="list-group-item">列表3</div>-->
        <!--<div class="list-group-item">列表4</div>-->
        <!--<div class="list-group-item">列表5</div>-->
        <!--<div class="list-group-item">列表6</div>-->
        <!--<div class="list-group-item">列表7</div>-->
        <!--<div class="list-group-item">列表8</div>-->
        <!--<div class="list-group-item">列表9</div>-->
        <!--<div class="list-group-item">列表10</div>-->
        <!--<div class="list-group-item">列表11</div>-->
        <!--<div class="list-group-item">列表12</div>-->
        <!--<div class="list-group-item">列表13</div>-->
        <!--<div class="list-group-item">列表14</div>-->
        <!--<div class="list-group-item">列表15</div>-->
        <!--<div class="list-group-item">列表16</div>-->
        <!--<div class="list-group-item">列表17</div>-->
        <!--<div class="list-group-item">列表18</div>-->
        <!--<div class="list-group-item">列表19</div>-->
        <!--<div class="list-group-item">列表20</div>-->
        <!--<div class="list-group-item">列表21</div>-->
        <!--<div class="list-group-item">列表22</div>-->
        <!--<div class="list-group-item">列表23</div>-->
        <!--<div class="list-group-item">列表24</div>-->
        <!--<div class="list-group-item">列表25</div>-->
        <!--<div class="list-group-item">列表26</div>-->
        <!--<div class="list-group-item">列表27</div>-->
        <!--<div class="list-group-item">列表28</div>-->
        <!--<div class="list-group-item">列表29</div>-->
        <!--<div class="list-group-item">列表30</div>-->
        <!--<div class="list-group-item">列表31</div>-->
        <!--<div class="list-group-item">列表32</div>-->
        <!--<div class="list-group-item">列表33</div>-->
        <!--<div class="list-group-item">列表34</div>-->
        <!--<div class="list-group-item">列表35</div>-->
        <!--<div class="list-group-item">列表36</div>-->
        <!--<div class="list-group-item">列表37</div>-->
        <!--<div class="list-group-item">列表38</div>-->
        <!--<div class="list-group-item">列表39</div>-->
        <!--<div class="list-group-item">列表40</div>-->
        <!--<div class="list-group-item">列表41</div>-->
        <!--<div class="list-group-item">列表42</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="load-tip">{{refreshTip}}</div>-->
    <!--<button @click="fecho">3333333444</button>-->
  <!--</div>-->
  <div>
    <!--<div class="3333" style="height: 400px; border: 1px solid red; width: 200px" @click="changeIt">标题</div>-->
    <div class="swiper-container">
      <div class="refreshtip">{{refreshTip}}</div>
          <div class="swiper-wrapper">
              <div class="swiper-slide">列表1</div>
              <div class="swiper-slide">列表2</div>
              <div class="swiper-slide">列表3</div>
              <div class="swiper-slide">列表4</div>
              <div class="swiper-slide">列表5</div>
              <div class="swiper-slide">列表6</div>
              <div class="swiper-slide">列表7</div>
              <div class="swiper-slide">列表8</div>
              <div class="swiper-slide">列表9</div>
              <div class="swiper-slide">列表10</div>
              <div class="swiper-slide">列表11</div>
              <div class="swiper-slide">列表12</div>
              <div class="swiper-slide">列表13</div>
              <div class="swiper-slide">列表14</div>
              <div class="swiper-slide">列表15</div>
              <div class="swiper-slide">列表16</div>
              <div class="swiper-slide">列表17</div>
              <div class="swiper-slide">列表18</div>
              <div class="swiper-slide">列表19</div>
              <div class="swiper-slide">列表20</div>
              <div class="swiper-slide">列表21</div>
              <div class="swiper-slide">列表22</div>
              <div class="swiper-slide">列表23</div>
              <div class="swiper-slide">列表24</div>
              <div class="swiper-slide">列表25</div>
              <div class="swiper-slide">列表26</div>
              <div class="swiper-slide">列表27</div>
              <div class="swiper-slide">列表28</div>
              <div class="swiper-slide">列表29</div>
              <div class="swiper-slide">列表30</div>
              <div class="swiper-slide">列表31</div>
              <div class="swiper-slide">列表32</div>
              <div class="swiper-slide">列表33</div>
              <div class="swiper-slide">列表34</div>
              <div class="swiper-slide">列表35</div>
              <div class="swiper-slide">列表36</div>
              <div class="swiper-slide">列表37</div>
              <div class="swiper-slide">列表38</div>
              <div class="swiper-slide">列表39</div>
              <div class="swiper-slide">列表40</div>
              <div class="swiper-slide">列表41</div>
              <div class="swiper-slide">列表42</div>
      </div>
      <div class="loadtip">上拉加载更多</div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/swiper.css";
  /* @import "../../scss/config"; */

 /* .content-section {
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
  }*/

</style>
<script>
import Axios from 'axios'
// import Swiper from '../../js/swiper.min.js'
export default{
  name: 'problem-content',
  data () {
    return {
      refreshTip: '下拉刷新',
      questionList: []
    }
  },
  methods: {
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
    initializeSwiper: function () {
      // let vm = this
    },
    goQuestion (path) {
      this.$router.push(path)
    }
  },
  mounted: function () {
//    this.getData()
    this.initializeSwiper()
  }
}
</script>
