import Vue from 'vue'
import Vuex from 'vuex'
import homedata from './modules/homedata'
import discountsdata from './modules/discountsdata'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    homedata,discountsdata
  }
  
})
export default store