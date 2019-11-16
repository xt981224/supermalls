<template>
<div class="recommend">
<div v-for="item in recommend" class="recommend-item">
	<a :href="item.link">
		<img :src="item.image">
		<div>{{item.title}}</div>
	</a>
</div>
</div>
</template>
<script>
		export default {
		name:'RecommendView',
		props:{
			recommend:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		components:{
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		text-align: center;
		font-size: 12px;
		padding: 15px 0 30px;
		border-bottom: 8px solid #eee;
	}
	.recommend-item{
margin: 2px;
		width:24%;
	}
	.recommend-item img{
      max-width: 100%;
      margin-bottom: 10px;
	}
</style>