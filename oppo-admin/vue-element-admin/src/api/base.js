//本地服务器
// const base = {
//     host: 'http://localhost:9090',//基础域名
//     test: '/api/api/test',//测试
//     uploadUrl: '/api/api/upload',//图片上传 post请求
//     selectCategory: '/api/api/selectItemCategoryByParentId',//类目选择
//     login:'/api/api/login',//登录接口
// }

//IDEA后端
const base = {
    host: 'http://localhost:8001',//基础域名
    login: '/api/user/login',//登录接口
    addHomePage: '/api/home/add',//新增首页信息
    homeList:'/api/home/list',//获取首页信息
    uploadPic:'/api/home/fileoss',//图片上传
    categoryList:'/api/category/list',//获取分类列表
}

export default base;