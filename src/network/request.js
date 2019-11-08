import axios from 'axios'

export function request(config){
	//1.创建axios实例
	const instance = axios.create({
	baseURL:'http://123.207.32.32:8000',
    timeout:5000
   });
	
//	2.axios的拦截器
		instance.interceptors.request.use(config =>{
//			2.1请求拦截的作用
			//为什么需要拦截
			//config的数据不符合服务器的要求，可以对配置信息进行配置
			//发送请求时，希望在页面上出现一个请求的图标
			//某些请求 登陆类似（token）   必须携带一些特殊的信息 
//			console.log(config)
			//拦截后需要返回出去
			return config
			
		},err=>{
//			console.log(err)

		});
//2.2 响应拦截
			instance.interceptors.response.use(res=>{
//				console.log(res);
			//	res.data
			return res.data
			},err=>{
				console.log(err)
			})
	//2.发送网络请求
     return instance(config)


	
}