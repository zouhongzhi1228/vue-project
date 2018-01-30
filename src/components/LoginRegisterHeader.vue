<template>
	<div>
		<div class="back">
				<a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui"></a>
		</div>
		<div>
			<h2 class="register">{{tit}}</h2>
		</div>
	</div>
</template>

<script>
export default {
  name: 'l-r-header',
  props: {
		tit: {
			type: String,
			default: '头部'
		}
	}
}
</script>

<style scoped>
	.back {
		height: 44px;
		line-height: 44px;
	}
	.back a {
		margin-left: 12px;
		font-size: 20px;
	}
	.register {
		font-size: 30px;
    color: #000000;
    margin: 28px 0 40px 12px;
	}
</style>
