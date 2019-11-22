<template>
	<div id="home">
		<Nav-bar class="home-nav" >
		<div slot="center">
			首页
		</div>
		</Nav-bar>
    <tap-control ref="tabControls" class="tab-control" v-show="istabfixed"   :titles="['流行','经典','复古']" @tabclick="tabclick"></tap-control>
    <Better-scroll class="content"
    :probeType="3"
    :pullUpLoad="true"
     ref="scroll"
     @scroll="scroll"
     @pullingUp="loadmore"
     >
      <!--轮播图组件-->
      <homeswiper :banners="banners" @SwiperLoad="SwiperLoad"></homeswiper>
      <!--热销产品推送组件-->
      <RecommendView :recommend="recommends"></RecommendView>
      <Feature-view> </Feature-view>
      <!--选项卡-->
      <!--1.添加吸顶功能-->
      <tap-control ref="tabOffsetTop"   :titles="['流行','经典','复古']" @tabclick="tabclick"></tap-control>
      <Goods-list :goods="goods[cutype].list" ></Goods-list>
      <!-- <div v-for="item in ceshi">
      	<a :href="item.link">
      		{{item.author}}
      	</a>
      </div> -->
    </Better-scroll>
<Back-top @click.native="backclick" v-show="backtop"></Back-top>
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
	// 防抖函数
  import {debounce} from '@/common/utils.js'
  import {backtopmixin} from '@/common/mixin.js'
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
    BetterScroll,
	  },
    mixins:[backtopmixin],
	  data(){
	  	return{
	  		banners:[],
	  		recommends:[],
	  		goods:{
	  			'pop':{page:0,list:[]},
	  			'new':{page:0,list:[]},
	  			'sell':{page:0,list:[]},
	  		},
        cutype:'pop',
        backtop:false,
        tabOffsetTop:0,
        istabfixed:false,
        saceY:0
//	  		result:null
	  	}
	  },
	  //首页创建完就发送网络请求
	  created(){
	  this.getHomeMultidata()
	  this.getHomeGoods('pop')
	  this.getHomeGoods('new')
	  this.getHomeGoods('sell')
    // 加载item中图片加载完成
	 },
   mounted(){
     // 1.图片加载完成后的事件监听
     const refresh = debounce(this.$refs.scroll.refresh,200)
     this.$bus.$on('homeitemimagesload',()=>{

     // this.$refs.scroll.scroll.refresh()
     refresh()
     })

   },
	 methods:{
      /**
       * 下面是事件监听代码
      **/
     // tab control吸顶效果
      SwiperLoad(){
        //.获取tab control 的offsetTop属性
        // 所有组件都有有个$el 来获取组件的元素
        this.tabOffsetTop = this.$refs.tabOffsetTop.$el.offsetTop
        // console.log(this.tabOffsetTop)
      },
      // 切换数据
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
      this.$refs.tabOffsetTop.cuarrindex = index;
      this.$refs.tabControls.cuarrindex = index;
    },
    // 监听返回顶部组件事件
    backclick(){
      // this.$refs.scroll选中scroll组件来使用里面的scrollTo方法
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    // 接受better scroll中的监听坐标数据 实现返回顶部show
    scroll(position){
      // 1.返回顶部的实现
      this.backtop = -position.y>1000
      // 2.实现tapcon的吸顶效果
      this.istabfixed = (-position.y)>this.tabOffsetTop
    },
    // 加载更多 调用getHomeGoods方法 cutype代表当前的类型
    loadmore(){
      this.getHomeGoods(this.cutype)
      this.$refs.scroll.scroll.finishPullUp()
      this.$refs.scroll.refresh()
    },
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

	 },
 activated(){
   // 进入的时候给固定的位置
   console.log(this.saceY)
 		this.$refs.scroll.scroll.scrollTo(0,this.saceY,200)
    this.$refs.scroll.refresh()
 	},
 	//deactivated不活跃的时候只能在keep-alive有效
 	deactivated(){
    // 切换出去后给save赋值
 this.saceY = this.$refs.scroll.getScrollY()
 // 2.取消全局事件监听
 // this.$bus.$of
 console.log( this.saceY)
 	},
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
/* 	.tap-control{
		设置粘性布局
		position: sticky;
		top: 40px;
		left: 200px;
    与better-scroll冲突不能使用
	} */
 .content{
   overflow: hidden;
   position:absolute;
   top:44px;
   bottom:49px;
   left:0;
   right:0;
 }
 /* .fixed{
   position:fixed ;
   left: 0;
   top: 100px;
 } */
 /* .content{
   height: calc(100% - 93px);
   overflow: hidden;
   margin-top:60px;

 } */
 .tab-control{
   position: relative;
   z-index: 9;
 }
</style>
