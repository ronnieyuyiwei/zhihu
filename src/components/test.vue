<template>
  <div id="pullrefresh" class="mui-scroll-wrapper mui-content pt0">

    <div class="mui-scroll">
      <!--通用样式1 -->
      <div class="common-input-row common-input-type1">
        <div class="common-input ">
          <span class="btn-search mui-icon mui-icon-search"></span>
          <input type="text" class="common-input-clear" placeholder="请输入关键字" id="input-searchName">
        </div>
      </div>
      <ul class="mui-table-view" id="listdata">

      </ul>
    </div>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: 'myComponents'
}
</script>
