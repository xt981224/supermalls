<!--标题顶部-->
<template>
	<div class="nav-bar">
		<div class="left">	<slot name="left"></slot></div>
		<div class="center">	<slot name="center"></slot></div>
		<div class="right">	<slot name="right"></slot></div>
	</div>
</template>

<script>
</script>

<style>
	.nav-bar{
		display: flex;
		line-height: 44px;
		/*background-color: red;*/
		height: 44px;
		box-shadow: 0 1px 1px rgba(100,100,100,0.1);
		/* position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1; */
	}
	.left,.right{
		/*background-color: blue;*/
		width: 60px;
	}
	.center{
		text-align: center;
		/*background-color: burlywood;*/
		flex: 1;
	}
	
</style>