<template>
	<div class="cart">
    <!-- 导航 -->
    <Nav-bar class="cart-nav" >
    <div slot="center">
     购物车({{cartlength}})
    </div>
    </Nav-bar>
    <Better-scroll class="content" ref="scroll">
      <!-- 商品列表展示 -->
      <cart-list></cart-list>
    </Better-scroll>
    <Cart-bottom-bar></Cart-bottom-bar>
	</div>
</template>

<script>
import BetterScroll from '@/components/common/BetterScroll/BetterScroll'
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import {mapGetters} from 'vuex'
	export default{
		name:'cart',
		components:{
      BetterScroll,
      CartBottomBar,
      NavBar,
      CartList
		},
		data(){
			return {

			}
		},
		props:{
		},
    computed:{
     ...mapGetters([
       'cartlength',
     ])
    },
    // 加入购物车后重新刷新一下高度
    activated() {
      this.$refs.scroll.refresh()
    }
	}
</script>

<style scoped>
  .cart{
    height:100vh;
  }
  .cart-nav{
  	background-color: var(--color-tint);
  	color:#fff;
  }
  .content{
   overflow: hidden;
    position:absolute;
    top:44px;
    bottom:89px;
    left:0;
    right:0;
  }
</style>
