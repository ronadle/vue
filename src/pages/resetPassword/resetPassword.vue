<template>
  <div class="reset">
    <headers hLeft="返回" hCont="重置密码"></headers>
    <form  class="clearfix" action="">
        <input type="password" placeholder="请输入新密码">
        <input type="password" placeholder="确认密码">
        <input class="identify" type="text" placeholder="验证码">
        <span>1234</span>
        <i>换一张，看不清</i>
        <input class="submit" type="submit" value="完成">
    </form>
  </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
  name: 'resetPassword',
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
  .reset{
      width:100%;
      color:#999;
  }
  .reset form{
      margin:0 auto;
      width:600/100rem;
  }
  .reset input{
      display:block;
      width:600/100rem;
      height:43/100rem;
      border:none;
      outline:none;
      border-bottom:1px solid #44be92;
      margin-top:80/100rem;
  }
  .reset .identify{
      width:152/100rem;
      float:left;
  }
  .reset span{
      width:126/100rem;
      height:50/100rem;
      background:#44be92;
      margin-right:14/100rem;
      margin-top:80/100rem;
      float:left;
      text-align:center;
      line-height:50/100rem;
  }
  .reset i{
      font-style:normal;
      margin-top:100/100rem;
      float:left;
  }
  .reset .submit{
      width:602/100rem;
      height:74/100rem;
      display:block;
      margin-top:90/100rem;
      background:#44be92;
      border-radius:10/100rem;
      float:left;
      color:#f1f1f1;
      font-size:36/100rem;
  } 
</style>
