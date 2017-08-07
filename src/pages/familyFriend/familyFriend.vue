<template>
  <div class="container">
      <headers hLeft="返回" hCont="家人和朋友" hRight="添加"></headers>
      <div class="list">
          <ul>
              <li class="listLi clearfix">
                  <img src="../../images/fmfr_03.png" alt="">
                  <div class="inner ">
                      <div class="innerLeft">爸爸</div>
                      <div class="innerRight">平和质</div>
                      <router-link :to="{path:'/constitution'}">
                        <i></i>
                      </router-link>
                  </div>
                  
              </li>
              <li class="listLi clearfix">
                  <img src="../../images/fmfr_07.png" alt="">
                  <div class="inner ">
                      <div class="innerLeft">妈妈</div>
                      <div class="innerRight">尚未测试</div>
                      <router-link :to="{path:'/notTestIll'}">
                        <i></i>
                      </router-link> 
                  </div>
              </li>
          </ul>
      </div>

  </div>
</template>
<script>
import headers from '../../components/common/header';
export default {
  name:"familyFriend",
  components: {
        headers
    },
  data(){
    return{
        
    }
  }
}
</script>
<style scoped lang="less">
.container {
    height: 1334/100rem;
    width: 100%;
    background: #f1f1f1;
}
.list{
    margin-top: 28/100rem;
    background: #fff;
}
.list ul li{
    height:100/100rem;
    margin: 0 30/100rem;
    line-height: 100/100rem;
    border-bottom: 2/100rem solid #e7e7e7;
}
.listLi img{
    width: 80/100rem;
    float: left;
    margin-top: 10/100rem;
}
.inner i{
    float: right;
    width: 25/100rem;
    height: 100/100rem;
    background:url("../../images/baseinfo_03.png") no-repeat 0 center;
    background-size: 12/100rem;
    position: absolute;
    right: 28/100rem;
}
.inner{
    width: auto;
    background: forestgreen;
    // margin-left: 18/100rem;
}
.inner .innerLeft{
    width: 130/100rem;
    float: left;
     margin-left: 18/100rem;
}
.inner .innerRight{
    width: 140/100rem;
    float: right;
    margin-right: 88/100rem;
}
</style>


