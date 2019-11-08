<template>

	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isactive">
			<slot  name="item-icon"></slot>
		</div>
		<div v-else>
			<slot  name="item-icon-active"></slot>
		</div>
		
		<div :style="activestyle">
			<slot  name="item-text"></slot>
		</div>
	  	
    </div>
	 
</template>

<script>
	export default {
		name:"TabBarItem",
		props:{
			path:String,
			activecolor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return {
//				isactive:true
			}
		},
		computed:{
			isactive(){
//			return this.$route.path.indexOf(this.path)!== -1
			return this.$route.path==this.path
			//this.$route.patha当前活跃的路径和this.path传过来的路径一致时
			},
			activestyle(){
				return this.isactive ? {color:this.activecolor}:{}
			}
		},
		methods:{

			itemClick(){
				this.$router.push(this.path)
//				this.isactive=!this.isactive
//console.log(this.$route.path)
			},
		}
	}
	 
</script>

<style>
	/*.active{
		color: ;
	}*/
.tab-bar-item{
	flex: 1;
	text-align: center;
	/*一般是49px*/
	height: 49px;
	font-size: 14px;
}
.tab-bar-item img{
	width: 24px;
	margin-top: 3px;
	margin-bottom: 2px;
	vertical-align: middle;
}
</style>