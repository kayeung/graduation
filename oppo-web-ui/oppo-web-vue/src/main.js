import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index.js'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'


import {
  Menu, Submenu, MenuItem, MenuItemGroup, Collapse,
  CollapseItem, Carousel,
  CarouselItem,
} from 'element-ui';


Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
