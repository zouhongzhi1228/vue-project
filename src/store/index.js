import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    glassData:[]
  },
  mutations:{
    initGlassData(state,payload){
      state.glassData = payload.glassData
    }
  },
  actions:{
    getGlassData(context,payload){
      console.log(payload)
      Vue.prototype.axios('/loho/search/?e=222&page=1').then(res=>{
        console.log(res)
        context.commit('initGlassData',{glassData:res.data.result.data})
      })
    }
  }
  
})
export default store