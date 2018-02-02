<template>
<div id="bigBox">
  <v-header :tit="username"></v-header>
  <div id="center">
		<div class="slide">
			<mt-swipe :defaultIndex=2 :showIndicators='false' :auto="4000">
			  <mt-swipe-item v-for='(ele,index) in bannerData' :key='index'><img class="slide-img" :src='ele.pic_url'/></mt-swipe-item>
			</mt-swipe>
		</div>
		<div id="navigation">
			<ul>
				<li v-for='ele in navData' :key='ele.nav_id'>
					<!-- <router-link :to='{ path:"/home/"+ele.type, query: { num:  1} }'> -->
					<router-link :to='{ path:"/"+ele.type, query: { classId: 888} }'>
						<img :src="ele.nav_pic" alt="">
						<em>{{ele.nav_name}}</em>
					</router-link>
				</li>
			</ul>
		</div>
		<div id="newyear">
			<ul>
				<li v-for="(ele,index) in newYearData" :key='index'>
					<div>
						<router-link to="">
							<img :src="ele.pro_url1" alt="">
						</router-link>
					</div>
					<ol>
						<li v-for='(el,index) in JSON.parse(ele.pro_url2)' :key="index">
							<router-link to="">
								<img :src="el.skuPic" alt="">
								<p>DrJart</p>
								<em></em>
								<p>{{el.skuName}}</p>
								<p>
									￥<em>{{el.Price}}</em>.00
								</p>
							</router-link>
						</li>
					</ol>
				</li>
			</ul>
		</div>
		<div class="whitespace"></div>
		<div id="brand">
			<div class="brand-title">
				<h3>全部品牌</h3>
				<i class="iconfont icon-gengduo"></i>
			</div>
		 <div class="brand-show">
			  <router-link to="">
					<img src="https://ssl1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/banner/m_superbrandcaudalie1_20180118.png">
					<img src="https://ssl2.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/banner/m_superbrandcaudalie2_20180118.png">
					<img src="https://ssl3.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/banner/m_superbrandcaudalie3_20180118.png">
				</router-link>
			</div>
			<div class="brand-white"></div>
			<div class="brand-show">
				<router-link to="">
					<img src="https://ssl4.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/banner/m_superbrand2_20180118.png">
				</router-link>
			</div>
			<div id="brand-logo">
				<ul>
					<li v-for='ele in allBrand' :key='ele.brand_id'>
						<router-link to="">
							<img :src="ele.brand_logo" alt="">
						</router-link>
					</li>
				</ul>
			</div>			
		</div>
		<div class="whitespace"></div>
		<div class="category">
			<div class="brand-title">
				<h3>护肤</h3>
				<i class="iconfont icon-gengduo"></i>
			</div>
		 <div class="category-show">
			  <router-link to="">
					<img src="https://ssl2.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/banner/m_mufloor_20180118.jpg">

				</router-link>
			</div>
			<div class="brand-white"></div>
			<div class="product-show">
				<div>
					<router-link to="">
						<img src="https://ssl1.sephorastatic.cn/products/3/5/6/0/3/3/1_n_05748_210x210.jpg">
						<p>BOBBIBROWN</p>
						<em></em>
						<p>芭比波朗密集修护菁华粉底液</p>
						<p>
							<em>￥620.00</em>
						</p>
					</router-link>			
				</div>
				<ul>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
				</ul>
			</div>						
		</div>
		<div class="whitespace"></div>
		<div class="category">
			<div class="brand-title">
				<h3>护肤</h3>
				<i class="iconfont icon-gengduo"></i>
			</div>
		 <div class="category-show">
			  <router-link to="">
					<img src="https://ssl2.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/banner/m_mufloor_20180118.jpg">

				</router-link>
			</div>
			<div class="brand-white"></div>
			<div class="product-show">
				<div>
					<router-link to="">
						<img src="https://ssl1.sephorastatic.cn/products/3/5/6/0/3/3/1_n_05748_210x210.jpg">
						<p>BOBBIBROWN</p>
						<em></em>
						<p>芭比波朗密集修护菁华粉底液</p>
						<p>
							<em>￥620.00</em>
						</p>
					</router-link>			
				</div>
				<ul>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="https://ssl4.sephorastatic.cn/products/V/S/9/5/9/5/5/1/1_n_05748_210x210.jpg" alt="">
							<p>DIOR</p>
							<p>克丽丝汀迪奥烈艳蓝金唇膏（双色双效）</p>
							<p>
								<em>￥300.00</em>
							</p>
						</router-link>
					</li>
				</ul>
			</div>						
		</div>
	</div>
  <v-footer></v-footer>
