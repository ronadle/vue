<template>
    <div class="container">
       <headers hLeft="返回" hCont="帮助和反馈" hRight="我的反馈"></headers>
        <div class="search">
            <input type="search" class="inpSearch">
        </div>
        <div class="listText">
            <ul class="lists">
                <li class="cjwt">
                    常见问题
                </li>
                <li class="slts">
                    <div></div>
                    安心食疗的特色是什么？
                    <img src="../../images/fmfr_10.png" alt="">
                </li>
                <li class="rhfk">
                    <div></div>
                    对于不感兴趣或质量较差的文章应该如何反馈？
                    <img src="../../images/fmfr_10.png" alt="">
                </li>
                <li class="rhlx">
                    <div></div>
                    如何联系你们？
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headers from '../../components/common/header';
export default {
    name: "helpAndFeedback",
    components: {
        headers
    },
    data() {
        return{

        }

    }
}
</script>

<style scoped lang="less">
.container{
    background: #f1f1f1;
    height:1334/100rem;
}

* {
    margin: 0;
    padding: 0;
}

.topList {
    width: 100%;
    height: 88/100rem;
    background: #43BE91;
}

.inner {
    height: 88/100rem;
    margin-left: 20/100rem;
    margin-right: 20/100rem;
    background: url("../../images/order (2).png") no-repeat 0 center;
    background-size: 21/100rem;
    line-height: 88/100rem;
    position: relative;
}

.backs {
    font-size: 15px;
    color: white;
    padding-left: 36/100rem;
    float: left;
}

.help {
    // text-align: center;
    line-height: 88/100rem;
    color: white;
    font-size: 18px;
    position: absolute;
    margin-left: 50%;
    transform: translateX(-50%); // margin-left: 20/100rem;
}

.my {
    font-size: 16px;
    float: right;
    color: white;
}

.search {
    width: 100%;
    height: 115/100rem;
    text-align: center;
    line-height: 115/100rem;
    vertical-align: middle;
    padding-top: 38/100rem;
    box-sizing: border-box;
}

.inpSearch {
    width: 660/100rem;
    height: 45/100rem;
    border-radius: 20/100rem;
    border: none;
    outline: none;
    text-indent: 20/100rem;
    background: url("../../images/fangdajing.png") no-repeat 300px center;
    background-color: white;
    background-size: 29/100rem;
    margin: 0 auto;
    display: block;
}

.listText {
    background: white;
}

.lists {
    margin: 0 auto;
    padding: 0 40/100rem;
}

.lists li {
    list-style: none;
    width: 100%;
    height: 76/100rem;
    background: white;
    font-size: 15px;
    color: #6F6F6F;
    line-height: 76/100rem;
    border-bottom: 1/100rem solid #f1f1f1;
    text-indent: 15/100rem;
    position: relative;
}

.lists li>div {
    width: 4/100rem;
    height: 4/100rem;
    background: #303030;
    position: absolute;
    top: 36/100rem;
}

.slts {
    position: relative;
}

.slts img {
    width: 12/100rem;
    position: absolute;
    right: 0;
    top: 28/100rem;
}

.rhfk {
    position: relative;
}

.rhfk img {
    width: 12/100rem;
    position: absolute;
    right: 0;
    top: 28/100rem;
}
</style>


