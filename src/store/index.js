import Vue from 'vue'
import Vuex from 'vuex'
import homedata from './modules/homedata'
import discountsdata from './modules/discountsdata'
import product from './modules/product'
import cart from './modules/cart'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    homedata,
    discountsdata,
    product,
  	cart
  }
})
export default store