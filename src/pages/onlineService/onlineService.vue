<template>
    <div class="onlineService">
        <headers hLeft="返回" hCont="在线客服" hRight="我的反馈"></headers>
        <div class="container">
            <ul>
                <li class="mySay clearfix">
                    <img src="../../images/onlineser_03.png" alt="">
                    <span></span>
                </li>
                <li class="serviceSay clearfix">
                    <img src="../../images/onlineser_11.png" alt=""> 
                    <span></span>
                </li>
                <li class="mySay clearfix">
                    <img src="../../images/onlineser_03.png" alt="">
                    <span></span>
                </li>
                <li class="serviceSay clearfix">
                    <img src="../../images/onlineser_11.png" alt=""> 
                    <span></span>
                </li>
            </ul>
        </div>
        <div class="footer clearfix">
            <img class="sound" src="../../images/onlineser_22.png" alt="">
            <input type="text">
            <img class="select" src="../../images/onlineser_19.png" alt="">
        </div>
    </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
  name: 'onlineService',
  components:{
      headers
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
  .onlineService{
      background:#f1f1f1;
      width:100%;
      height:1334/100rem;
  }
  
  .container img{
      width:115/100rem;
      height:115/100rem; 
  }
  .mySay{
      width:720/100rem;
      margin-top:94/100rem;
      margin-left:30/100rem;
  }
  .mySay img{
      float:left;
  }
  .mySay span{
      background:url('../../images/onlineser_06.png') no-repeat 0;
      width:261/100rem;
      height:90/100rem;
      float:left;
      margin-top:20/100rem;
      background-size:261/100rem 90/100rem;
  }
  .serviceSay{
      width:720/100rem;
      margin-top:138/100rem;
      margin-right:30/100rem;
  }
  .serviceSay img{
      float:right;
  }
  .serviceSay span{
      background:url('../../images/onlineser_14.png') no-repeat 0 ;
      width:313/100rem;
      height:90/100rem;
      float:right;
      margin-top:10/100rem;
      background-size:313/100rem 90/100rem;
  }
  .footer{
    width:100%;
    height:98/100rem;
    background:#44be92;
    position: fixed;
    bottom:0;
    padding-top:32/100rem;
  }
  .footer .sound{
    width:60/100rem;
    height:60/100rem;
    float:left;
    margin-left:48/100rem;
  }
  .footer input{
    background:#44be92;
    width:510/100rem;
    height:60/100rem;
    float:left;
    border:none;
    outline:none;
    border-bottom:1px solid #fff;
    margin-left:12/100rem;

  }
  .footer .select{
    width:60/100rem;
    height:60/100rem;
    float:right;
    margin-right:42/100rem; 
  }
</style>