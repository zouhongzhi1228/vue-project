import Vue from 'vue'
import Router from 'vue-router'

//使用自定义的组件
//import HomePage from '@/modules/HomePage/HomePage'
import Swipe from '@/Swipe'
import HomePage from '@/modules/HomePage/HomePage'
import ClassPage from '@/modules/ClassPage/ClassPage'
import PromotionPage from '@/modules/PromotionPage/PromotionPage'
import CartPage from '@/modules/CartPage/CartPage'
import MainPage from '@/modules/MainPage/MainPage'
import DiscountsPage from '@/modules/ClassPage/DiscountsPage'
Vue.use(Router)
export default new Router({
  routes: [
    { path: "/",
      redirect: "/home" 
    },//重定向  
    {
      path: '/home',
      name: '首页',
      component: HomePage
    },
    {path: '/classpage',name: '分类',component: ClassPage},
    {
      path: '/promotionpage/:id',
      name: '优惠专享',
      component: PromotionPage
    },
    {
      path: '/cartpage',
      name: '购物车',
      component: CartPage
    },
    {
      path: '/mainpage',
      name: '我的',
      component: MainPage
    },{
      path: '/discounts',
      name: 'discounts',
      component: DiscountsPage
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: Swipe
    }
  ]
})
