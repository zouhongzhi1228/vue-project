<template>
	<div class="container">
		<div class="header">
			<div class="back">
				<a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui"></a>
			</div>
			<div class="title">购物车</div>
			<div class="tit"></div>
		</div>
		<div class="main">
			<div class="pro_item" v-for="(ele,index) in cartData">
				<div class="pro_cheack">
					<el-checkbox v-model="ele.checked"></el-checkbox>
				</div>
				<div class="pro_img">
					<a href="javascript:;">
						<img :src="ele.pro_img" alt="" />
					</a>
				</div>
				<div class="pro_text">
					<p class="pro_name">{{ele.pro_name}}</p>
					<p class="pro_row">{{ele.pro_row}}</p>
					<p class="pro_price">
						<em>¥{{ele.pro_price}}</em>
					</p>
				</div>
				<div class="pro_num">
					<span class="pro_sub" @click="sub(ele.pro_price,index)">-</span>
					<span class="pro_cont">{{ele.num}}</span>
					<span class="pro_add" @click="add(ele.pro_price,index)">+</span>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="allCheack">
				<el-checkbox v-model="allChecked"></el-checkbox>
				<span>全选</span>
			</div>
			<div class="allPrcie">
				<span>合计:</span>
				<em>¥{{allPrice}}</em>
			</div>
			<button>结算<span>({{cartData[0].num}})</span></button>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		data　()　{
			return {
				allChecked: false,
				allPrice: 0
			}
		},
		methods: {
			sub(price,index){
				
				if(this.cartData[index].num != 0) {
					this.cartData[index].num = this.cartData[index].num -1
				}
				if(this.cartData[index].checked) {
					console.log(this.cartData[index].num)
					this.allPrice = price * (this.cartData[index].num)
				}
				console.log(this.cartData[index].checked)
			},
			add(price,index){
				console.log(index)
				this.cartData[index].num = this.cartData[index].num + 1
				if(this.cartData[index].checked) {
					this.allPrice = price * (this.cartData[index].num)
				}
				
			}
		},
		computed: {
			...mapGetters('cart', [
				'cartData'
			])
		}
	}
</script>

<style scoped>
	.container {
		background: #f5f5f5;
		display: flex;
		flex-direction: column;
		height: 736px;
	}
	.header {
		height: 44px;
		line-height: 44px;
		display: flex;
		background: #fff;
		margin-bottom: 10px;
	}
	.main {
		flex: 1;
	}
	.back, .tit {
		width: 60px;
		height: 44px;
		text-align: center;
	}
	.pro_item {
		height: 141px;
		background: #fff;
		margin-bottom: 10px;
		position: relative;
	}
	.title {
		text-align: center;
		flex: 1;
	}
	.pro_img a img {
		width: 90px;
		height: 90px;
	}
	.pro_cheack, .pro_img, .pro_text {
		float: left;
	}
	.pro_cheack {
		margin: 65px 10px 0 10px;
	}
	.pro_img {
		margin-top: 25px;
	}
	.pro_row {
		color: #9D9D9D;
		font-size: 12px;
		margin: 20px 0;
	}
	.pro_name {
		font-size: 14px;
		
	}
	.pro_price em {
		color: #EE0000;
		font-size: 12px;
	}
	.pro_text {
		margin-top: 40px;
	}
	.pro_num span {
		float: left;
	}
	.pro_sub, .pro_add {
		width: 21px;
		height: 21px;
		text-align: center;
		line-height: 21px;
		border: 1px solid #E0E0E0;
	}
	.pro_cont {
		width: 35px;
		height:21px;
		border-top: 1px solid #E0E0E0;
		border-bottom: 1px solid #E0E0E0;
		line-height: 21px;
		text-align: center;
	}
	.pro_num {
		position: absolute;
		right: 10px;
		bottom: 10px;
	}
	.footer {
		position: fixed;
		height: 44px;
		width: 100%;
		background: #fff;
		bottom: 0;
	}
	.allCheack, .allPrcie {
		float: left;
	}
	.allCheack {
		margin: 16px 0 0 10px;
	}
	.allPrcie {
		margin-left: 100px;
		margin-top: 12px;
	}
	.allPrcie em {
		font-size: 20px;
		color: #EE0000;
		
	}
	button {
		float: right;
		height: 44px;
		width: 150px;
		line-height: 44px;
		text-align: center;
		background: red;
		border: none;
	}
</style>