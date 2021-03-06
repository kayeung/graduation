import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Goods from '../views/Goods/goods.vue'
import GoodDetail from '../views/Goods/goodDetail.vue'
import NotFound from '../views/NotFound.vue'

const GoodSpecs = () => import('../views/Goods/goodSpecs.vue')


Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Index,
}, {
  path: '/goods',
  component: Goods,
  children: [{
    path: '/gooddetail&:model',
    component: GoodDetail,
  }, {
    path: '/goodspecs&:model',
    component: GoodSpecs,
  }
  ]
}, {
  path: '*',
  component: NotFound,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
