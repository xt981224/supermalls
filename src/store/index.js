
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addcount(state,payload){
      payload.count +=1
    },
    addcart(state,payload){
      payload.count = 1
      payload.checked = true
      state.cartList.push(payload)
    }

  },
  actions:{
    // 1.添加购物车
    addCart(context,payload){
    return new Promise((resolve,reject)=>{
   // payload为新的商品
   // let  oldpro = null;
   let oldpro =context.state.cartList.find((item)=>{
    return item.iid ===payload.iid
   })
     // for (let item of state.cartList) {
     //   if(item.iid === payload.iid ){
     //     // console.log("相同")
     //     oldpro = item
     //   }
     // }
     if(oldpro){
       context.commit('addcount',oldpro)
       resolve('数量加一')
     }else{
       context.commit('addcart',payload)
       resolve('添加产品')
     }
 })
    }
  },
  getters:{
     // 购物车的数量
      cartlength(state){
        return state.cartList.length
      },
      cartList(state){
        return state.cartList
      }
  }

})
export default store
