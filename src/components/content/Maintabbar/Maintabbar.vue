<template>
	<tab-bar>

			<tab-bar-item path="/home" activecolor="blue">
				<!--重命名       css里面使用~开头-->
				<img slot="item-icon" src="~assets/img/tabbar/home.svg" />
				<img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
				
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/category" activecolor="blue">
				<img slot="item-icon" src="~assets/img/tabbar/category.svg" />
				<img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" />
				
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/cart" activecolor="blue">
				<img slot="item-icon" src="~assets/img/tabbar/shopcard.svg" />
				<img slot="item-icon-active" src="~assets/img/tabbar/shopcard_active.svg" />
				
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="/porfile" activecolor="blue">
				<img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
				<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" />
				
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
</template>

<script>
import TabBar from   '@/components/common/tabbar/TabBar'

import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name: 'Maintabbar',
  components:{
  	TabBar,
  	TabBarItem
  }
}
</script>

<style>
</style>