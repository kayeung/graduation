/**
 * 请求方法
 */
 import axios from "axios"
 import base from "../api/base"
 
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
     },
     /***
      * 获取类目选择
      * {id:cid}
      */
      getSelectCategory(params){
          return axios.get(base.selectCategory,{params})
      }
 }
 
 export default api