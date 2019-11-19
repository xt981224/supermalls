<!-- 产品详情轮播组件 -->
<template>
  <swiper class="swipers">
    <swiper-item v-for="item in topimages" >
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper/'
  export default {
    name:'detailSwiper',
    components:{
    Swiper,
    SwiperItem
    },
    props:{
      topimages:{
        type:Array,
        default() {
          return []
        }
      }
    }

    }
</script>

<style scoped>
.swipers{
  height: 300px;
  overflow: hidden;
}
</style>
