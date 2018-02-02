<template>
  <div id="v-header">
    <div id='v-header-top'>
      <div>
        <a href="javascript:;">
          <img src="./images/font_sprite_03.png">
        </a>
      </div>
      <div>
        <img src="./images/SEPHORA_black.png">
      </div>
      <div>
        <a href="/login">{{tit}}</a>
      </div>
    </div>
    <div id='v-header-bottom'>
      <div class="v-b-one"> 
          <img src="./images/search.png" alt="">       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-header',
  props: {
		tit: {
			type: String,
			default: '登录'
		}
	}
}
</script>
<style lang='scss' scoped>
#v-header{
  height: 0.8rem;
  width: 100%;
  #v-header-top{
    width: 100%;
    height: 0.44rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div:nth-child(1){
      float: left;
      width: 4px;
      height: 21px;
      margin: 0 10px;
      a{
        width: 100%;
        height:100%;
        img{
          width: 100%;
          height:100%;
        }
      }          
    }
    div:nth-child(2){
      flex: 1;
      width: 48px;
      height: 0.44rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    div:nth-child(3){
      width: 48px;
      height: 0.24rem;
      a{
        width: 100%;
        height:100%;
        padding-left: 8px;
        line-height: 0.24rem;
        text-align: center;
        color: black;
      }
    }
  }
  #v-header-bottom{
    width: 100%;
    height: 0.3rem;  
    .v-b-one{
      margin: 0 10px;
      width: auto;
      height: 100%;
      border-radius: 15px;
      background: #EEEEEE;
      padding-left: 13px;
      line-height: 0.3rem;
      img{
        width: 21px;
        height: 21px;
      }
    }
  }
}
</style>
