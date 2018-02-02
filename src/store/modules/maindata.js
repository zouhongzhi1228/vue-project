import axios from 'axios'
const maindata = {
  namespaced:true,
  state:{
    yourLikeData:[],
  },
  actions:{
    getYourLikeData(context,payload){
      //console.log(payload)
      axios('http://10.9.171.5:3000/api/discounts').then(res=>{
        console.log(res.data.data)
        context.commit('inityourLikeData',{yourLikeData:res.data.data})
      })
    }
    // ,
    // changeIndex(context,payload){
    //   context.commit('initIndex',payload)
    // }
  },
  mutations:{
    inityourLikeData(state,payload){
      state.yourLikeData = payload.yourLikeData
    }
    // ,
    // initIndex(state,payload){
    //   state.index = payload.index
    // }
  },
  getters:{
    yourLikeData:state=>state.yourLikeData,
    // index : state=>state.index
  }
}
export default maindata