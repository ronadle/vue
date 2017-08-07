<template>
  <div class="dailyTest">
    <headers hLeft="返回" hCont="肺部测试"></headers>
    <div class="testImg">
      <img src="../../images/nanhai.png" alt="">
    </div>
    <p class="info"><span>39432</span>人参与了测试</p>
    <div class="startTest">
      <router-link to="/lungTest">
        <div class="startText">开始测试</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'dailyTest',
    components:{
      headers
    },
    data(){
      return{
      }
    }
  }
</script>
<style scoped lang="less">
.testImg{
  img{
    height:824/100rem;
  }
}
.info{
  text-align: center;
  color:#313131;
  margin-top: 180/100rem;
  font-size: 26/2px;
  span{
    color:#ff0505;
  }
}
.startTest{
  color:#fff;
  text-align: center;
  line-height:90/100rem;
  width:600/100rem;
  margin: 20/100rem auto;
  font-size: 18px;
  .startText{
    background:#43bf92;
    width:100%;
    height:90/100rem;
    border-radius: 10/100rem;
    color:#fff;
  }
}
</style>