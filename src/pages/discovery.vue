<template>
   <div class="discovery">
     <div>this is discovery</div>
     <div v-bind:class="{active: isActive}">TEST</div>
     <button v-on:click="change">CHANGE</button>
     <div class="foot-content">
       <FootMenu></FootMenu>
     </div>
   </div>
</template>
<style>
    body{
        background-color: grey;
    }
    .active{
      color: red
    }

</style>
<script>
import FootMenu from '../components/foot-menu.vue'
export default{
  name: 'discovery',
  data () {
    return {
      isActive: true
    }
  },
  components: {
    FootMenu
  }
}
</script>
