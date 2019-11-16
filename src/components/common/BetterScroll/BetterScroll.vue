<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'BetterScroll',
    data(){
      return {
      scroll:null
      }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        },

    },
 mounted(){
          // 滚动效果
        this.scroll =  new BScroll(this.$refs.wrapper,{
          // 监册
          probeType:this.probeType,
          click: true,
          pullUpLoad:this.pullUpLoad
          })
          this.scroll.on('scroll',(position)=>{
            console.log(position)
          })
          // this.scroll.on('pullingUp',()=>{
          //   console.log("价值")
          //   // 先发送请求
          //   // 请求完成后 将数据展现出来
          // })
        },
  }
</script>

<style>
</style>
