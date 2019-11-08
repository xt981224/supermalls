<template>
	<div id="home">
		<Nav-bar class="home-nav" >
		<div slot="center">
			首页
		</div>
		</Nav-bar>
		<!--轮播图组件-->
		<homeswiper :banners="banners"></homeswiper>
		<!--热销产品推送组件-->
		<RecommendView :recommend="recommends"></RecommendView>
		<Feature-view> </Feature-view>
		<!--选项卡-->
		<!--1.添加吸顶功能-->
		<tap-control class="tap-control"  :titles="['流行','经典','复古']"></tap-control>
		
		
		
		
		<ul>
			<li>dad</li>
			<li>dad</li>
			<li>dad</li>
			<li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li><li>dad</li>
			<li>dad</li>
			<li>dad</li>
		</ul>
	</div>
</template>

<script>
	//私有的组件
import axios from 'axios'
	
	import homeswiper from './childComps/homeswiper'
	import RecommendView from './childComps/RecommendView'
	import FeatureView from './childComps/FeatureView'
	//公共的组件引用
	import NavBar from '@/components/common/navbar/NavBar'
	import tapControl from '@/components/content/tapControl/tapControl'
	//引用的方法
	import {getHomeMultidata} from 'network/home.js'

	export default {
	  name: 'home',
	  components: {
	  	//注册组件
	  homeswiper,
	  RecommendView,
	  FeatureView,
	  
	  NavBar,
	  tapControl
	  },
	  data(){
	  	return{
	  		banners:[],
	  		recommends:[],
	  		goods:{
	  			'pop':{page:0,list:[]},
	  			'news':{page:0,list:[]},
	  			'sell':{page:0,list:[]},
	  			
	  		}
//	  		result:null
	  	}
	  },
	  //首页创建完就发送网络请求
	  created(){
	  	//1.请求多个数据
	  	getHomeMultidata().then(res=>{
	  		//保存请求的数据
	  		this.banners=res.data.banner.list
	  		this.recommends = res.data.recommend.list
	  		console.log(res.data)
	  	}),
	  	axios({
	  		url:"http://httpbin.org/anything"
	  	}).then( res=>{
			console.log(res)
})
	  }
	}
</script>

<style>
	.home-nav{
		background-color: var(--color-tint);
		color:#fff
	}
	.tap-control{
		/*设置粘性布局*/
		position: sticky;
		top: 40px;
		left: 200px;
	}
</style>