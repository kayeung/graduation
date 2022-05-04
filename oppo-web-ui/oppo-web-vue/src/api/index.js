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
    getFooter(){
        return axios.post(base.getFooter)
    }
}

export default api