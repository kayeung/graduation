const webpack = require('webpack')

module.exports = {
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    devServer: {
        proxy: {
            '/api': {     //这里是公共部分，在调用接口时后面接不相同的部分，
                target: 'http://localhost:8001/', //这里写的是访问接口的域名和端口号
                changeOrigin: true, // 必须加上这个才能跨域请求
                pathRewrite: {  // 重命名
                    '^/api': ''
                }
            }
        }
    }
}