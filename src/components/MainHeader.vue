<template>
<div id="main-header">
  <div id="main-header-title">
    <div>我的丝芙兰</div>
    <div @click="siginOut">{{right}}</div>
  </div>
  <router-link to="/mainset" id="main-header-bottom"> 
    <img src="./images/userImg.png" alt="">
    <div>{{tit}}</div>
    <div class="iconfont icon-you"></div>
  </router-link>
</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name:'mainheader',
		data(){
			return {
				right:'登录'
			}
		},
		props: {
			tit: {
				type: String,
				default: '未登录'
			}
		},
		computed:{
			...mapGetters('main',[])
		},
		methods:{
			...mapActions('main',[]),
			siginOut(){
				var token = window.localStorage.getItem("token")
				if(this.right=="登录"){
					this.$router.push({path:'/login'})
				}else{
					location.reload()
				}
				if(token){
					this.right = "登录"
					window.localStorage.removeItem("token")
				}
			}
		},
		mounted(){
			var token = window.localStorage.getItem("token")
			if(token){
				this.right = "退出"
			}else{
				this.right = "登录"
			}
		}
	}
</script>
<style lang="scss" scoped>
#main-header{
  width: 100%;
  height: 1.64rem;
  #main-header-title{
    width: 100%;
    height: .44rem;
    position: relative;
    text-align: center;
    div:nth-child(1){
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: .44rem;
      font-size: 19px;
    }
    div:nth-child(2){
      width: 34px;
      height: .44rem;
      font-size: 17px;
      line-height: .44rem;
      color: #999999;
      position: absolute;
      right: 12px;
      top: 0;
    }
  }
  #main-header-bottom{
    width: 100%;
    height: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: black;
    color: white;
    img:nth-child(1){
      width: .7rem;
      height: .7rem;
      margin-left: .3rem;
    }
    div:nth-child(2){
      flex: 1;
      font-size: 17px;
      margin-left: 13px;
      text-align: left;
      font-weight: 400;
    }
    div:nth-child(3){
      width: .17rem;
      height: .17rem;
      margin-right: 14px;
    }
  }
}
</style>