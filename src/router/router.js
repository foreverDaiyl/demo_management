import Vue from 'vue'
import Router from 'vue-router'
import Manage from '../page/manage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../page/login/index.vue')
    },
    {
      path:'/manage',
      name:'',
      component:Manage,
      children:[
        {
          path:'',
          name:'',
          component:()=>import('../page/home.vue'),
          meta: []
        },
        {
          path:'/addShop',
          name:'addShop',
          meta:['添加数据','添加商铺'],
          component:()=>import('../page/addShop.vue')
        },
        {
          path:'/addGoods',
          name:'addGoods',
          meta:['添加数据','添加商品'],
          component:()=>import('../page/addGoods.vue')
        },
        {
          path:'/userList',
          name:'userList',
          meta:['数据管理','用户列表'],
          component:()=>import('../page/userList.vue')
        },
        {
          path:'/shopList',
          name:'shopList',
          meta:['数据管理','商家列表'],
          component:()=>import('../page/shopList.vue')
        },
        {
          path:'/foodList',
          name:'foodList',
          meta:['数据管理','食品列表'],
          component:()=>import('../page/foodList.vue')
        },
        {
          path:'/orderList',
          name:'orderList',
          meta:['数据管理','订单列表'],
          component:()=>import('../page/orderList.vue')
        },
        {
          path:'/adminList',
          name:'adminList',
          meta:['数据管理','管理员列表'],
          component:()=>import('../page/adminList.vue')
        },
        {
          path:'/vistor',
          name:'vistor',
          meta:['图表','用户分布'],
          component:()=>import('../page/vistor.vue')
        },
        {
          path:'/editor',
          name:'editor',
          meta:['编辑','文本编辑'],
          component:()=>import('../page/editor.vue')
        },
        {
          path:'/adminSet',
          name:'adminSet',
          meta:['设置','管理员设置'],
          component:()=>import('../page/adminSet.vue')
        },
        {
          path:'/explain',
          name:'explain',
          meta:['说明','说明'],
          component:()=>import('../page/explain.vue')
        }
        
      ]
    }
  ]
})
