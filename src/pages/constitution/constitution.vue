<template>
  <div class="tizhi">
    <headers hLeft="返回" hCont="姓名"></headers>
    <div class="img">
      <img src="../../images/add_03.png"></img>
    </div>
    <div class="list">
      <div class="icon clearfix">
        <div class="iconLeft">
          <img src="../../images/xstz_07.png" alt="">
          <span>显示体质</span>
        </div>
        <div class="iconRight clearfix">
          <span>测试于<i>xx</i>天前</span>
          <img src="../../images/baseinfo_12.png" alt="">
        </div>
      </div>
      <div class="jianjie"><span>显示体质简介</span></div>
      <div class="chongce"><span>重新测试体质</span></div>
      <div class="manxin clearfix">
        <div class="manxinLeft">
          <img src="../../images/xstz_11.png" alt="">
            <span>慢性病</span>
        </div>
        <div class="manxinRight clearfix">
          <span>已选择<i>x</i>项</span>
          <router-link to="/collectSick">
            <img src="../../images/baseinfo_12.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from '../../components/common/header'
export default {
  name: 'constitution',
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
  *{
    margin:0;
    padding:0;
  }
  .tizhi{
    width:100%;
    height:1334/100rem;
    background:#f1f1f1;
  }
  .tizhi .img{
    width:100%;
    height:268/100rem;
    background:#fff;
    overflow:hidden;
    border-bottom:16/100rem solid #f1f1f1;    
  }
  .tizhi .img img{
    width:115/100rem;
    height:115/100rem;
    display:block;
    margin:72/100rem auto;
  }
  .list{
    background:#fff;
    padding: 0 20/100rem;
  }
  .list .icon{
    border-bottom:1px solid #f1f1f1;
  }
  .list .icon .iconLeft{
    float:left;
    height:102/100rem;
    margin:auto 0;
  }
  .list .icon .iconLeft img{
    width:52/100rem;
    height:58/100rem;
    display:block;
    float:left;
    margin-top:22/100rem;
    margin-right:20/100rem;
  }
  .list .icon .iconLeft span{
    font-size:30/100rem;
    line-height:102/100rem;
    display:block;
    float:left;
    
  }
  .list .icon .iconRight{
    float:right;
    height:102/100rem;
    margin-right:14/100rem;
  }
  .list .icon .iconRight span{
    font-size:26/100rem;
    color:#b3b3b3;
    display:block;
    line-height:102/100rem;
    float:left;
    margin-right:20/100rem;
  }
  .list .icon .iconRight img{
    display:block;
    width:14/100rem;
    height:26/100rem;
    margin:38/100rem 0;
  }
  .jianjie{
    height:98/100rem;
    border-bottom:1px solid #f1f1f1;
  }
  .jianjie span{
    font-size:30/100rem;
    line-height:98/100rem;
    display:block;
  }
  .chongce{
    height:98/100rem;
    border-bottom:1px solid #f1f1f1;
  }
  .chongce span{
    font-size:30/100rem;
    line-height:98/100rem;
    display:block;
  }
  .list .manxin{
    border-bottom:1px solid #f1f1f1;
  }
  .list .manxin .manxinLeft{
    float:left;
    height:102/100rem;
    margin:auto 0;
  }
  .list .manxin .manxinLeft img{
    width:52/100rem;
    height:58/100rem;
    display:block;
    float:left;
    margin-top:22/100rem;
    margin-right:20/100rem;
  }
  .list .manxin .manxinLeft span{
    font-size:30/100rem;
    line-height:102/100rem;
    display:block;
    float:left;
    
  }
  .list .manxin .manxinRight{
    float:right;
    height:102/100rem;
    margin-right:14/100rem;
  }
  .list .manxin .manxinRight span{
    font-size:26/100rem;
    color:#b3b3b3;
    display:block;
    line-height:102/100rem;
    float:left;
    margin-right:20/100rem;
  }
  .list .manxin .manxinRight img{
    display:block;
    width:14/100rem;
    height:26/100rem;
    float:left;
    margin:38/100rem 0;
  }
</style>