<template>
  <div class="testResult">
    <headers hLeft="关闭" hCont="肺部测试"></headers>
    <div class="resultText">
      <h3>测试结果</h3>
      <p>高度危险！您目前属于高危阶段，需要引起重视，建议
在医生指导下定期复查或体检。在体检时建议加做胸部
低剂量螺旋CT。做到有效预防，定期筛查。</p>
      <span>结果仅供参考</span>
    </div>
    <div class="recommend">
      <h2>为您推荐:</h2>
      <ul class="clearfix">
        <router-link :to="{path:'/'+item.path+'/'+(index+1)}" v-for="(item,index) in testRecommend" :key="index">
          <li>
              <img :src="item.img" :alt="item.name">
              <i>{{item.name}}</i>
          </li>
           </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'testResult',
    components:{
      headers
    },
    created(){
      if(this.$axios.defaults.baseURL!== '/net/axsl/static'){
          this.$axios.get("/home/testRecommend").then(res => {
              this.testRecommend = res.data.testRecommend
          })
      }else{
          this.$axios.get("/homeData.json").then(res => {
              this.testRecommend = res.data.testRecommend
          })
      }  
    },
    data(){
      return{
            "testRecommend": []
      }
    }
  }
</script>
<style scoped lang="less">
.resultText{
  text-align: center;
  padding:100/100rem 110/100rem;
  border:solid #f1f1f1;
  border-width: 14/100rem 0;
  font-size: 12px;
  h3{
    font-weight: normal;
    margin-bottom: 28/100rem;
    font-size: 14px;
  }
  p{
    text-align: left;
    line-height: 36/100rem;
    margin-bottom: 120/100rem;
  }
  span{
    display: block;
    padding:30/100rem 0;
    color:#757575;
    position:relative;
    &:before,&:after{
      content: '';
      position: absolute;
      top:50%;
      display: block;
      height: 1px;
      background:#757575;
      width:134/100rem;
    }
    &:before{
      left:30/100rem;
    }
    &:after{
      right:30/100rem;
    }
  }
}
.recommend{
  margin:0 20/100rem;
  h2{
    margin:20/100rem 0 14/100rem;
    font-size: 14px;
    font-weight: normal;
  }
  ul{
    margin-left:48/100rem;
    li{
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      width:300/100rem;
      margin-right: 24/100rem;
      margin-bottom: 32/100rem;
      img{
        width:300/100rem;
        height:132/100rem;
        float: left;
      }
      i{
        margin-top:16/100rem;
        font-size: 12px;
        color:#000;
      }
    }
  }
}
</style>