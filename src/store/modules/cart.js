import axios from 'axios'
export default {
 	namespaced: true,
 	state: {
 		cartData: []
 	},
 	getters: {
 		cartData: function(state) {
 			return state.cartData || []
 		}
 	},
 	mutations: {
 		setCartData(state, cartData){
 			state.cartData = cartData
 		}
 	},
 	actions: {
 		getCartData(context){
 			axios('http://10.9.171.35:3000/product/cartData').then(res=>{
 				context.commit('setCartData',res.data)
 			})
 		},
		addNum(context, id){
			axios('http://10.9.171.35:3000/product/addNum?id='+id).then(res=>{})
		},
		subNum(context, id){
			axios('http://10.9.171.35:3000/product/subNum?id='+id).then(res=>{})
		},
		updateData(context,id){
			axios('http://10.9.171.35:3000/product/update?id='+id).then(res=>{})
		}
 	}
 }