<template>
    <div class="register">
        <div class="top">
            <span class="cancel" @click="goBack">取消</span>
            <span class="denglu" >登录</span>
        </div>
        <img class="registerLogo"src="../../images/reg_03.png" alt="">
        <form  class="clearfix" name="register">
            <input class="cellphone" type="password" placeholder="手机号">
            <input class="identify" type="text" placeholder="输入验证码">
            <span>获取验证码</span>
            <input class="submit" type="submit" value="注册">
        </form>
        <div class="agreement">
            <img src="../../images/reg_14.png" alt="">
            <span>我已阅读并同意</span>
            <i>《用户协议》</i>
        </div>
    </div>
</template>
<script>
export default {
  name: 'register',
  components:{
  },
  data () {
    return {
    }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped lang="less">
  .register{
      width:100%;
      height:1334/100rem;
  }
  .register .registerLogo{
      width:183/100rem;
      height:170/100rem;
      display:block;
      margin:0 auto;
      margin-bottom:60/100rem;
  }
  .register .top{
      height:110/100rem;
      margin-bottom:40/100rem;
  }
  .register .top span{
      height:110/100rem;
      color:#44be92;
      font-size:30/100rem;
      line-height:110/100rem;
      letter-spacing:8/100rem;
  }
  .register .top .cancel{
      float:left;
      margin-left:50/100rem;
  }
  .register .top .denglu{
      float:right;
      margin-right:50/100rem;
  }
  .register form{
      margin:0 auto;
      width:600/100rem;
  }
  .register form input{
    width:600/100rem;
    height:60/100rem;
    border:none;
    outline:none;
    border-bottom:1px solid #44be92;
    float:left;
    margin-top:50/100rem;
  }
  .register form span{
      width:150/100rem;
      height:54/100rem;
      display:block;
      float:left;
      font-size:26/100rem;
      margin-top:62/100rem;
      background:#44be92;
      color:#f1f1f1;
      line-height:54/100rem;
      text-align:center;
  }
  .register form .identify{
    width:445/100rem;
  }
  .register form .submit{
      border:0;
      background:#44be92;
      border-radius:8/100rem;
      height:72/100rem;
      color:#fff;
      font-size:30/100rem;
      letter-spacing:10/100rem;
      margin-top:90/100rem;
  }
  .agreement{
      font-size:26/100rem;
      width:600/100rem;
      margin:20/100rem auto;
  }
  .agreement img{
      width:24/100rem;
      height:24/100rem;
      margin-bottom:5/100rem;
  }
  .agreement span{
      color:#757575;
      padding-left:8/100rem;
  }
  .agreement i{
      color:#96fecd;
      font-style:normal;
  }
  
</style>