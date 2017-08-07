<template>
    <div class="container">
        <headers hLeft="返回" hCont="基础信息" hRight="完成"></headers>
        <div class="alls">
            <div class="list">
                <ul>
                    <li class="clearfix">
                        <div class="lefts">名字</div>
                        <div class="rights">
                            <div>点击输入</div>
                        </div>
                    </li>
                    <li class="sex clearfix">
                        <div class="lefts">性别</div>
                        <div class="rights">
                            <img src="../../images/baseinfo_03.png" alt="">
                        </div>
                    </li>
                    <li class="birth clearfix">
                        <div class="lefts">生日</div>
                        <div class="rights"></div>
                    </li>
                    <li class="clearfix">
                        <div class="lefts">城市</div>
                        <div class="rights">
                            <img src="../../images/baseinfo_03.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    
    </div>
</template>
<script>
import headers from '../../components/common/header';
export default {
    name: "baseInfo",
    components: {
        headers
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="less">
.container {
    height: 1334/100rem;
    background: #f1f1f1;
}

.list {
    margin: 34/100rem auto;
    margin-left: 20/100rem;
    margin-right: 20/100rem;
    background: white;
}

.list ul li {
    width: 100%;
    height: 76/100rem;
    line-height: 76/100rem; 
    box-sizing: border-box;
}

.list ul li .lefts {
    font-size: 15px;
    color: #262626;
    float: left;
}

.list ul li .rights {
    width: 150/100rem;
    font-size: 15px;
    color: #262626;
    float: right;
}
.rights img{
    width: 18/100rem;
    float: right;
    margin-top: 25/100rem;
}
.rights div{
    float: right
}
.sex {
    border-bottom: 1/100rem solid #f1f1f1;
    border-top: 1/100rem solid #f1f1f1;
}

.birth {
    border-bottom: 1/100rem solid #f1f1f1;
}
.alls{
    width: 100%;
    background:white; 
}
</style>


