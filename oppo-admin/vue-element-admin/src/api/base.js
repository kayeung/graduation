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
    homePageList: '/api/home/list',//获取首页信息
    uploadPic: '/api/home/fileoss',//图片上传
    removeHomePage: '/api/home/delete',//删除首页信息
    editHomePage: '/api/home/edit',//修改首页信息
    categoryList: '/api/category/list',//获取分类列表
    getNavbar: '/api/link/getNavbar',//获取导航栏信息
    addNavbar: '/api/link/addNavbar',//添加导航栏信息
    removeNavbar: '/api/link/deleteNavbar',//删除导航栏信息
    updateNavbar: '/api/link/updateNavbar',//修改导航栏信息
    getAllLinks: "/api/link/all",//获取页脚全部信息
    addLink: "/api/link/add",//添加页脚信息（非一级）
    updateLink: "/api/link/update",//修改页脚信息
    deleteLink: "/api/link/delete",//删除页脚信息
    getItemList: "/api/category/item/list",//分页获取商品信息
    addItem: "/api/category/item/add",//添加商品详情
    getItemListByCategory: "/api/category/item/listByCategory",//分类获取商品信息
    getItemListByModel: "/api/category/item/listByModel",//按型号获取商品信息
}

export default base;