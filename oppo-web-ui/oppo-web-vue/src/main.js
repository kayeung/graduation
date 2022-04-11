import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import {Menu,Submenu,MenuItem,MenuItemGroup,} from 'element-ui';


Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
