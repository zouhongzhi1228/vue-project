import axios from 'axios'

export default {
	namespaced: true,
	state: {
		classList: [],
		classData: []
	},
	getters: {
		classList: function(state) {
			return state.classList || []
		},
		classData: function(state) {
			return state.classData || []
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
			console.log(id)
			axios(`http://10.9.171.35:3000/product/classData?id=${id}`).then(res=>{
				console.log(res)
				context.commit('setClassData', {
					imgSrc: res.data.imgSrc,
					classData: res.data.classData
				})
			})
		}
	}
}
