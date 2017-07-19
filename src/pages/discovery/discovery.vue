<template>
  <div class="discovery" v-bind:style="{minHeight: backHeight + 'px'}">
    <div class="head-content">
      <search-bar></search-bar>
    </div>
    <div class="body-content">
      <ProblemContent></ProblemContent>
    </div>
    <div class="foot-content">
      <FootMenu></FootMenu>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/config";
  .app-loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    max-width: 640px;
    margin: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    background: white;
    img{
      margin-top: -70px;
      width: 100%;
      height: 108%;
    }
  }
  .app-loading-hide {
    left: 120%;
    bottom: 120%;
    opacity: 0;
  }
  .discovery {
    background: #f8f8f8;
  }
  .head-content {
    .button-bar {
      margin-top: 55px;
      height: 35px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      text-align: center;
      color: $font;
      font-size: 17px;
      font-weight: 600;
      border-bottom: 1px solid #E7E7E7;
      div {
        flex: 1;
        border-right: 1px solid #E7E7E7;
        font-weight: 700;
      }
      span {
        font-size: 15px;
      }
    }
  }
  .body-content {
    padding-top: 55px;
    width: 100%;
  }

</style>
<script>
import ProblemContent from '../../components/discovery/problem-content.vue'
import SearchBar from '../../components/search-bar.vue'
import FootMenu from '../../components/foot-menu.vue'
export default{
  name: 'home',
  components: {
    ProblemContent,
    SearchBar,
    FootMenu
  },
  data () {
    return {
      backHeight: 1000
    }
  },
  created: function () {
    this.setBackground()
  },
  methods: {
    setBackground: function () {
      this.backHeight = document.documentElement.clientHeight - 55
    }
  }
}
</script>
