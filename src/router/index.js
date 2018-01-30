import Vue from 'vue'
import Router from 'vue-router'

import Register from '../modules/User/Reg'
import Login from '../modules/User/Login'
import ProductClass from '../modules/Product/Class'
import Cart from '../modules/Product/Cart'

Vue.use(Router)
export default new Router({
  routes: [
   {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/productClass',
      name: 'productClass',
      component: ProductClass
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
