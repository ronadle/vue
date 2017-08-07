<template>
  <div class="healthData">
    <div class="healthHead">
    <headers hLeft="返回" hCont="健康信息"></headers>
    </div>
      <div class="healthContent">
        <div class="contentCon">
          <img src="../../images/healinfo_03.png" alt="">
        </div>
    </div>
    <div class="footList">
      <router-link :to="{path:'/baseInfo'}">
        <div class="jiChu tong">基础信息<span class="jianTou1"></span></div>
      </router-link>
      <router-link :to="{path:'/collectSick'}">
        <div class="tiJian tong">体检/慢性病管理<span class="jianTou2"></span></div>
      </router-link>
      <div class="jianKang">健康测试</div>
      <router-link :to="{path:'/test'}">
        <div class="tiZhi tong">我的体质：尚未测试<span class="jianTou3"></span></div>
      </router-link>
    </div>

    </div>
</template>

<script>
import headers from '../../components/common/header';
export default {
  name: 'healthData',
    components:{
      headers
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.healthData{
  width:100%;
  height:1334/100rem;
  background:#f1f1f1;
}
.healthHead{
    width:100%;
    height:88/100rem;
    background:#43bf92;
}

.healthContent{
  width:100%;
  height:236/100rem;
  margin:0 auto;
  box-sizing: border-box;
}
.borderHr{
  border-bottom:1px solid #f1f1f1;
}
.contentCon{
  width:115/100rem;
  height:115/100rem;
  text-align: center;
  margin:0 auto;
    padding-top: 62/100rem;

}
.contentCon img{
  display: block;
  width:115/100rem;
  height:115/100rem;
  text-align: center;

}
.footList{
    box-sizing: border-box;
  width: 100%;
  height: 238/100rem;
  
}
.jiChu{
  color: #313131;
  width: 690/100rem;
  height: 75/100rem;
  border-bottom: 1/100rem solid #f1f1f1;
  padding-left: 20/100rem;
  // padding-right: 20/100rem;
}
.tong{
  color: #313131;
    width:100%;
    height: 76/100rem;
    background: #fff;
    line-height: 76/100rem;
    padding-left: 20/100rem;
    padding-right: 20/100rem;
      box-sizing: border-box;
}
.jianKang{
  color: #313131;
  widows: 100%;
  height: 96/100rem;
  text-align: center;
  padding-top: 35/100rem;
    box-sizing: border-box;
}
// 箭头
.footList .jianTou1,.jianTou2,.jianTou3{
  display: block;
  width: 24/100rem;
  height:76/100rem;
  background: url("../../images/baseinfo_03.png")center no-repeat;
  padding-left: 45/100rem;
  background-size: 18/100rem 30/100rem;
  float: right;
}
</style>