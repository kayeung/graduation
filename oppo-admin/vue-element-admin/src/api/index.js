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
 */
    getLogin(params) {  //params={userName:'',password:''}
        console.log("getLogin:",params);
        return axios.post(base.login, params)
    },
}

export default api