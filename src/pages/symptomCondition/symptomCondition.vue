<template>
  <div class="symptomCondtion">
     <ul class="container">
       <router-link :to="{path:'/productDetails/'+item.id}" v-for="(item,index) in productList" :key="index">
        <li>
            <p>根据你的 <b>{{item.health}}</b> 推荐</p>
            <div class="cont">
              <img :src="item.img" :alt="item.name">
              <div class="product">
                <h2>{{item.name}}</h2>
                <p><i>{{item.tipsOne}}</i><i>{{item.tipsTwo}}</i></p>
                <span>{{item.price}}</span>
              </div>
            </div>
        </li>
       </router-link>
     </ul>
  </div>
</template>
<script>
  export default{
    name:'dailyRecord',
    created(){
      let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
      let url = flag ? "/personal/sysptomRecommend" : '/personalData.json';
      this.$axios.get(url).then(res=>{
        this.productList= res.data.sysptomRecommend;
      })
    },
    data(){
      return{
        productList:[]
      }
    }
  }
</script>
<style lang="less" scoped>
.container{
  margin:0 20/100rem;
  border-top:1px solid #d1d2d1;
  li{
    padding:20/100rem 0;
    &>p{
      background:url(../../images/deng.png) no-repeat;
      background-size:20/100rem 32/100rem;
      font-size: 12px;
      text-indent: 40/100rem;
      margin: 10/100rem 0;
      color:#353535;
      b{
        font-weight: 700;
      }
    }
    .cont{
      display: flex;
      img{
        width:283/100rem ;
        height:188/100rem;
        margin-right: 36/100rem;
      }
      .product{
        color: #6d6d6d;
        padding:8/100rem 0;
        h2{
          font-size:18px;
        }
        p{
          margin:28/100rem 0;
          i{
            padding-right: 8/100rem;
          }
        }
        span{
            color:#d16c34;
            font-size: 15px;
        }
      }
    }
  }
}
</style>

