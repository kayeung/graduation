import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'

//异步
const FrontPage = () => import('../views/FrontPage/FrontPage.vue')
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
        children: [
          {
            path: '/goodscontent',
            name: 'GoodsContent',
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

//路由拦截
router.beforeEach((to, from, next) => {
  //判断是否需要登录
  if (to.matched.some(ele => ele.meta.isLogin)) {
    //2.判断当前用户是否已经登录
    let token = "";
    if (token) {
      next();
    } else {
      next('/login')
    }
  } else {//不需要登录
    next()
  }
})

export default router
