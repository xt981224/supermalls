<template>
	<Swiper>
			<Swiper-item v-for="item in banners">
				<a :href="item.link">
					<img :src="item.image"  @load="SwiperLoad"/>
				</a>
			</Swiper-item>
		</Swiper>
</template>
<script>
	import {Swiper, SwiperItem} from '@/components/common/swiper/'
	export default {
		name:'homeswiper',
		props:{
			banners:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		components:{
		Swiper,
	  	SwiperItem
		},
    data(){
      return{
        isload:false
      }
    },
    methods:{
      SwiperLoad(){
        if(!this.false)
        {this.$emit('SwiperLoad')
        this.false=true}
      },
    }
	}
</script>

<style scoped>
</style>
