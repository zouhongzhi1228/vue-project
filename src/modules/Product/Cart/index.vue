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
			<div class="pro_item" v-for="(ele,index) in cartData" v-if="cartData.length?true:false">
				<div class="pro_cheack">
					<input type="checkbox" ref="check" @click="flag(index,ele.pro_price,ele.num)" />
				</div>
				<div class="pro_img">
					<a href="javascript:;">
						<img :src="ele.pro_img" alt="" />
					</a>
				</div>
				<div class="pro_text">
					<p class="pro_name">{{ele.pro_name}}</p>
					<p class="pro_price">
						<em>¥{{ele.pro_price}}</em>
					</p>
				</div>
				<div class="pro_num">
					<span class="pro_sub" @click="sub(ele.uid,ele.num,ele.pro_price,index)">-</span>
					<span class="pro_cont">{{ele.num}}</span>
					<span class="pro_add" @click="add(ele.uid,ele.num,ele.pro_price,index)">+</span>
				</div>
				<div class="subBtn">
					<a @click="update(ele.uid)" href="javascript:;">删除商品</a>
				</div>
			</div>
			<div v-if="cartData.length==0?true:false">
				<div class="nullCart">你的购物车空空如也</div>
			</div>
		</div>
		<div class="footer">
			<div class="allCheack">
				<span @click="all">
					<el-checkbox  v-model="checked"></el-checkbox>
				</span>
				<span>全选</span>
			</div>
			<div class="allPrcie">
				<span>合计:</span>
				<em>¥{{allPrice}}</em>
			</div>
			<button>结算<span>{{n}}</span></button>
		</div>
		<!--<el-button type="text" @click="open2"></el-button>-->
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		data　()　{
			return {
				allChecked: false,
				allPrice: 0,
				checked: false,
				n: 0
			}
		},
		methods: {
			...mapActions('cart',	[
				'getCartData',
				'addNum',
				'subNum',
				'updateData'
			]),
			sub(id,num,price,index){
				if(num>0){
					this.subNum(id)
					setTimeout(()=>{
						this.getCartData()
					},100)
					if(this.$refs.check[index].checked){
						this.allPrice -= price
						this.n -= 1
					}
				}else{
					num = 0
				}
			},
			add(id,num,price,index){
				this.addNum(id)
				setTimeout(()=>{
					this.getCartData()
				},100)
				if(this.$refs.check[index].checked){
					this.allPrice += price
					this.n += 1
				}
			},
			update(id){
				this.updateData(id)
				setTimeout(()=>{
					this.getCartData()
				},100)
			},
			flag(index,price,num){
				var check = this.$refs.check[index].checked
				var allCheck = this.$refs.check
				for(var i = 0; i < allCheck.length; i++){
					if(allCheck[i].checked == true){
						for(var j = allCheck.length-1; j >= 0; j--){
							if(allCheck[j].checked == true){
								this.checked = true
							}else{
								this.checked = false
							}
						}
					}else{
						this.checked = false
					}
				}
				if(check){
					this.allPrice +=price*num
					this.n += num
				}else{
					var itemPrice = price*num
					this.allPrice -= itemPrice
					this.n -= num
				}
			},
			all(){
				var allCheck = this.$refs.check
				var sum = 0
				var x = 0
				if(!this.checked){
					for(var i = 0; i < allCheck.length; i++){
						allCheck[i].checked = true
					}
					for(var j = 0; j < this.cartData.length; j++){
						sum += (this.cartData[j].num*this.cartData[j].pro_price)
						x += this.cartData[j].num
					}
					this.allPrice = sum
					this.n = x
				}else{
					for(var i = 0; i < allCheck.length; i++){
						allCheck[i].checked = false
						this.allPrice = 0
						this.n = 0
					}
				}
			}
//			open2() {
//      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
//        confirmButtonText: '确定',
//        cancelButtonText: '取消',
//        type: 'warning'
//      }).then(() => {
//        this.$message({
//          type: 'success',
//          message: '删除成功!'
//        });
//      }).catch(() => {
//        this.$message({
//          type: 'info',
//          message: '已取消删除'
//        });          
//      });
//    }
    
		},
		computed: {
			...mapGetters('cart', [
				'cartData'
			])
		},
		mounted(){
			this.getCartData()
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
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
		border-bottom: 1px solid #E6E6E6;
	}
	.main {
		flex: 1;
		margin-top: 44px;
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
	.pro_item:last-child {
		margin-bottom: 80px;
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
	.pro_text p {
		width: 200px;
		line-height: 20px;
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
		bottom: 20px;
	}
	.subBtn {
		position: absolute;
		right: 17px;
		bottom: 0;
	}
	.subBtn a {
		font-size: 16px;
		color: #666666;
	}
	.nullCart {
		height: 44px;
		font-size: 14px;
		line-height: 44px;
		text-align: center;
	}
	.footer {
		position: fixed;
		height: 44px;
		width: 100%;
		background: #fff;
		bottom: 0;
		z-index: 1000;
	}
	.allCheack, .allPrcie {
		float: left;
	}
	.allCheack {
		margin: 16px 0 0 10px;
	}
	.allPrcie {
		margin-left: 10px;
		margin-top: 10px;
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
		color: #fff;
		font-size: 14px;
	}
</style>