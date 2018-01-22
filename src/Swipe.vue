<template>
	<div>
		<div class="slide">
			<mt-swipe :defaultIndex=2 :showIndicators='false' :auto="4000">
			  <mt-swipe-item v-for='(ele,index) in listData' :key='index'><img class="slide-img" :src='ele.pic'/></mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'swipe',
		data(){
			return {
				listData:[]
			}
		},
		methods:{
			getData(){
				//http://m.
				axios('/loho/index').then(res=>{
					console.log(res.data.result.focus)
					this.listData=res.data.result.focus
				})
			}
		},
		mounted(){
			this.getData()
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.slide,.slide-img{
		width: 100%;
		height: 187px;
	}
</style>