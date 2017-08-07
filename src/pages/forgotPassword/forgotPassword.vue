<template>
  <div class="forgotPassword">
    <div class="forgotHead">
        <headers hLeft="返回" hCont="找回密码"></headers>
    </div>
    <div class="forgotInput">
        <input type="text" placeholder="请输入注册手机号">
        <input type="text"placeholder="输入验证码">
        <span class="authCode">获取验证码</span>
        <router-link :to="{path:'/resetPassword'}">
            <button class="forgotBtn">下一步</button>
        </router-link>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'forgotPassword',
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
.forgotHead{

    width:100%;
    height:88/100rem;
    background:#43bf92;
}
.forgotInput{
    width:604/100rem;
    height:156/100rem;
    
}
.forgotInput input{
    width:600/100rem;
    height:52/100rem;
    border-bottom:1px solid #43bf92;
    border-top:none; 
    border-left:none; 
    border-right:none; 
    margin:auto 65/100rem;
    margin-top:66/100rem;
    text-indent:2px;
    font-size:28/2px;
    position: relative;
    outline: none;
}
.forgotBtn{
    width:600/100rem;
    height:76/100rem;
    margin:auto 65/100rem;
    margin-top:66/100rem;
    text-align: center;
    border-radius:10/100rem;
    border:none; 
    background:#43bf92;
    color:#fff;
    font-size:34/2px;
}
.authCode{
    display: block;
    width:124/100rem;
    height:50/100rem;
    font-size:20/2px;
    background:#43bf92;   
    text-align:center;
    line-height:50/100rem;
    color:#fff;
    position: absolute;
    right:85/100rem;
    top:285/100rem;
}     
</style>