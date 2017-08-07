<template>
    <div class="container">
        <headers hLeft="返回" hCont="家人和朋友" hRight="修改信息"></headers>
        <div class="imgOnly">
            <img src="../../images/onlineser_03.png" alt="">
        </div>
        <div class="test">
            <router-link to="/test">
                <div>尚未测试</div>
            </router-link>
        </div>
        <router-link :to="{path:'/collectSick'}">
            <div class="ill">
                <div>慢性病</div>
            </div>
        </router-link>
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
.container{
    width: 100%;
    height: 1334/100rem;
    background: #f1f1f1;
    a{
        color:#000;
    }
}
.imgOnly{
    width: 100%;
    height: 366/100rem;
    text-align: center;
    padding-top: 125/100rem;
    box-sizing: border-box;
}
.imgOnly img{
    width: 115/100rem;
}
.test{
    width: 664/100rem;
    height: 80/100rem;
    border-radius: 15/100rem;
    margin: 0 auto;
    background: #fff url("../../images/manxing_07.png") no-repeat 32/100rem center;
    background-size: 51/100rem;
    line-height: 80/100rem;
    padding-left: 112/100rem;
    box-sizing: border-box;
}
.test div{
    background: url("../../images/baseinfo_03.png") no-repeat  510/100rem center;
    background-size:12/100rem ;
}
.ill{
   width: 664/100rem;
    height: 80/100rem;
    border-radius: 15/100rem;
    margin: 36/100rem auto;
    background: #fff url("../../images/manxing_14.png") no-repeat 32/100rem center;
    background-size: 43/100rem;
    line-height: 80/100rem;
    padding-left: 112/100rem;
    box-sizing: border-box; 

}
.ill div{
    background: url("../../images/baseinfo_03.png") no-repeat  510/100rem center;
    background-size:12/100rem ;
}
</style>