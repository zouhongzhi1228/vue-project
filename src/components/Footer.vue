<template>
  <div id="v-footer">
    <ul>
      <li v-for='(ele,index) in nav' :key='index' @click="changeStyle(ele.title)">
        <div>
          <img :src="isSlected == ele.title ? ele.url_one : ele.url"/>           
          <p :class="isSlected == ele.title ? 'active' : '' ">{{ele.title}}</p>		
				</div>
        <!-- <router-link to='ele.path'>
          <img :src="isSlected == ele.title ? ele.url_one : ele.url"/>           
          <p :class="isSlected == ele.title ? 'active' : '' ">{{ele.title}}</p>		
				</router-link> -->
      </li>
    </ul>
  </div>  
</template>
<script>
//vue 中图片地址的两种方式 一种使用require的方式导入，第三种是把图片丢到static中，因为vue的路径设置问题，凡是用到绝对路径的静态资源，一般都是放在static文件中的
// import url1 from '@/components/images/xiaotubiao_02.png'
// import url2 from '@/components/images/xiaotubiao_17.png'
export default {
  name: 'v-footer',
  data(){
    return {
      isSlected:'首页',
      nav: [ 
        {title: '首页', url: require('./images/xiaotubiao_02.png'), url_one: require('./images/xiaotubiao_17.png'),path: '/'}, 
        {title: '分类', url: require('./images/xiaotubiao_04.png'), url_one: require('./images/xiaotubiao_18.png'), path: '/classpage'}, 
        {title: '优惠专享', url: require('./images/xiaotubiao_06.png'), url_one: require('./images/xiaotubiao_19.png'), path: '/promotionpage'}, 
        {title: '购物车', url: require('./images/xiaotubiao_08.png'), url_one: require('./images/xiaotubiao_20.png'), path: '/cartpage'}, 
        {title: '我的', url: require('./images/xiaotubiao_10.png'), url_one: require('./images/xiaotubiao_21.png'), path: '/mainpage'} 
      ]
    }
  },
  methods:{
    changeStyle(title){ 
      this.isSlected = title 
      //下面的是对路由的处理，我们不使用router-link 的时候采用下面编程式路由一样能实现路由的跳转，因为使用router-link的时候页面是会刷新的，刷新的时候回返回默认值     
      switch (title) { 
        case '首页': this.$router.push('/') 
          break 
        case '分类': this.$router.push({
                      name:"分类",
                      params:{
                        name:'邹宏志',
                        age:'nineteen',
                        code:10011
                      }
                    }) 
          break 
        case '优惠专享': this.$router.push('/promotionpage/red') 
          break 
        case '购物车': this.$router.push('/cartpage') 
          break 
        case '我的': this.$router.push('/mainpage') 
          break 
      }
      //sessionStorage.setItem('isSlected', this.isSlected)   
    }
  },
  mounted(){ 
    console.log(this.$route)
    this.isSlected = this.$route.name 
  }
}
</script>
<style lang="scss">
.active{
  color: red;
}
#v-footer{
  width: 100%;
  height: .56rem;
    ul{
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      align-items:center;
      li{
        div{
          width: 100%;
          height: 100%;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          color: gray;
            img{
              margin-bottom: 8px;
                width: 0.2rem;
                height: 0.2rem;
            }
          }
      }
    } 
}

</style>
