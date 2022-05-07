/**
 * 请求方法
 */
import axios from "axios"
import base from "../api/base"
//node>js
const qs = require('querystring')

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
     *  删除首页信息
     * @param {id} param
     * @returns 
     */
    removeHomePage(param) {
        return axios.post(base.removeHomePage, param)
    },
    /**
     * 编辑首页信息
     * @param {"id", "link", "pictureUrl","subtitle","tableName","title"} params 
     * @returns 
     */
    editHomePage(params) {
        return axios.post(base.editHomePage, params)
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
     * @param {id} param 
     * @returns 
     */
    getCategoryList(param) {
        return axios.post(base.categoryList, param)
    },
    /**
     * 获取导航栏信息
     * @returns 
     */
    getNavbar() {
        return axios.post(base.getNavbar)
    },
    /**
     * 添加导航栏信息
     * @param {label,linkUrl} params 
     * @returns 
     */
    addNavbar(params) {
        return axios.post(base.addNavbar, params)
    },
    /**
     * 删除导航栏信息
     * @param {id} param 
     * @returns 
     */
    removeNavbar(param) {
        return axios.post(base.removeNavbar, param)
    },
    /**
     * 更新导航栏信息
     * @param {id,label,linkUrl} params 
     * @returns 
     */
    updateNavbar(params) {
        return axios.post(base.updateNavbar, params)
    },
    /**
     * 获取页脚全部信息
     * @returns 
     */
    getAllLinks() {
        return axios.post(base.getAllLinks)
    },
    /**
     * 添加页脚信息（非一级）
     * @param {label,linkUrl,parentId,titleId} params 
     * @returns 
     */
    addLink(params) {
        return axios.post(base.addLink, params)
    },
    /**
     * 修改页脚信息
     * @param {id,label,linkUrl,titleId,titleName} params 
     * @returns 
     */
    updateLink(params) {
        return axios.post(base.updateLink, params)
    },
    /**
     * 删除页脚信息
     * @param {id,parentId} params 
     * @returns 
     */
    deleteLink(params) {
        return axios.post(base.deleteLink, params)
    },
    /**
     * 分页获取商品信息
     * @param {pageIndex,pageSize} params （待定）
     * pageIndex:第几页,pageSize:一页几条信息
     * @returns 
     */
    getItemList(params) {
        return axios.post(base.getItemList, params)
    },
    /**
     * 添加商品信息
     * @param {battery, bluetooth, cameraFront, cameraRear, categoryId, cpu, description, detailPictureUrl, doubleSIM, earphoneJack, fastChargeList, goodName, gpsList, gpu, height, model, nfc, otherFunction, pictureUrl, pixelDensity, ramRom, ramType, refreshRate, resolution, romSpe, screenRatio, screenSize, sensorsList, thickness, touchRate, typeSIM, usbInterface, weight, width} params 
     * @returns 
     */
    addItem(params) {
        return axios.post(base.addItem, params)
    },
    /**
     * 分类获取商品信息
     * @param {id} param 
     * @returns 
     */
    getItemListByCategory(param) {
        return axios.post(base.getItemListByCategory, param)
    },

}

export default api