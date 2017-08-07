<template>
    <div class="address">
        <headers hCont="新增收货地址"></headers>
        <ul class="info">
            <li class="name clearfix">
                <span>姓名</span>
                <input type="text" placeholder="最少两个字，最多12个字" v-model.trim="alias" @blur="handleName">
                <span class="red" v-show="aliasFlag">错误</span>
            </li>
            <li class="phone clearfix">
                <span>电话</span>
                <input type="text" placeholder="最少7位数" v-model.trim="phoneNum"  @blur="handlePhone">
                <span class="red" v-show="phoneFlag">错误</span>
            </li>
            <li class="province">
                <span>省份</span>
                <select name="sheng" id="">
                    <option value="">辽宁</option>
                    <option value="">广东</option>
                    <option value="">浙江</option>
                    <option value="">云南</option>
                </select>
            </li>
            <li class="province">
                <span>城市</span>
                <select name="sheng" id="">
                    <option value="">沈阳</option>
                    <option value="">广东</option>
                    <option value="">浙江</option>
                    <option value="">云南</option>
                </select>
            </li>
            <li class="province">
                <span>地区</span>
                <select name="sheng" id="">
                    <option value="">辽宁</option>
                    <option value="">广东</option>
                    <option value="">浙江</option>
                    <option value="">云南</option>
                </select>
            </li>
            <li class="dizhi clearfix">
                <span>地址</span>
                <input type="text" placeholder="最少两个字，最多12个字" v-model.trim="address" @blur="handleAddress"> 
                <span class="red" v-show="addressFlag">错误</span>
            </li>
            <li class="post clearfix">
                <span>邮编</span>
                <input type="text" placeholder="输入6位数" v-model.trim="mail" @blur="handleMail">
                <span class="red" v-show="mailFlag">错误</span>
            </li>
            <span class="button">保存并使用</span>
        </ul>
    </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
    name: 'deliveryAddress',
    components: {
        headers
    },
    data() {
        return {
           alias:'',
           phoneNum:'',
           address:'',
           mail:'',
           aliasFlag:false,
           phoneFlag:false,
           mailFlag:false,
           addressFlag:false
        }
    },
    methods:{
        handleName(){
            this.aliasFlag = /^[\u4e00-\u9fa5]{2,20}$/.test(this.alias) ? false:true
        },
        handlePhone(){
            this.aliasFlag = /^(13|15|18|14)[0-9]{9}$/.test(this.phoneNum) ? false:true
        },
        handleAddress(){
            this.addressFlag = /^[\u4e00-\u9fa5]{4,20}$/.test(this.address) ? false:true
        },
        handleMail(){
            this.mailFlag = /^\d{6}$/.test(this.mail) ? false:true
        }
    }
}
</script>
<style scoped lang="less">
.address .info {
    width: 710/100rem;
    margin: 0 auto;
    margin-top: 30/100rem;
}

.address .info li {
    height: 100/100rem;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    display: flex;
}

.address .info li span {
    width: 100/100rem;
    line-height: 100/100rem;
    margin-left: 10/100rem;
    // margin-right: 10/100rem;
    font-size: 30/100rem;
    float: left
}

.address .info li input {
    flex: 1;
    display: block;
    width: 400/100rem;
    height: 80/100rem;
    border: none;
    outline: none;
    float: left;
    line-height: 80/100rem;
    margin: auto 0;
}
.address .info .button {
    width: 516/100rem;
    height: 72/100rem;
    background: #44be92;
    display: block;
    margin: 0 auto;
    margin-top: 30/100rem;
    text-align: center;
    line-height: 72/100rem;
    border-radius: 8/100rem;
    font-size: 32/100rem;
    color: #fff;
    letter-spacing: 4/100rem;
}
select{
    flex: 1;
    // width: 100%;
    height:96/100rem; 
    outline: none;
    border: 0;
    // margin-left: 80/100rem;
    box-sizing: border-box;
}
option{
    outline: none;
    border: 0;
}
.red{
    color:red
}
</style>
