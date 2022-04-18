import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './modules/loginModule'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局state对象，用于保存所有组件的公共数据
  state: {
  },
  // 监听state对象的值的最新状态（计算属性）
  getters: {
  },
  // 唯一一个可以修改state值的方法（同步执行）
  mutations: {
  },
  // 异步执行mutations方法
  actions: {
  },
  modules: {
    loginModule
  }
})
