import Vue from 'vue'
import Router from 'vue-router'

//使用自定义的组件
//import HomePage from '@/modules/HomePage/HomePage'
import Swipe from '@/Swipe'
import LoadMore from '@/LoadeMore'
import Button from '@/button'
import ActionSheet from '@/ActionSheet'
import LoadMoreStore from '@/LoadMoreStore'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: LoadMore
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: Swipe
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: ActionSheet
    },
    {
      path: '/loadmorestore',
      name: 'loadmorestore',
      component: LoadMoreStore
    }
  ]
})
