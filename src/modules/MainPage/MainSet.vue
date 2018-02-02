<template>
	<div id="bigBox">
		<div id="title">
			<img @click='goBack' src="http://s1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2017/11/icon/arrow.png" alt="">
			<div>个人信息</div>
		</div>
		<form>
				<div id="upload">
					<!-- upload里面的name属性是字段名，值是根据后端上传图片提供的名字，也是你数据库里面的键，跟username，password一个意思 name="mainPic"-->
					<div id="upload-name">头像</div>
					<div id="upload-img">
						<el-upload
							class="avatar-uploader"
							action="http://10.9.171.5:3000/api/setUserPhoto"
							name="userPhoto"
							:show-file-list="true"	:before-upload="beforeAvatarUpload"
							:on-preview="handlePictureCardPreview"
							:on-success="handleAvatarSuccess"
							:on-remove="handleRemove">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</div>
				</div>			
			<div class="user-component user-first">
				<div>昵称</div>
				<input type='text' v-model="userInfo.userNickname">
			</div>
			<div class="user-component">
				<div>手机<i>*</i></div>
				<input type='text' v-model="userInfo.userPhone">
			</div>
			<div class="user-component">
				<div>性别<i>*</i></div>
				<input type='text' v-model="userInfo.userSex">
			</div>
			<div class="user-component">
				<div>生日<i>*</i></div>
				<input type='text' v-model="userInfo.userBirth">
			</div>
			<div class="user-component">
				<div>邮箱</div>
				<input type='text' v-model="userInfo.userEmail">
			</div>
			<div class="user-component">
				<div>姓名/称谓<i>*</i></div>
				<input type='text' v-model="userInfo.userName">
			</div>
			<div class="user-component">
				<div>收货地址</div>
				<input type='text' v-model="userInfo.userAddress">
			</div>
			<div class="user-component">
				<div>更改登录密码</div>
				<input type='text' v-model="userInfo.userPassword">
			</div>
			<div class="btn">
				<button @click="submitForm">提交</button>
				<button @click="resetForm">重置</button>
			</div>
		</form>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	import axios from 'axios'
	import qs from 'qs'
	export default {
		name:'mainset',
		data(){
			return {
				imageUrl:'',
				userInfo:{
					userName:'',
					userSex:'',
					userPhone:'',
					userEmail:'',
					userNickname:'',
					userBirth:'',
					userAddress:'',
					userPhoto:''
				}
			}
		},
		computed:{
			...mapGetters('homedata',[
				
			])
		},
		methods:{
			...mapActions('homedata',[
			]),
			goBack(){
				this.$router.go(-1)
			},
			//upload图像上传
			handleAvatarSuccess(res, file){//文件上传成功时的钩子
			//console.log(res.imgSrc.replace('public',''))
				this.userInfo.userPhoto = 'http://localhost:3000'+res.imgSrc.replace('public','')
				this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {//上传文件之前的钩子，参数为上传的文件，若返回false或者返回Promise且被reject，则停止上传
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
			handleRemove(file, fileList) {//文件列表移除文件时的钩子
        console.log(file, fileList);
      },
			handlePictureCardPreview(file) {//点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
			submitForm() {
				var params = qs.stringify({...this.userInfo,start_time: Math.round(new Date().getTime()/1000)})
        axios.post("http://localhost:3000/api/setUserInfo",params).then(res=>{
					console.log(res.data.data)
					if(res.data.data==1){
						alert('个人信息保存成功')
						this.$router.push('mainpage')
					}
        })
      },
      resetForm(formName) {
      }
		},
		mounted(){
		}
	}
</script>

<style lang="scss">
#bigBox{
	width: 100%;
	height: 100%;
	#title{
		width: 100%;
		height: .44rem;
		position: relative;
		text-align: center;
		border-bottom: 1px solid #DDDDDD;
		img{
			width: .3rem;
			height: .3rem;
			position: absolute;
			left: .07rem;
			top: .07rem;
		}
		div{
			width: 100%;
			height: 100%;
			line-height: .44rem;
			font-size: 18px; 
		}
	}
	form{
		width: 100%;
		.user-first{
			border-top: 1px solid #DDDDDD;
		}
		.btn{
			width: 100%;
			height: .55rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			button{
				width: 65px;
				height:40px;
			}
			button:nth-child(1){
				margin-right: 15px;
			}
		}
		.user-component{
			width: 100%;
			height: .555rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;	
			margin-left: 10px;
			border-bottom: 1px solid #DDDDDD;
			div:nth-child(1){
				height: .555rem;
				line-height: .555rem;
				text-align: center;
				font-size: 15px;
				padding-left: 15px;
				i{
					color: red;
					font-size: 20px;
					text-align: center;
				}
			}
			input{
				flex:1;
				height:100%;
				border: none;
				padding-left: 20px;
			}
		}
		#upload{
			width: 100%;
			height: .96rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			#upload-name{
				margin-left: 10px;
				height: .96rem;
				line-height: .96rem;
				text-align: center;
				font-size: 15px;
				padding-left: 15px;
			}
			#upload-img{
				width: .6rem;
				height: .6rem;
				margin-right: 12px;
				.avatar-uploader .el-upload {
				border: 1px solid black;
				border-radius: 6px;
				cursor: pointer;
				position: relative;
				overflow: hidden;
				}
				.avatar-uploader .el-upload:hover {
					border-color: #409EFF;
				}
				.avatar-uploader-icon {
					font-size: 28px;
					color: #8c939d;
					width: 60px;
					height: 60px;
					line-height: 60px;
					text-align: center;
				}
				.avatar {
					width: 60px;
					height: 60px;
					display: block;
				}
			}
		}
	}
}
</style>