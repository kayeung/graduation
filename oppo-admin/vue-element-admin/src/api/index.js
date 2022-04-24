/**
 * 请求方法
 */
import axios from "axios"
import base from "../api/base"
//node>js
const qs = require('querystring')

// const api = {
//     /**
//      * 登录接口
//      */
//     getLogin(params) {  //params={userName:'',password:''}
//         return axios.post(base.login, qs.stringify(params))
//     },
//     /**
//      * 商品列表
//      */
//     getGoodsList(params) { //{page:xx}
//         return axios.get(base.goodsList, {
//             params
//         })
//     },
//     getTest() {
//         return axios.get(base.test)
//     },
//     /***
//      * 获取类目选择
//      * {id:cid}
//      */
//     getSelectCategory(params) {
//         return axios.get(base.selectCategory, { params })
//     }
// }

const api = {
    /**
     * 登录接口
     * @param {userName,password} params 
     * @returns 
     */
    getLogin(params) {
        return axios.post(base.login, params)
    },
    /**
     * 新增首页信息
     * @param {title,subtitle,pictureUrl, link} params 
     * @returns 
     */
    addHomePage(params) {
        return axios.post(base.addHomePage, params)
    },
    /**
     * 获取首页信息
     * @param {tableName} param
     * @returns 
     */
    getHomePageList(param) {
        return axios.post(base.homePageList, param)
    },
    /**
     * 
     * @param {id} id 
     * @returns 
     */
    removeHomePage(id) {
        return axios.post(base.removeHomePage, id)
    },
    /**
     * 图片上传
     * @param {file} file 
     * @returns 
     */
    uploadPic(file) {
        return axios.post(base.uploadPic, file)
    },
    /**
     * 获取分类列表
     * @param {id} id 
     * @returns 
     */
    getCategoryList(id) {
        return axios.post(base.categoryList, id)
    },

}

export default api