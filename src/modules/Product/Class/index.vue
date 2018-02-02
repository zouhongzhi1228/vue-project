<template>
	<div class="container">
		<div class="header">分类商品</div>
		<div class="content">
			<div class="classList">
				<ul>
					<li v-for="(item,index) in classList" @click="getIndex(index)" ref="li">{{item.classname}}</li>
				</ul>
			</div>
			<div class="main">
				<div class="product_img">
					<a href="javascript:;">
						<img :src="classData.imgSrc" alt="" />
					</a>
				</div>
				<div class="product_cont" v-for="(ele,i) in classData.classData">
					<p class="product_title">
						<span>{{ele.title}}</span>
						<span>></span>
					</p>
					<ul>
						<li class="product_item" v-for="(item,index) in ele.itemData">
							<a @click="toDetale(item.price,item.pics,item.name,item.english,item.des,i,index)" href="javascript:;" class="item_img">
								<img :src="item.pics" alt="" />
							</a>
							<p class="item_title">{{item.cont}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<v-footer class="footer"></v-footer>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name: 'productClass',
		data() {
			return {
				index: 1
			}
		},
		computed: {
			...mapGetters('product', [
				'classList',
				'classData'
			])
		},
		methods: {
			...mapActions('product', [
				'getClassList',
				'getClassData',
				'getDetailData'
			]),
			getIndex(index) {
				for(var i = 0;i < this.$refs.li.length; i++) {
					this.$refs.li[i].style.background = '#e6e6e6'
					this.$refs.li[i].style.color = '#000'
				}
				this.$refs.li[index].style.background = '#fff'
				this.$refs.li[index].style.color = 'red'
				this.getClassData(index+1)
			},
			toDetale(price,pics,name,english,des,i,index){
				var id = `${i}${index}`
				var params = {
					price,pics,name,english,des,id
				}
				this.getDetailData(params)
				this.$router.push({path:"/detail"})
			}
		},
		mounted () {
			this.getClassList()
			this.getClassData(this.index)
		}
	}
</script>

<style scoped>
	.header {
		height: 44px;
		width: 100%;
		line-height: 44px;
		text-align: center;
		position: fixed;
		top:0;
		background: #fff;
		border-bottom: 1px solid #EEEEEE;
	}
	.content {
		margin-top: 44px;
	}
	.classList {
		position: fixed;
		top: 45px;
		left: 0;
		width: 90px;
		height: 649px;
		background: #e6e6e6;
	}
	.classList ul li {
		width: 90px;
		height: 61px;
		line-height: 61px;
		text-align: center;
	}
	.classList ul li:first-child {
		background: #fff;
		color: red;
	}
	.main {
		width: 285px;
		float: right;
		min-height: 1000px;
		margin-bottom: 70px;
	}
	.product_cont {
		clear: both;
	}
	.product_img img {
		width: 93%;
		margin: 10px;
	}
	.product_title {
		height: 44px;
		line-height: 44px;
		padding: 0 10px;
	}
	.product_title span:nth-child(1) {
		float: left;
	}
	.product_title span:nth-child(2) {
		float: right;
	}
	.product_item {
		float: left;
		width: 33%;
	}
	.item_title {
		text-align: center;
		font-size: 12px;
	}
	.item_img img {
		width: 75px;
		height: 75px;
		margin: 10px;
	}
  .footer {
		position: fixed;
		bottom:0;
		background: #fff;
	}
</style>