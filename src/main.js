import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
// 解决移动端300延迟
import FastClick from 'fastclick'
import toast from '@/components/common/toast'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//解决移动端300ms延迟
FastClick.attach(document.body)

Vue.use(toast)
Vue.use(VueLazyLoad)
// Vue.use(VueLazyLoad,{
//   // 设置站位图
//   loading: require('./assets/img/common/placeholder.png')
// })
new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
