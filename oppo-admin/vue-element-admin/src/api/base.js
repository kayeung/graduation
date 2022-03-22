/**
 * 接口路径配置：
 * 一般文件目录：base.js index.js
 * 但是公司不一定
 *      config
 *          login index.js
 *      index.js
 */

const base = {
    host: 'http://localhost:9090',//基础域名
    test: '/api/api/test',//测试
    uploadUrl: '/api/api/upload',//图片上传 post请求
    selectCategory: '/api/api/selectItemCategoryByParentId',//类目选择
    login:'/api/api/login',//登录接口
}

export default base;