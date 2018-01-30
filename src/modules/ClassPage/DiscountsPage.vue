<template>
<div id="bigBox">
	<div id='discount-title'>
		<div id="title-top">
			<img @click='goBack' src="http://s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2017/11/icon/arrow.png" alt="">
			<p>每周特惠</p>
			<i class="iconfont icon-gengduo"></i>
		</div>
		<div v-show="drag" id="title-bottom">
			<ul>
				<li @click='changeRotate(1)'>
					<p class="p1">{{val?val:'分类'}}</p><img :class="rotate&&index==1?'no':'yes'" src="http://s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2017/08/filter/img/down.svg" alt="">
				</li>
				<li @click='changeRotate(2)'>
					<p>{{brandValue?brandValue:'品牌'}}</p><img :class="rotate&&index==2?'no':'yes'" src="http://s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2017/08/filter/img/down.svg" alt="">
				</li>
				<li @click='changeRotate(3)'>
					<p>排序</p><img :class="rotate&&index==3?'no':'yes'"  src="http://s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2017/08/filter/img/down.svg" alt="">
				</li>
				<li @click='changeRotate(4)'>
					<p>筛选</p><img :class="rotate&&index==4?'no':'yes'"  src="http://s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2017/08/filter/img/down.svg" alt="">
				</li>
			</ul>
			<ol :class="rotate?'wid':''">
				<!-- enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight" -->
				<transition enter-active-class='animated bounce' >
					<li v-show="rotate&&index==1">
						<div class="class-left">
							<div @click='changestyle(1)' :class="styleIndex==1?'whi':''">全部分类</div>
							<div @click='changestyle(2)' :class="styleIndex==2?'whi':''">护肤</div>
							<div @click='changestyle(3)' :class="styleIndex==3?'whi':''">彩妆</div>
							<div @click='changestyle(4)' :class="styleIndex==4?'whi':''">香水</div>
						</div>
						<div class="class-right">
							<div v-show='styleIndex==1' @click='changeValue'>
								<p @click='changeValue'>全部分类</p>
							</div>
							<div v-show='styleIndex==2' >
								<p @click='changeValue($event,1)' :class="colorIndex==1?'colorRed':''">面部护理</p>
								<p @click='changeValue($event,2)' :class="colorIndex==2?'colorRed':''">面膜</p>
								<p @click='changeValue($event,3)' :class="colorIndex==3?'colorRed':''">唇部护理</p>
								<p @click='changeValue($event,4)' :class="colorIndex==4?'colorRed':''">卸妆</p>
								<p @click='changeValue($event,5)' :class="colorIndex==5?'colorRed':''">眼部护理</p>
								<p @click='changeValue($event,6)' :class="colorIndex==6?'colorRed':''">手部护理</p>
							</div>
							<div v-show='styleIndex==3'>
								<p @click='changeValue($event,7)' :class="colorIndex==7?'colorRed':''">彩妆</p>
							</div>
							<div v-show='styleIndex==4'>
								<p @click='changeValue($event,8)' :class="colorIndex==8?'colorRed':''">香水</p>
							</div>
						</div>
					</li>
				</transition>
				<li v-show="rotate&&index==2">
						<mt-checklist
							align="right"
							title="全部分类"
							v-model="value"
							:options="['全部品牌', '品牌2', '品牌']">
						</mt-checklist>
						<input type="button" value="完成" @click='changeBrand'>
				</li>
			</ol>			
		</div>
	</div>
	<div id="discount-center" ref="boxx">
			<div class="center01">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_01.jpg" alt="">
			</div>
			<div class="center02">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_02.jpg" alt="">
			</div>
			<div class="center03">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_03.jpg" alt="">
			</div>
			<div class="center04">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_04.jpg" alt="">
			</div>
			<div class="center05">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_05.jpg" alt="">
			</div>
			<div class="center06">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_06.jpg" alt="">
			</div>
			<div class="center07">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_07.jpg" alt="">
			</div>
			<div class="center08">
				<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180125/imgs/ws20180125_08.jpg" alt="">
			</div>
			<ul id="center09">
				<!-- <li v-for="(item,index) in list" :key='index'>
					<img v-lazy="item">
				</li> -->
				<li v-for="(ele,index) in discountsData" :key='index'>
					<router-link to="">
						<img :src="ele.skuPic" alt="">
						<div>{{ele.skuBrand}}</div>
						<div>{{ele.skuName}}</div>
						<div>
							<span class="">{{ele.Price}}¥925</span>
							<span class=""><em>¥</em>{{ele.offerPrice}}</span>
						</div>
						<div>
							<img src="//s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2017/03/lipzone20170330/button_0331.jpg" alt="">
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</div>
</template>
<script>
	import animate from 'animate.css'
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name:'discounts',
		data(){
			return {
				rotate:false,
				tabPosition:'left',
				styleIndex:1,
				val:'',
				colorIndex:'',
				value:[],
				visible: false,
				valueIndex:'',
				brandValue:'',
				drag:'false'
			}
		},
		computed:{
			...mapGetters('discountsdata',[
				'discountsData','index'
			]),
			choseBrand:function(){
				var length = this.value.length
				var va = ''
					for(let i =0;i<length;i++){
						if(i==0){
							va +=this.value[0]
						}else{
							va +='/'+this.value[i]
						}
					}
				return va
			}
		},
		methods:{
			...mapActions('discountsdata',[
				'getDiscountsData','changeIndex'
			]),
			goBack(){
				this.$router.go(-1)
			},
			handleClick() {
        //console.log('button click');
			},
			changeRotate(ind){
				this.changeIndex({index:ind})
				this.rotate = !this.rotate
				//this.styleIndex = 1
			},
			changestyle(index){
				this.styleIndex = index
			},
			changeValue(e,colorIndex){
				console.log(e)
				console.log(colorIndex)
				//vue中提供了两个获取当前元素的内容的方法var el = e.target; //当前元素，可修改（能够用此方法获取到他的子元素，不能获取他本身的内容）var el = e.currentTarget;//当前元素，不可修改（能够用此方法获取到他的子元素及能获取他本身的内容）
				//console.log(e.currentTarget.innerHTML)
				this.val = e.currentTarget.innerHTML
				this.colorIndex = colorIndex
				this.rotate = false
			},
			changeBrand(){
				this.brandValue = this.choseBrand
				this.rotate = false
			},
			handleScroll () {//监听某个元素的滚动条的滚动高度的变化，也可以监听整个页面也就是body的滚动高度，把元素换成body就行了，要做兼容
				var scrollTop = this.$refs.boxx.pageYOffset || this.$refs.boxx.scrollTop
				console.log(scrollTop)
				if(scrollTop>=1700){
					this.drag=true
				}else{
					this.drag=false
				}
			},
		},
		mounted(){
			this.getDiscountsData({route:this.$route.name})
			this.$refs.boxx.addEventListener('scroll', this.handleScroll)
			//console.log(this.$route.name)
		}
	}
