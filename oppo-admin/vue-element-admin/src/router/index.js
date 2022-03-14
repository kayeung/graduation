import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'

//异步
const FrontPage = () => import('../views/FrontPage/FrontPage.vue')
const Goods = () => import('../views/Goods/Goods.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/frontpage',
        name: 'FrontPage',
        component: FrontPage,
      },
      {
        path: '/goods',
        name: 'Goods',
        component: Goods,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
