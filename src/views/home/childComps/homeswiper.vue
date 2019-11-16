<template>
	<Swiper>
			<Swiper-item v-for="item in banners">
				<a :href="item.link">
					<img :src="item.image" />
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
		}
	}
</script>

<style scoped>
</style>