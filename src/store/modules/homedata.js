import axios from 'axios'
const homedata = {
  namespaced:true,
  state:{
    bannerData:[],
    navData:[],
    newYearData:[],
    allBrand:[]
  },
  actions:{
    getBannerData(context,payload){
      axios('http://localhost:3000/api/banner').then(res=>{
        context.commit('initBannerData',{bannerData:res.data.data})
      })
    },
    getNavData(context,payload){
      axios('http://localhost:3000/api/navigation').then(res=>{
        context.commit('initNavData',{navData:res.data.data})
      })
    },
    getNewYearData(context,payload){
      axios('http://localhost:3000/api/newyear').then(res=>{
        context.commit('initNewYearData',{newYearData:res.data.data})
      })
    },
    getBrandData(context,payload){
      axios('http://localhost:3000/api/brand').then(res=>{
        context.commit('initBrandData',{BrandData:res.data.data})
      })
    }
  },
  mutations:{
    initBannerData(state,payload){
      state.bannerData = payload.bannerData
    },
    initNavData(state,payload){
      state.navData = payload.navData
    },
    initNewYearData(state,payload){
      state.newYearData = payload.newYearData
    },
    initBrandData(state,payload){
      state.allBrand = payload.BrandData
    }
  },
  getters:{
    bannerData:state=>state.bannerData,
    navData:state=>state.navData,
    newYearData:state=>state.newYearData,
    allBrand:state=>state.allBrand
  }
  
  
}
export default homedata