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
     * 
     * @returns 
     */
    getNavbar() {
        return axios.post(base.getNavbar)
    },
}

export default api