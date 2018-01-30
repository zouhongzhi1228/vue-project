<template>
<div id="bigBox">
分类页
{{this.$route.params.name}}
{{this.$route.params.age}}
<v-footer></v-footer>
</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'classpage',
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
		
		}
	}
</script>

<style lang="scss" scoped="scoped">

</style>