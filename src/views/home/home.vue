<template>
	<div id="home">
		<Nav-bar class="home-nav" >
		<div slot="center">
			首页
		</div>
		</Nav-bar>
    <Better-scroll class="content" :probeType="2" :pullUpLoad="true">
      <!--轮播图组件-->
      <homeswiper :banners="banners"></homeswiper>
      <!--热销产品推送组件-->
      <RecommendView :recommend="recommends"></RecommendView>
      <Feature-view> </Feature-view>
      <!--选项卡-->
      <!--1.添加吸顶功能-->
      <tap-control class="tap-control"  :titles="['流行','经典','复古']" @tabclick="tabclick"></tap-control>
      <Goods-list :goods="goods[cutype].list" ></Goods-list>
      <!-- <div v-for="item in ceshi">
      	<a :href="item.link">
      		{{item.author}}
      	</a>
      </div> -->
    </Better-scroll>

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
  import BetterScroll from '@/components/common/BetterScroll/BetterScroll'
	import tapControl from '@/components/content/tapControl/tapControl'
  import GoodsList from '@/components/content/goods/GoodsList'
	//引用的方法
	import {getHomeMultidata,getHomeGoods} from 'network/home.js'

	export default {
	  name: 'home',
	  components: {
	  	//注册组件
	  homeswiper,
	  RecommendView,
	  FeatureView,
	  NavBar,
	  tapControl,
    GoodsList,
    BetterScroll
	  },
	  data(){
	  	return{
	  		banners:[],
	  		recommends:[],
	  		ceshi:[],
	  		goods:{
	  			'pop':{page:0,list:[]},
	  			'new':{page:0,list:[]},
	  			'sell':{page:0,list:[]},
	  		},
        cutype:'pop',
//	  		result:null
	  	}
	  },
	  //首页创建完就发送网络请求
	  created(){
	  this.getHomeMultidata()
	  this.getHomeGoods('pop')
	  this.getHomeGoods('new')
	  this.getHomeGoods('sell')
	 },
	 methods:{
    /**
     * 下面是网络请求代码
    **/
	 	getHomeMultidata(){
	 	 			//1.请求banner等多个个数据
	  	getHomeMultidata().then(res=>{
	  		//保存请求的数据
	  		this.banners=res.data.banner.list
	  		this.recommends = res.data.recommend.list
	  	})
	 	 	},
      //2. 请求首页商品数据
	 	  getHomeGoods(type){
	 	  const page= this.goods[type].page+1
	 	  getHomeGoods(type,page).then(res=>{
			 this.goods[type].list.push(...res.data.list)
       // console.log(this.goods[type].list)
       // 接口页码加一
		   this.goods[type].page+=1
	 	 })
	 	 	},
      /**
       * 下面是事件监听代码
      **/
    tabclick(index){
      switch(index){
        case 0:
        this.cutype ='pop'
        break
        case 1:
        this.cutype ='new'
        break
        case 2:
        this.cutype ='sell'
        break
      }
    },
	 }
	}
</script>

<style scoped>
  #home{
    height:100vh;
position: relative;
  }
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
 .content{
   overflow: hidden;
   position:absolute;
   top:44px;
   bottom:49px;
   left:0;
   right:0;
 }
 /* .content{
   height: calc(100% - 93px);
   overflow: hidden;
   margin-top:60px;

 } */
</style>
