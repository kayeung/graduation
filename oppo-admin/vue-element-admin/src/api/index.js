/**
 * 请求方法
 */
 import axios from "axios"
 import base from "./base"
 
 const api = {
     /**
      * 商品列表
      */
     getGoodsList(params) { //{page:xx}
         return axios.get(base.goodsList, {
             params
         })
     },
     getTest(){
         return axios.get(base.test)
     }
 }
 
 export default api