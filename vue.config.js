//module.exports = {
//configureWebpack: {
//  resolve: {
//    alias: {
//      'components': '@/components',
//      'content': 'components/content',
//      'common': 'components/common',
//      'assets': '@/assets',
//      'network': '@/network',
//      'views': '@/views',
//    }
//  }
//}
//}
//文件别名配置

module.exports = {
	configureWebpack:{
		resolve:{
			alias:{
				'src':'@',
				'assets': '@/assets',
				'common': '@/common',
				'components': 'src/components',
				'network': '@/network',
         'views': '@/views',
			}
		}
	}
}