</div>
</template>
<script>
	import axios from 'axios'
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name:'home',
		data(){
			return {
				username: ''
			}
		},
		computed:{
			...mapGetters('homedata',[
				'bannerData','navData','newYearData','allBrand'
			])
		},
		methods:{
			...mapActions('homedata',[
				'getBannerData','getNavData','getNewYearData','getBrandData'
			])
		},
		mounted(){
			this.getBannerData();
			this.getNavData();
			this.getNewYearData();
			this.getBrandData()
			this.username = this.$route.params.username
			
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

<style lang="scss" scoped="scoped">
#bigBox{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	#navigation{
		width: 100%;
		height: 1.4rem;
		margin-top: 10px;
		ul{
			width: 100%;
			height: 100%;
			li{
				width: 20%;
				height: 50%;
				float: left;
				a{
					width: 100%;
					height: 100%;
					color: black;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					img{
						width: 0.4rem;
						height: 0.4rem;
					}
				}
			}
		}
	}
	#newyear{
		width: 100%;
		ul{
			width: 100%;
			li{
				width:100%;
				height: 3.45rem;
				div{
					width: 100%;
					height: 1.5rem;
					margin: 10px 0;
					a{
						width: 100%;
						height: 100%;
						img{
							width: 100%;
							height: 100%;
						}
					} 
				}
				ol{
					width: 100%;
					height: 1.84rem;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					li{
						height: 100%;
						a{
							display: block;
							width: 100%;
							height: 100%;
							color: black;
							text-align: center;
							img{
								text-align: center;
								width: 1.05rem;
								height: 1.05rem;
							}
							p{
								padding: 5px 10px 0;
							}
							p:nth-child(2){
								height: 8px;
								padding: 0;
							}
							em:nth-child(3){
								width:10px;
								display: inline-block;
								border-bottom: 1px solid #474747;
							}
							p:nth-child(4){
								width: .86rem;
								font-size: .1rem;
								color: #555;
								display: -webkit-box;
								overflow: hidden;
								text-overflow: ellipsis;
								word-break: break-all;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								position: relative;
							}
							p:nth-child(5){
								color: red;padding-top: 10px;
							}
						}
					}
				}
			}
		}
	}
	.whitespace{
		width:100%;
		height:10px;
		background: #EEEEEE;
		clear: both;
		overflow: hidden;
	}
	.brand-title{
		width:100%;
		height:48px;
		padding: 10px 0;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items:center;
		font-size:24px;
		font-weight:700;
		h3{
			padding-left: 15px;
		}
		i{
			padding-right:15px;
		}
	}
	#brand{
		width: 100%;
		
		.brand-show{
			width:100%;
			height:1.75rem;
			a{
				display: block;
				width:100%;
				height:100%;
				position: relative;
				img:nth-child(1){
					width:100%;
					height:100%;
				}
				img:nth-child(2){
					position: absolute;
					right: 0;
					bottom: 0;
					width:1.86rem;
					height:1.55rem;
				}
				img:nth-child(3){
					position: absolute;
					right: 15px;
					bottom: 25px;
					width:.77rem;
					height:1.07rem;
				}
			}
		}
		#brand-logo{
			width:100%;
			height:1.77rem;
			display: flex;
			flex-direction:row;
			justify-content: center;
			align-items: center;
			ul{
				width:90%;
				height:80%;
				li{
					width: 25%;
					height:33%;
					float: left;
					a{
						width: 100%;
						height:100%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						img{
							width:.72rem;
							height:.3rem;
						}
					}
				}
			}
		}
	}
	.category{
		width:100%;
		overflow-x: hidden;
		.category-show{
			width: 100%;
			a{
				display:flex;
				width: 100%;
				height:1.5rem;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				img{
					width:95%;
					height: 100;
				}
				
			}
		}
		.product-show{
			width:100%;
			height:2.62rem;
			div{
				width: 1.45rem;;
				height: 2.55rem;
				float:left;
				a{
					display: block;
					width: 100%;
					height: 100%;
					color: black;
					text-align: center;
					img{
						text-align: center;
						width: 1.05rem;
						height: 1.05rem;
					}
					p{
						padding: 5px 10px 0;
					}
					p:nth-child(2){
						height: 8px;
						padding: 0;
					}
					em:nth-child(3){
						width:10px;
						display: inline-block;
						border-bottom: 1px solid #474747;
					}
					p:nth-child(4){
						width: 1.05rem;
						padding-left: 21px;
						font-size: .1rem;
						color: #555;
						display: -webkit-box;
						overflow: hidden;
						text-overflow: ellipsis;
						word-break: break-all;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						position: relative;
					}
					p:nth-child(5){
						color: red;padding-top: 10px;
					}
				}		
			}
			ul{
				width: 2.21rem;
				float:right;
				li{
					width:1.1rem;
					height:1.25rem;
					float: left;
					a{
						display: block;
						width: 100%;
						height: 100%;
						color: black;
						text-align: center;
						img{
							text-align: center;
							width: .8rem;
							height: .8rem;
						}
						p{
							padding: 4px 10px 0;
						}
						p:nth-child(2){
							height: 8px;
							font-size:5px!important;
						}
						p:nth-child(3){
							width:.94rem;
							font-size: .08rem;
							color: #555;
							display: -webkit-box;
							overflow: hidden;
							text-overflow: ellipsis;
							word-break: break-all;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							position: relative;
						}
						p:nth-child(4){
							color: red;
						}
					}
				}
			}
		}

	}
	.brand-white{
		width:100%;
		height:10px;
		overflow: hidden;
	}
	
}
#center{
	flex: 1;
	overflow-y: auto;
}
.slide,.slide-img{
	width: 100%;
	height: 187px;
}

</style>