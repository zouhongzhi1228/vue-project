import axios from 'axios'

export default {
	namespaced: true,
	state: {
		classList: [],
		classData: [],
		detailData: {}
	},
	getters: {
		classList: function(state) {
			return state.classList || []
		},
		classData: function(state) {
			return state.classData || []
		},
		detailData: function(state) {
			return state.detailData || {}
		}
	},
	mutations: {
		setClassList(state, classList) {
			state.classList = classList.classList
		},
		setClassData(state, classData) {
			state.classData = {
				imgSrc: classData.imgSrc,
				classData: classData.classData
			}
		},
		setDetailData(state,{detailData}){
			state.detailData = detailData
		}
	},
	actions: {
		getClassList (context) {
			axios('http://10.9.171.35:3000/product/class').then(res=>{
				context.commit('setClassList', {
					classList: res.data
				})
			})
		},
		getClassData (context, id) {
			axios(`http://10.9.171.35:3000/product/classData?id=${id}`).then(res=>{
				context.commit('setClassData', {
					imgSrc: res.data.img.imgSrc,
					classData: res.data.goodsData
				})
			})
		},
		getDetailData ({commit}, payload) {
			commit('setDetailData',{
				detailData: payload
			})
		}
	}
}
