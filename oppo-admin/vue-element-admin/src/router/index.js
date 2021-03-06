import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import FrontPage from '../views/FrontPage/FrontPage.vue'
import Login from '../views/Login/Login.vue'

//异步
const Goods = () => import('../views/Goods/Goods.vue')
const GoodsContent = () => import('../views/Goods/GoodsContent.vue')
const GoodsClassify = () => import('../views/Goods/GoodsClassify.vue')
const GoodsTree = () => import('../views/Goods/GoodsTree.vue')
const LinksManage = () => import('../views/LinksManage/LinksManage.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    //路由元信息
    meta: {
      isLogin: true
    },

    children: [
      {
        path: '/',
        name: 'FrontPage',
        component: FrontPage
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
        children: [
          {
            path: '/goodscontent&:status',
            component: GoodsContent,
          },
          {
            path: '/goodsclassify',
            name: 'GoodsClassify',
            component: GoodsClassify,
          },
          {
            path: '/goodstree',
            name: 'GoodsTree',
            component: GoodsTree,
          },
        ]
      },
      {
        path: '/linksmanage',
        name: 'LinksManage',
        component: LinksManage,
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
