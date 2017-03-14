
<template>
  <div class="smile">
    <my-components>
      <template scope="props">
        <span>hello from parent</span>
        <span>{{ props.text }}</span>
      </template>
    </my-components>
  </div>
</template>

<script>
import myComponents from '../components/test.vue'
import {Cat} from '../js/jsfile.js'
export default {
  name: 'smile',
  components: {
    myComponents
  }
}
var cat = new Cat()
cat.sleep()
</script>
<style lang="scss" scoped>
</style>
