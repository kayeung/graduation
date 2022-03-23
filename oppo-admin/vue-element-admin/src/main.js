import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import api from './api/index'
//拦截器
import './router/permission'
//数据持久化
import './utils/localStorage'

Vue.prototype.$api=api;

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
