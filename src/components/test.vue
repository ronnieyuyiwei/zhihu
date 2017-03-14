<template>
  <div class="my-components">
    <h2>我是子组件的标题</h2>
    <slot text="hello from child"></slot>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: 'myComponents'
}
</script>
