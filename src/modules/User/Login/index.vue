<template>
	<div>
		<l-r-header tit="登录"></l-r-header>
		<div>
			<mt-field label="用户名" type="number" v-model="username"></mt-field>
			<mt-field label="密码" type="password" v-model="psd"></mt-field>
		</div>
		<div>
			<mt-button size="large" class="loginBtn" @click="login">登录</mt-button>
		</div>
		<div class="reg">
			<span>还没有账号？</span>
			<a href="/register">免费注册</a>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	import qs from 'qs'
	var jwt = require("jsonwebtoken")
	export default {
		name: 'login',
		data () {
			return {
				username: '',
				psd: ''
			}
		},
		methods: {
			login () {
				let message = ''
				message = this.username == '' ? message = '请输入用户名' : this.psd == '' ? message = '请输入密码' : message
				if (message != '') {
					Toast({
					  message: message,
					  position: 'bottom',
					  duration: 1000
					})
				} else {
					var params = {
						agreement: true,
						username: this.username,
						password: this.psd
					}
					fetch('http://10.9.171.35:3000/user/login', {
						method: 'post',
						headers:{
			        // 模拟form表单   键值对的方式提交数据
			        "Content-Type":"application/x-www-form-urlencoded"
			     	},
			     	body: qs.stringify(params)
					}).then(data=>data.json()).then(res=>{
						console.log(res)
						Toast({
						  message: res.msg,
						  position: 'bottom',
						  duration: 1
						})
						if(res.msgCode==1){
							window.localStorage.setItem("token",res.token)
							var secret = "abc"
							jwt.verify(res.token,secret,(err,decode)=>{
						    this.$router.push({name:"home",params:{username:decode.userInfo.username}})
						  })
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.loginBtn {
		background: #999;
		color: #fff;
		width: 90%;
		margin-left: 5%;
		margin-top: 20px;
	}
	.reg {
		text-align: center;
		margin-top: 20px; 
	}
</style>