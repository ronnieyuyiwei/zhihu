<template>
  <div class="crawler">
    11111111111222222222222222222
  </div>
</template>
<style lang='scss' scoped>

</style>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      dataList: []
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData () {
      Axios.get('/crawler')
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>
