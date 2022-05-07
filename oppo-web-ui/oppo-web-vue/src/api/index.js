import axios from "axios"
import base from "../api/base"

const api = {
    /**
     *  获取首页信息
     * @param {tableName} param 
     * @returns 
     */
    getHomePageList(param) {
        return axios.post(base.homePageList, param)
    },
    /**
     * 获取导航栏信息
     * @returns 
     */
    getNavbar() {
        return axios.post(base.getNavbar)
    },
    /**
     * 获取页脚信息
     * @returns 
     */
    getFooter() {
        return axios.post(base.getFooter)
    },
    /**
     * 按型号获取商品信息
     * @param {model} param 
     * @returns 
     */
    getItemListByModel(param) {
        return axios.post(base.getItemListByModel, param)
    }
}

export default api