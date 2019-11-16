<!-- 滚动组件 -->
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
      scroll:null,
      messgge:'asds'
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
          // 1.滚动效果 创建scroll对象
          this.scroll =  new BScroll(this.$refs.wrapper,{
          //监册
          probeType:this.probeType,
          click: true,
          pullUpLoad:this.pullUpLoad
          })
          //2. 实时监听滚动，来实现返回顶部按钮的功能
          this.scroll.on('scroll',(position)=>{
            // 将监听的数据坐标发射出去
            this.$emit('scroll',position)
          })
          // 3.实现加载更多 监听上来事件
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
          })
        },
  }
</script>

<style>
</style>
