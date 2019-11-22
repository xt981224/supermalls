<template>
  <div class="cartlist">
  <Cart-list-item  v-for="(item,index) in cartList" 
  :key="index" 
  :product="item"></Cart-list-item>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CartListItem from './CartListItem'
  export default {
    name:'CartList',
    components:{
      CartListItem
    },
    computed:{
     ... mapGetters([
       'cartList',
     ])
    }
  }
</script>

<style>
</style>
