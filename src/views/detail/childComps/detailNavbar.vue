<!-- 产品详情导航组件 -->
<template>
  <Nav-bar class="home-nav" >
    <div slot="left" class="back" @click="backclick"><img src="~assets/img/common/back.svg"></div>
  <div slot="center" class="title">
  	<div v-for="(item,index) in titles"
    class="title-item"
    :class="{active:index==curryindex}"
    @click="titleclick(index)">
      {{item}}
    </div>
  </div>

  </Nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name:'detailnavbar',
    components:{
      NavBar
    },
    data(){
      return {
        titles:['产品','参数','评论','推荐',],
        curryindex:0
      }
    },
    methods:{
      titleclick(index){
        this.curryindex = index
      },
      backclick(){
        this.$router.back()
      }
    }

  }
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }
.active{
color: var(--color-high-text);}
.back img{
  margin-top: 11px;
}
</style>
