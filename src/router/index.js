import Vue from 'vue'
import Router from 'vue-router'
//使用自定义的组件
import Swipe from '@/Swipe'
import HomePage from '@/modules/HomePage/HomePage'
import PromotionPage from '@/modules/PromotionPage/PromotionPage'
import DiscountsPage from '@/modules/ClassPage/DiscountsPage'
import Register from '../modules/User/Reg'
import Login from '../modules/User/Login'
import ProductClass from '../modules/Product/Class'
import Cart from '../modules/Product/Cart'
import Detail from '../modules/Product/Detail'
import MainPage from '@/modules/MainPage/MainPage'
import MainSet from '@/modules/MainPage/MainSet'
import axios from 'axios'
Vue.use(Router)

const router =  new Router({
	mode:'history',
  routes: [
    {path: "/",redirect: "/home"},//重定向  
    {path: '/home',name: 'home',component: HomePage},
    {path: '/classpage',name: '分类',component: ProductClass},
    {path: '/promotionpage/:id',name: '优惠专享',component: PromotionPage},
    {path: '/cartpage',name: '购物车',component: Cart,meta:{requiresAuth:true}},
    {path: '/discounts',name: 'discounts',component: DiscountsPage},
		{path: '/register',name: 'register',component: Register},
    {path: '/login',name: 'login',component: Login},
    {path: '/detail',name: 'detail', component: Detail},
    {path: '/mainpage',name: '个人主页',component: MainPage},
    {path: '/mainset',name: '个人信息',component: MainSet}
 	]
})

//在进入每个页面之前，判断用户权限 （鉴权）
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    
    var token = window.localStorage.getItem("token") //获取token
    if(!token){
    	next({
    		path:"/login",
        query: { redirect: to.fullPath }
      })
    	return
    }
  	axios.get("http://localhost:3000/requiresAuth?token="+token).then(res=>{
      if(res.data.msgCode==1){
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router