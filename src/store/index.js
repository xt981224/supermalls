
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
      state.cartList.push(payload)
    }

  },
  actions:{
    // 1.添加购物车
    addCart(context,payload){
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
      }else{
        context.commit('addcart',payload)
      }
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
