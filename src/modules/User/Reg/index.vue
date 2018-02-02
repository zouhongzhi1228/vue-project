<template>
	<div>
		<l-r-header tit="注册"></l-r-header>
		<div>
			<mt-field label="用户名" type="number" v-model="username"></mt-field>
			<mt-field label="密码" type="password" v-model="psd"></mt-field>
			<mt-field label="确认密码" type="password" v-model="comfirmPsd"></mt-field>
		</div>
		<div>
			<mt-button size="large" class="registerBtn" @click="reg">同意条款并注册</mt-button>
		</div>
	</div>
</template>

<script>
	
	import { Toast } from 'mint-ui'
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name: 'register',
		data () {
			return {
				username: '',
				psd: '',
				comfirmPsd: ''
			}
		},
		methods: {
			reg () {
				if (this.username == '') {
					Toast({
					  message: '请输入用户名',
					  position: 'bottom',
					  duration: 1000
					})
				} else if (this.psd === this.comfirmPsd && this.psd != '') {
					fetch(`http://10.9.171.35:3000/user/reg?username=${this.username}&password=${this.psd}`)
					.then(data=>data.json())
					.then(res=>{
						if (res.msgCode == 1) {
							Toast({
							  message: res.msg,
							  position: 'bottom',
							  duration: 3000
							})
							setTimeout(()=>{
								this.$router.push({path:"/login"})
							},3000)
						} else {
							Toast({
							  message: res.msg,
							  position: 'bottom',
							  duration: 1000
							})
						}
					})
				} else {
					Toast({
					  message: '两次密码不一致',
					  position: 'bottom',
					  duration: 1000
					})
				}
			}
		}
	}
</script>

<style scoped>
	.registerBtn {
		background: #999;
		color: #fff;
		width: 90%;
		margin-left: 5%;
		margin-top: 20px;
	}
	

</style>