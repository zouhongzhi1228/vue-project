import Vue from 'vue'
import Router from 'vue-router'

//使用自定义的组件
//import HomePage from '@/modules/HomePage/HomePage'
import Swipe from '@/Swipe'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/swipe',
      name: 'swipe',
      component: Swipe
    }
  ]
})
