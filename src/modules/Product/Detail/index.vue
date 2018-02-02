<template>
	<div>
		<div class="header">
			<div class="back">
				<a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui"></a>
			</div>
			<div class="title">详情页</div>
			<div class="tit"></div>
		</div>
		<div class="main" v-if='detailData'>
			<div class="pro_img">
				<img :src="detailData.pics" alt="" />
			</div>
			<div class="pro_des">
				<p>{{detailData.name}}</p>
				<p>{{detailData.english}}</p>
				<p>{{detailData.des}}</p>
				<p>
					<em>¥</em>
					<span>{{detailData.price}}</span>
				</p>
			</div>
		</div>
		<div class="footer">
			<button class="buy" @click="toCart">立即购买</button>
			<button class="cart" @click="addCart">加入购物车</button>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	import qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'detail',
		data () {
			return {
			}
		},
		methods:{
			...mapActions('product', [
				'getCartData'
			]),
			addCart () {
				var params = {
					id: this.detailData.id,
					pro_img: this.detailData.pics,
					pro_name: this.detailData.name,
					pro_price: this.detailData.price,
					num: 1,
					checked: true
				}
				axios('http://localhost:3000/product/addCart?'+qs.stringify(params)).then(res=>{
					console.log(res)
				})
			},
			toCart () {
				this.$router.push({path:"/cartpage"})
			}
		},
		computed: {
			...mapGetters('product', [
				'cartData',
				'detailData'
			])
		},
		mounted () {
			console.log(this.detailData)
		}
	}
</script>

<style scoped>
	.header {
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 14px;
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.back, .tit {
		width: 60px;
		height: 44px;
		text-align: center;
	}
	.title {
		text-align: center;
		flex: 1;
	}
	.pro_img {
		width: 100%;
	}
	.pro_img img {
		width: 100%;
		height: 320px;
	}
	.pro_des p {
		line-height: 24px;
		margin-left: 10px;
	}
	.pro_des p:first-child {
		font-size: 14px;
	}
	.pro_des p:nth-of-type(3) {
		color: #666;
	}
	.pro_des p:nth-of-type(4) em {
		font-size: 10px;
		color: red;
	}
	.pro_des p:nth-of-type(4) span {
		font-size: 14px;
		color: red;
	}
	.footer {
		height: 44px;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #eee;
	}
	button {
		height: 44px;
		width: 100px;
		line-height: 44px;
		text-align: center;
		border: none;
		float: right;
		color: #fff;
	}
	.cart {
		background: #000;
	}
	.buy {
		background: red;
	}
</style>