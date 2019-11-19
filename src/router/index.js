import Vue from 'vue'
import VueRouter from 'vue-router'
///懒加载
const home =() =>import('views/home/home')
const category =() =>import('views/category/category')
const cart =() =>import('views/cart/cart')
const porfile =() =>import('views/porfile/porfile')
const Detail =() =>import('views/detail/Detail')
//注册
Vue.use(VueRouter)

const router  = new VueRouter({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
     {
      path: '/home',
        component:home
    },
   {
      path: '/category',
      component:category
    },
    {
      path: '/cart',
      component:cart
    },
    {
      path: '/porfile',
      component:porfile
    },
    {
      path:'/detail/:id',
      component:Detail
    }

  ],
	mode:'history'
})

export default router
