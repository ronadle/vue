<template>
    <div class="container">
        <div class="tops">
            <div class="cancel" @click="goBack">取消</div>
            <router-link :to="{path:'/register'}">
                <div class="register">快速注册</div>
            </router-link>
        </div>
        <div class="logo">
            <img src="../../images/login (2).png" alt="">
        </div>
        <div class="loginCon">
            <div class="text">
                <input type="text" placeholder="手机号" v-model="phoneNum">
            </div>
             <div class="pwd">
                <input type="password" placeholder="密码" v-model="password">
            </div> 
            <button class="btn" @click="login">登录</button>
        </div>
        <div class="forget">
            <router-link :to="{path:'/forgotPassword'}">
                <span>忘记密码？</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return{
            phoneNum:'15896362365',
            password:'123'
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        login(){
            if(this.phoneNum == '15896362365' && this.password == '123'){
                window.location.href="#/myPages";
            }else{
                alert('默认帐户名为15896362365,密码为123');
            }
        }
    }
}
</script>
<style scoped lang="less">
.container{
    background:#fff;
    height:1334/100rem;
}
.tops{
    padding: 0 50/100rem;
    margin: 46/100rem;
}
.cancel{
    float: left;
    font-size: 15px;
    color: #3DB389;
}
.register{
    float: right;
    font-size: 15px;
    color: #3DB389;
}
.logo{
    height: 320/100rem;
    // background: red;
    line-height: 320/100rem;
    text-align: center;
    vertical-align: middle;
}
.logo img{
    margin: 0 auto;
    width: 183/100rem;
    margin-top: 20/100rem;
    margin-left: 30/100rem;
}
.text{
    width: 600/100rem;
    height: 52/100rem;
    margin: 0 auto;
    border-bottom: 1/100rem solid #3DB389; 
    margin-top: 210/100rem;
}
.text input{
    width: 540/100rem;
    height: 50/100rem;
    float: right;
    border: 0;
    outline: none;
    text-indent: 40/100rem;
    background: url("../../images/login (3).png") no-repeat 80/100rem center;
    background-size: 25/100rem;
    padding-left: 83/100rem;
}
.pwd{
    width: 600/100rem;
    height: 52/100rem;
    margin: 0 auto;
    border-bottom: 1/100rem solid #3DB389; 
    margin-top: 66/100rem;
}
.pwd input{
    width: 540/100rem;
    height: 50/100rem;
    float: right;
    border: 0;
    outline: none;
    text-indent: 40/100rem;
    background: url("../../images/login (1).png") no-repeat 80/100rem center;
    background-size: 25/100rem;
    padding-left: 83/100rem;
}
.btn{
    width: 600/100rem;
    height: 76/100rem;
    background: #43BF91;
    border-radius: 15/100rem;
    color: white;
    line-height: 70/100rem;
    display: block;
    margin: 86/100rem auto;
    text-align: center;
    outline: none;
}
.forget{
    width: 600/100rem;
    height: 20/100rem;
    margin: -70/100rem auto;
}
.forget span{
    float: right;
    color: #1F1F1F;
    font-size: 14px;
}
</style>


