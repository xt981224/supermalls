<!-- 首页商品分类展示组件 -->
<template>
  <div class="goods " >
    <Goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item">
    </Goods-list-item>

  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name:'GoodsList',
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    },
  }
</script>

<style scoped>
  .goods{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding:2px;
      background-color: #fff;
  }
</style>
