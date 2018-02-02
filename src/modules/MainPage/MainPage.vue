<template>
<div id="bigBox">
  <main-header :tit="username"></main-header>
  <div id="center">
		<ul id="cardMessage">
			<li><router-link to=""><p>粉卡</p><p>会员等级</p></router-link></li>
			<li><router-link to=""><p>0</p><p>会员积分</p></router-link></li>
			<li><router-link to=""><p>0张</p><p>优惠券</p></router-link></li>
		</ul>
		<ul id="orderModel">
			<li>
				<p>我的订单</p>
				<p>所有订单</p>
			</li>
			<li>
				<router-link to=""><div><em>2</em></div><p>待支付</p></router-link>
				<router-link to=""><div><em>2</em></div><p>处理中</p></router-link>
				<router-link to=""><div><em>2</em></div><p>配送中</p></router-link>
				<router-link to=""><div><em>2</em></div><p>已完成</p></router-link>
			</li>
			<li>
				<router-link to="">
					<p>帮助中心</p>
					<p class="iconfont icon-you"></p>
				</router-link>
				
			</li>
		</ul>
		<div id="yourlike">
			<div id="like-title">
				<div></div><div><img src="./../images/myaccount_11.png" alt=""><em>猜你喜欢</em></div><div></div>
			</div>
			<ol id="like-product">
				<li v-for='item in yourLikeData' :key="item.pro_id">
					<router-link to="">
						<img :src="item.skuPic" alt="">
						<p>{{item.skuBrand}}</p>
						<p>{{item.skuName}}</p>
						<p>￥{{item.offerPrice}}</p>
					</router-link>
				</li>		
			</ol>
		</div>
	</div>
  <v-footer></v-footer>
</div>
</template>
<script>
	import axios from 'axios'
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name:'mainpage',
		data(){
			return {
				username:'',
				siginOut:''
			}
		},
		computed:{
			...mapGetters('maindata',[
				'yourLikeData'
			])
		},
		methods:{
			...mapActions('maindata',[
				'getYourLikeData'
			])
		},
		mounted(){
			this.getYourLikeData()
			var token = window.localStorage.getItem("token") //获取token
			if(token){
				axios.get("http://localhost:3000/requiresAuth?token="+token).then(res=>{
		      if(res.data.msgCode==1){
		        this.username = res.data.username
		      }
		   })
			}
	  }
	}
</script>
<style lang="scss" scoped>
#bigBox{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
#center{
	flex: 1;
	width: 100%;
	overflow-y: auto;
	background-color: #EEEEEE;
	#cardMessage{
		width: 100%;
		height: .82rem;
		margin: 10px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;	
		background-color: white;
		li{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;		
			p:nth-child(1){
				font-size: 15px;
				line-height: 27px;
				color: black;
			}
			p:nth-child(2){
				font-size: 14px;
				line-height: 27px;
				color: #999999;
			}
		}
	}
	#orderModel{
		width: 100%;
		li{
			background-color: white;
		}
		li:nth-child(1){
			width: 100%;
			height: .49rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			text-align: center;
			margin-bottom: 1px;
			p{
				line-height: .49rem;
			}
			p:nth-child(1){
				margin-left: .2rem;
				font-size: .15rem;
			}
			p:nth-child(2){
				margin-right: .1rem;
				font-size: 14px;
				color: #999999;
			}
		}
		li:nth-child(3){
			margin-top: 10px;
			width: 100%;
			height: .49rem;
			a{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				text-align: center;
				margin-bottom: 1px;
				width: 100%;
				height: 100%;
				color: #999999;
				p{
					line-height: .49rem;
				}
				p:nth-child(1){
					margin-left: .2rem;
					font-size: .15rem;
				}
				p:nth-child(2){
					margin-right: .1rem;
					font-size: 14px;
					
				}
				}
			}
		li:nth-child(2){
			width: 100%;
			height: .81rem;
			margin-top: 1px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			a{
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 14px;
    		color: #999999;
				div{
					margin-bottom: 5px;
					position: relative;
					em{
						display: block;
						width: 14px;
						height: 14px;
						background: red;
						border-radius: 50%;
						position: absolute;
						right: -5px;
						top: -8px;
						color: white;
						text-align: center;
						line-height: 14px;
						font-size: 12px;
					}
				}
			}
			a:nth-child(1){
				div{
					width: .31rem;
					height: .21rem;
					background: url('./../images/myaccount_03.png') no-repeat;
					background-size: 100% 100%;
				}
			}
			a:nth-child(2){	
				div{
					width: .31rem;
					height: .21rem;
					background: url('./../images/myaccount_05.png') no-repeat;
					background-size: 100% 100%;
				}
			}
			a:nth-child(3){
				div{
					width: .31rem;
					height: .21rem;
					background: url('./../images/myaccount_07.png') no-repeat;
					background-size: 100% 100%;
				}
			}
			a:nth-child(4){
				div{
					width: .31rem;
					height: .21rem;
					background: url('./../images/myaccount_09.png') no-repeat;
					background-size: 100% 100%;
				}
			}
				
			
		}
	}
	#yourlike{
		width: 100%;
		#like-title{
			width: 100%;
			height: .43rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			div:nth-child(1),div:nth-child(3){
				width: .6rem;
				height: 1px;
				background: #CCCCCC;
				border: none;
			}
			div:nth-child(2){
				width: .88rem;
				height: .4rem;
				text-align: center;
				line-height: .4rem;
				margin: 0 10px;
				img{
					width: .225rem;
					height: .19rem;
					margin-right: 8px;
				}
				em{
					font-size: 14px;
					color: #000000;
					font-weight: 600;
					font-family: "SourceHanSansCN-Normal";
				}
			}
		}
		#like-product{
			width: 100%;
			padding: 0 10px;
			background: white;
			li{
				
				width: 50%;
				height: 2.55rem;
				a{
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					img{
						width: 1.6rem;
						height: 1.6rem;
					}
					p:nth-child(2){
						color: black;
						font-size: 9px;
					}
					p:nth-child(3){
						color: black;
						font-size: 12px;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						padding-right: 20px;
					}
					p:nth-child(4){
						color: red;
						font-size: 12px;
					}
				}
			}
			li:nth-child(2n){
				float: right;

				align-items:flex-start;
			}
			li:nth-child(2n+1){
				float: left;
				align-items: flex-end;

			}
		}
	}
}
</style>