</script>

<style lang="scss" scoped>
.wid{
	height: 3rem;
}
.whi{
	background-color: white;
}
.colorRed{
	color:red;
}
.yes{
	transition: all .5s; 
	transform:rotate(0deg);
}
.no{
	transform:rotate(180deg);
	transition: all 0.5s;
}
#bigBox{
	width:100%;
	height:100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	#discount-title{
		width: 100%;
		#title-top{
			width: 100%;
			height: .44rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			img{
				width:.3rem;
				height: .3rem;
				margin-left:10px;
			}
			p{
				font-size: 18px;
			}
			i{
				margin-right:10px;
			}
		}
		#title-bottom{
			width:100%;
			height: 100%;	
			position: relative;
			ul{
				height: .41rem;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				li{
					cursor: pointer;
					flex: 1;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					font-size: 15px;
					position: relative;
					border-bottom: 1px solid #e1e1e1;
					z-index: 18;
					img{
						width: 15px;
						height: 15px;
					}
					// &::after{
					// 	content: '';
					// 	width: 10px;
					// 	height: 10px;
					// 	border: #bcbec2 solid 1px;
					// 	border-left: 1px solid white;
					// 	border-bottom: 1px solid white;
					// 	transform: rotate(-45deg);
					// 	opacity: 1;
					// 	background: white;
					// 	position: absolute;
					// 	bottom: -6px;
					// 	left: 50%;
					// 	margin-left: -5px;
					// 	z-index: 25;
					// }
					p{
						height: .165rem;
						width: .35rem;
						overflow: hidden;
						padding-right: 5px;
					}
				}
			}
			ol{
				width: 100%;
				background: white;
				z-index: 999;
				position: absolute;
				top: .42rem;
				left: 0;
				li:nth-child(1){
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: flex-start;
					.class-left{
						height: 100%;
						background: #F0F0F0;
						width: 150px;
						text-align: center;
						div{
								height: .45rem;
								line-height: .45rem; 
						}
					}
					.class-right{
						flex: 1;
						div{
							width: 100%;
							height: 100%;
							p{
								line-height: .45rem;
								text-align: center;
							}
						}
					}

				}
			}
		}

	}
	#discount-center{
		flex: 1;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;	
		.center01{
			width: 100%;
			height: 2.16rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.center02{
			width: 100%;
			height: 1.59rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.center03{
			width: 100%;
			height: 1.195rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.center04{
			width: 100%;
			height: 3.02rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.center05{
			width: 100%;
			height: 2.94rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.center06{
			width: 100%;
			height: 3.025rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.center07{
			width: 100%;
			height: 3.025rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.center08{
			width: 100%;
			height: 1.2rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		#center09{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
			background: url('http://s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2018/01/ws20180118/images/ws20180118_09.jpg') repeat-y;
			background-size: 100% auto;
			li{
				width: 47%;
				height: 2.68rem;
				background-color: white;
				float: left;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 10px;
				a{
					width: 95%;
					height: 97%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text-align: center;
					color: black;
					>img{
						width: 1.57rem;
						height: 1.57rem;
					}
					div:nth-child(2){
						font-size: 15px;
						font-weight: bold;
						width:1.51rem;
						height: .18rem;
					}
					div:nth-child(3){
						font-size: 14px;
						width:1.53rem;
						height: .3rem;
					}
					div:nth-child(4){
						width:100%;
						height: .13rem;
						span:nth-child(1){
							font-size: 10px;
						}
						span:nth-child(2){
							font-size: 17px;
							color:red;
							font-weight: bold;
							em{
								font-weight: 20;
								font-size: 10px;
							}
							
						}
					}
					div:nth-child(5){
						margin-top:10px; 
						width:.8rem;
						height: .19rem;
						img:nth-child(1){
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
}
</style>