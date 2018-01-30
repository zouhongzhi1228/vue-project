import axios from 'axios'
const discountsdata = {
  namespaced:true,
  state:{
    discountsData:[],
    index:''
  },
  actions:{
    getDiscountsData(context,payload){
      console.log(payload)
      axios('http://10.9.171.5/api/'+payload.route).then(res=>{
        context.commit('initDiscountsData',{discountsData:res.data.data})
      })
    },
    changeIndex(context,payload){
      context.commit('initIndex',payload)
    }
  },
  mutations:{
    initDiscountsData(state,payload){
      state.discountsData = payload.discountsData
    },
    initIndex(state,payload){
      state.index = payload.index
    }
  },
  getters:{
    discountsData:state=>state.discountsData,
    index : state=>state.index
  }
  
  
}
export default discountsdata