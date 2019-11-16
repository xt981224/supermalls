<template>
  <div class="back-top" @click="backtopclick">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
  export default {
    name:'BackTop',
    methods:{
      backtopclick(){
      }
    }
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
  .back-top img{
    width: 43px;
  }
</style>
