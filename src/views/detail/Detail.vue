        <!--
        产品详情页组件
         -->
<template>
    <div class="detail" >
      <!-- 导航位置 -->
      <detailnavbar></detailnavbar>
        <Better-scroll class="content" ref="scroll">
          <!-- 轮播图组件 -->
          <detail-swiper :topimages="topImages"></detail-swiper>
          <!-- 产品名称价格组件展示 -->
          <Detail-baseInfo :goods="goods"></Detail-baseInfo>
          <!-- 店铺信息展示 -->
          <Detail-shopInfo :shop="shop"></Detail-shopInfo>
          <!-- 商品的详情 -->
          <Detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></Detail-goods-info>
          <!-- 产品参数 -->
          <Detail-param-info :paramInfo="paramInfo"></Detail-param-info>
          <!-- 评论信息 -->
          <Detail-comment-info :commentInfo="commentInfo"></Detail-comment-info>
        </Better-scroll>
    </div>
</template>
<script>
  import BetterScroll from '@/components/common/BetterScroll/BetterScroll'

  import detailnavbar from './childComps/detailNavbar'
  import detailSwiper from './childComps/detailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import {getDetail,Goods,Shop,GoodsParam} from '@/network/detail'
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
     DetailCommentInfo
    },
    data(){
      return {
        iid:null,//产品id
        topImages:[],//轮播图
        goods:{},//产品名称、价格。销量等数据。整合到对象里面
        shop:{},//店铺的信息
        detailInfo:{},//商品的详情
        paramInfo:{} ,//产品参数
        commentInfo:{}        //评论信息
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
      })
    },
    methods:{
      imageLoad(){
       this.$refs.scroll.refresh
       console.log("图片加载完成")
      }
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
    bottom:0;
    left:0;
    right:0;
  }
</style>
