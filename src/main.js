// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store'
//我们全局引入插件使用插件
import axios from 'axios'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
//我们全局设置使用这个插件，在全局组件的原型上使用这个而插件;;我们可以在组建的内部打印出来this.axios
Vue.prototype.axios = axios

<<<<<<< HEAD
import VueAxios from 'vue-axios'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LRHeader from '@/components/LoginRegisterHeader'
import {Lazyload,Loadmore,Swipe,SwipeItem,Actionsheet,Checklist,CellField, Button} from 'mint-ui'
import './../static/css/reset.css'
import animate from 'animate.css'
Vue.component('v-header',Header)
Vue.component('v-footer',Footer)
Vue.component(Button.name, Button)
Vue.component(Field.name, Field)





//我们局部使用插件或者说不需要引入很全面的mint-ui，因为全部映入进来的话会非常的庞大，所以采用局部使用

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);

Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component('l-r-header', LRHeader)
Vue.use(Lazyload)
Vue.use(animate)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
