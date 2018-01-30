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

import LRHeader from '@/components/LoginRegisterHeader'
import { Field, Button } from 'mint-ui'
import VueAxios from 'vue-axios'

Vue.component(Button.name, Button)
Vue.component(Field.name, Field)

//引入公用样式表
import './../static/css/reset.css'


Vue.component('l-r-header', LRHeader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
