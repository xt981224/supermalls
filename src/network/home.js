import {request} from './request'
export function getHomeMultidata(){
	return request({
		url:'/home/multidata'
	})
}
//获取首页的产品
export function getHomeGoods(){
	return request({
		url:'/home/multidata'
	})
}
