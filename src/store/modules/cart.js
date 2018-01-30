import axios from 'axios'
export default {
 	namespaced: true,
 	state: {
 		cartData: [
	 		{
	 			id: 1,
	 			pro_img: "https://ssl3.sephorastatic.cn/products/4/2/2/0/1/0/1_n_05748_350x350.jpg",
	 			pro_name: "克丽丝汀迪奥未来新肌精华",
	 			pro_row: "规格:唤采光泽",
	 			pro_price: "790.00",
	 			checked: true,
	 			num: 1
	 		},
	 		{
	 			id: 2,
	 			pro_img: "https://ssl3.sephorastatic.cn/products/4/2/2/0/1/0/1_n_05748_350x350.jpg",
	 			pro_name: "克丽丝汀迪奥未来新肌精华",
	 			pro_row: "规格:唤采光泽",
	 			pro_price: "790.00",
	 			checked: true,
	 			num: 1
	 		}
 		]
 	},
 	getters: {
 		cartData: function(state) {
 			return state.cartData || []
 		}
 	},
 	mutations: {
 		setCartData(){
 			
 		}
 	},
 	actions: {
 		getCartData(){
 			
 		}
 	}
 }