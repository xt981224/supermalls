<!--选项卡-->
<template>
	<div class="tap-control">
		<div v-for="(items,index) in titles"
			 class="tap-control-item"
			 :class="{active:index ==cuarrindex}" @click="itemclick(index)">
			<span>
				{{items}}
			</span>
		</div>

	</div>
</template>
<script>

		export default {
		name:'tapControl',
		props:{
			titles:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		components:{

		},
		data(){
			return{
				cuarrindex:0
			}
		},methods:{
			itemclick(index){
				this.cuarrindex=index;
        this.$emit('tabclick',index)
			}
		}
	}
</script>

<style>
	.tap-control{
		display: flex;
		text-align: center;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
		background-color: #FFFFFF;
    z-index: 1;
	}
	.tap-control-item{
		flex: 1;
	}
	.tap-control-item span{
		padding: 5px;
	}
	.active span{
		color: var(--color-high-text);
		border-bottom: 3px solid  var(--color-tint);
		/*color: red;*/
	}
</style>
