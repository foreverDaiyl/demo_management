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
          path:'addShop',
          // name:'addShop',
          meta:['添加数据','添加商铺'],
          component:()=>import('../page/addShop.vue')
        }
      ]
    }
  ]
})
