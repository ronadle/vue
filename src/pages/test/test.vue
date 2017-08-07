<template>
    <div class="container">
        <headers hLeft="返回" hCont="测试"></headers>
        <h1>测试说明</h1>
        <div class="text">
            <p>
                本测试分为简易版和专业版，简易版可以快 速测试你的身体状况，专业版可以更专业的 了解你的身体状况。
            </p>
        </div>
        <div class="btns">
            <router-link to="/expresseEition">
                <button class="btnLeft">简易版</button>
            </router-link>
            <router-link to="/profession">
                <button class="btnRight">专业版</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import headers from '../../components/common/header';
export default {
    name: "test",
    components:{
      headers
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="less">

h1{
    font-size: 17px;
    margin: 92/100rem auto;
    text-align: center;
    color: #313131;
    font-weight: normal;
}
.text{
    width: 498/100rem;
    height: 123/100rem;
    margin: 0 auto;
}
.text p{
    font-size: 13px;
    color: #313131;
    line-height: 45/100rem;
}
.btns{
    width: 100%;
    height: 90/100rem;
    padding: 0 50/100rem;
    // background: red;
    margin: 522/100rem auto;
    margin-bottom:0;
    display: block;
    box-sizing: border-box;
    
}
.btns .btnLeft{
    height: 90/100rem;
    width: 300/100rem;
    background: #43BF91;
    border: none;
    outline: none;
    font-size: 18px;
    color: white;
    float: left;
}
.btns .btnRight{
    height: 90/100rem;
    width: 300/100rem;
    background: #43BF91;
    border: none;
    outline: none;
    font-size: 18px;
    color: white;
    float: right;
}

</style>


