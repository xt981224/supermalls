<template>
 <div id="app">
   <keep-alive exclude= "Detail">
     <router-view></router-view>
   </keep-alive>
		<Maintabbar></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from '@/components/content/Maintabbar/Maintabbar'

	export default {
	  name: 'App',
	  components: {
	  	Maintabbar,
	  }
	}
</script>

<style>
@import "assets/css/base.css"
</style>
