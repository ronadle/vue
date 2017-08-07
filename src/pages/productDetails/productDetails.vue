<template>
    <div class="container">
        <!--顶部  -->
        <div class="topInfo">
            <div class="header">
                <div class="hLeft" @click="goBack"> 返回</div>
                <span></span>
                <div class="hRight"> </div>
            </div>
        </div>
        <!--红豆薏仁详情  -->
        <div class="hongDou">
            <span class="hongNames">红豆薏仁粉</span>
            <span class="hongPrice">
                <i>￥</i>98
            </span>
        </div>
        
        <!--详情  -->
        <div class="banner">
            
        </div>
        <div class="bj">
            
            
        </div>
        <div class="foots">
            <div class="footUp">
                <div class="footText">食谱</div>
                <div class="footImg">
                    <img src="../../images/shipu.png" alt="" class="imgUp">
                    <b class="addOne"></b>
                </div>
    
            </div>
            <div class="footDown">
                <div class="footText">单品</div>
                <div class="footImg">
                    <img src="../../images/order_info_07.png" alt="" class="imgOne">
                    <b class="addTwo"></b>
                    <img src="../../images/mi.png" alt="" class="imgTwo">
                    <b class="addThree"></b>
                    <img src="../../images/siren_07.png" alt="" class="spCar">
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
export default {
    name: "productDetails",
    data() {
        return{

        }

    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped lang="less">
.header {
    display: flex;
    height: 88/100rem; //   background:#43bf92;
    color: #fff;
    line-height: 88/100rem;
    padding: 0 20/100rem;
    font-size: 16px;
    .hRight {
        width: 200/100rem;
        background: url("../../images/test.png") no-repeat 156/100rem center;
        background-size: 43/100rem;
    }

    span {
        flex: 1;
        text-align: center;
    }
    .hLeft {
        box-sizing: border-box;
        position: relative;
        width: 200/100rem;
        padding-left: 34/100rem;
        &::before {
            content: '';
            display: block;
            background: url('../../images/order (2).png');
            background-repeat: no-repeat;
            width: 48/100rem;
            height: 88/100rem;
            background-size: 23/100rem 39/100rem;
            position: absolute;
            left: 0;
            top: 26/100rem;
        }
    }
}

.topInfo {
    box-sizing: border-box;
    width: 100%;
    height: 340/100rem;
    background: url("../../images/product_02.png");
    background-size: cover;
}

.up {
    padding: 0 20/100rem;
    padding-top: 26/100rem;
    display: flex;
}





.hongDou {
    width: 100%;
    padding: 28/100rem 20/100rem 84/100rem;
    display: flex;
    box-sizing: border-box;
    .hongNames {
        flex: 1;
        font-size: 20px;
        color: #000000;
        text-align: left;
    }
    .hongPrice {
        text-align: right;
        flex: 1;
        font-size: 20px;
        color: #F10E0E;
    }
}

.hongText {
    text-align: center;
    font-size: 13px;
    color: #000000;
    margin-bottom:26/100rem;
}

.banner {
    width: 100%;
    height: 502/100rem;
    background:url("../../images/product_04.png") no-repeat;
    background-size: cover;
    box-sizing: border-box;
}

.bj {
    width: 100%;
    height: 2643/100rem;
    background:url("../../images/product_05.png");
    background-size: cover;
    box-sizing: border-box;
    
}

.foots {
    box-sizing: border-box;
    width: 100%;
    height: 376/100rem;
    padding-top: 60/100rem;
    .footUp {

        display: flex;
        height: 130/100rem;
        line-height: 130/100rem;
        
        .footImg {
            flex: 1;
        }
        .addOne {
            position: relative;
            background: url(../../images/jia.png) no-repeat;
            background-size:34/100rem;
            left:290/100rem;
            top:-140/100rem;
            width:34/100rem;
            height: 34/100rem;
            display: block;
        }
        .imgUp {
            width: 291/100rem;
        }
    }
    .footDown {
        display: flex;
        height: 130/100rem;
        line-height: 130/100rem;
        .footImg {
            flex: 1;
        }
        .imgOne {
            width: 113/100rem;
        }
        .addTwo{
            position: relative;
            background: url(../../images/jia.png) no-repeat;
            background-size:34/100rem;
            left:-10/100rem;
            top:-30/100rem;
            width:34/100rem;
            height: 34/100rem;
            display: inline-block;
        }
        .imgTwo {
            width: 97/100rem;
            padding-left: 30/100rem;
        }
        .addThree{
            position: relative;
            background: url(../../images/jia.png) no-repeat;
            background-size:34/100rem;
            left:-10/100rem;
            top:-30/100rem;
            width:34/100rem;
            height: 34/100rem;
            display: inline-block;
        }
        .spCar{
            width: 84/100rem;
            padding-left: 130/100rem;
        }
        
    }
}
.footText {
    width: 130/100rem;
    text-align: center;
}
</style>


