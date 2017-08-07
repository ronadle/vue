<template>
  <div class="dailyRecipes">
    <headers hLeft="返回" hCont="每日食谱"></headers>
    <div class="container">
      <ul>
        <div class="person">爸爸</div>
        <li v-for="(item,index) in recipes" :key="index" :class="{lunch:item.flag}">
          <img :src="item.img" :alt="item.tip">
          <span>{{item.tip}}</span>
        </li>
        <div class="person">妈妈</div>
        <li v-for="(item,index) in recipes" :key="index" :class="{lunch:item.flag}">
          <img :src="item.img" :alt="item.tip">
          <span>{{item.tip}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'dailyRecipes',
    components:{
      headers
    },
    data(){
      return{
        recipes:[
          {
            img:require('../../images/can_03.png'),
            tip:'早餐',
          },
          {
            img:require('../../images/can_04.png'),
            tip:'午餐',
            flag:true
          },
          {
            img:require('../../images/can_05.png'),
            tip:'晚餐',
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">
.container{
  width: 650/100rem;
  margin:0 auto;
}
ul{
  .person{
    background:#43bf92;
    line-height: 50/100rem;
    width: 120/100rem;
    color:#fff;
    text-align: center;
    font-size: 26/2px;
    margin: 10/100rem 0;
    border-radius: 12/20rem;
  }
  li{
    position: relative;
    color:#fff;
    height: 152/100rem;
    overflow: hidden;
    img{
      width:100%;
      height: 152/100rem;
    }
    span{
      position: absolute;
      font-size: 18px;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }
  .lunch{
    margin: 24/100rem 0;
  }
}
</style>