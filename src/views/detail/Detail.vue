        <!--
        产品详情页组件
         -->
<template>
    <div class="detail" >
      <!-- 导航位置 -->
      <detailnavbar @titleclick="titleclick" ref="nav"></detailnavbar>
        <Better-scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
          <!-- 轮播图组件 -->
          <detail-swiper :topimages="topImages"></detail-swiper>
          <!-- 产品名称价格组件展示 -->
          <Detail-baseInfo :goods="goods"></Detail-baseInfo>
          <!-- 店铺信息展示 -->
          <Detail-shopInfo :shop="shop"></Detail-shopInfo>
          <!-- 商品的详情 -->
          <Detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></Detail-goods-info>
          <!-- 产品参数 -->
          <Detail-param-info  ref="paramssinfo" :paramInfo="paramInfo"></Detail-param-info>
          <!-- 评论信息 -->
          <Detail-comment-info ref="commentinfo" :commentInfo="commentInfo"></Detail-comment-info>
          <Goods-list ref="goodslist" :goods="commends"></Goods-list>
        </Better-scroll>
        <Back-top @click.native="backclick" v-show="backtop"></Back-top>
        <detailbottombar @addCart="addCart"></detailbottombar>
    </div>
</template>
<script>
  import BetterScroll from '@/components/common/BetterScroll/BetterScroll'
  import GoodsList from '@/components/content/goods/GoodsList'
  import {debounce} from '@/common/utils.js'
  import detailnavbar from './childComps/detailNavbar'
  import detailSwiper from './childComps/detailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'
  import detailbottombar from './childComps/detailbottombar'
  import {backtopmixin} from '@/common/mixin.js'
  export default {
    name:'Detail',
    components:{
      BetterScroll,
     detailnavbar,
     detailSwiper,
     DetailBaseInfo,
     DetailShopInfo,
     DetailGoodsInfo,
     DetailParamInfo,
     DetailCommentInfo,
     GoodsList,
     detailbottombar
    },
    mixins:[backtopmixin],
    data(){
      return {
        iid:null,//产品id
        topImages:[],//轮播图
        goods:{},//产品名称、价格。销量等数据。整合到对象里面
        shop:{},//店铺的信息
        detailInfo:{},//商品的详情
        paramInfo:{} ,//产品参数
        commentInfo:{}        ,//评论信息
        commends:[],//推荐数据
        themetopsY:[],
        gettop:null,
        currentIndex:0
      }
    },
    created() {
      //1. 获取item发送过来的产品id
      this.iid = this.$route.params.id
      // 2.根据id进行请求服务
     getDetail(this.iid).then((res)=>{
      //1.获取轮播图
        const data = res.result
        this.topImages = data.itemInfo.topImages
       // 2.获取商品的信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3.店铺信息
        this.shop = new Shop(data.shopInfo)
        // 4.获取商品的详情数据
        this.detailInfo = data.detailInfo
        // 5.获取产品参数
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        // 6.评论信息
        if(data.rate.cRate !=0){
          this.commentInfo = data.rate.list[0]
        }

      }),
      // 3.请求推荐数据
      getRecommend().then((res)=>{
        this.commends = res.data.list
        // console.log(this.commends)
      }),
      this.gettop = debounce(()=>{
        this.themetopsY = []
        this.themetopsY.push(0)
        this.themetopsY.push(this.$refs.paramssinfo.$el.offsetTop)
        this.themetopsY.push(this.$refs.commentinfo.$el.offsetTop)
        this.themetopsY.push(this.$refs.goodslist.$el.offsetTop)
        // console.log(this.themetopsY)
      },200)

    },
    updated(){

    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('detailitemimagesload',()=>{
      // this.$refs.scroll.scroll.refresh()
      refresh()
      })

    },
    methods:{
      // 加入购物车的点击
      addCart(){
      // 1.获取购物车需要的信息
      let  product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // console.log(product)
      this.$store.dispatch('addCart',product)
      },
      // 图片加载完成监听
      imageLoad(){
       this.$refs.scroll.refresh
       this.gettop()
      },
      titleclick(index){
        // console.log(index)
        // 点击标题滚动页面
        this.$refs.scroll.scroll.scrollTo(0,-this.themetopsY[index],1000)

      },
      scroll(position){
        this.backtop = -position.y>1000
        // console.log(position)
        const positiony= -position.y
        for (let i = 0; i < this.themetopsY.length; i++) {
          if(this.currentIndex !==i &&((i<this.themetopsY.length -1 &&positiony>=this.themetopsY[i]&&positiony<this.themetopsY[i+1]) ||
           (i===this.themetopsY.length-1&&positiony>this.themetopsY[i])))  {
             this.currentIndex = i
             // console.log(this.currentIndex)
             this.$refs.nav.curryindex= this.currentIndex
           }

        }


      },

    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height:100vh;
  }
  .content{
    overflow: hidden;
    position:absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
  }
</style>
