<template>
  <div class="myPages">
    <div class="myPagesHead">
    <headers hLeft="返回" hCont="我"></headers>
    </div>
    <div class="footList">
      <div class="roofTop clearfix">
        <div class="imgCon">
            <img :src="infoList.icon" alt="">
        </div>
        <div class="nameCon">{{infoList.name}}</div>
        <router-link :to="{path:'/healthData'}">
            <div class="healtCon">
                健康信息
                <img src="../../images/baseinfo_03.png" alt="">
            </div>
        </router-link>
      </div>
        <router-link :to="{path:'/'+item.path}" v-for="(item,index) in pathList" :key="index">
            <div :class="item.divClass"><i :class="item.iClass"></i>{{item.name}}</div>
        </router-link>
    </div>
        <footers></footers>
    </div>
</template>

<script>
import headers from '../../components/common/header';
import footers from '../../components/common/footer';
export default {
  name: 'myPages',
    components:{
      headers,
      footers
    },
    created(){
        let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
        let url = flag ? "/user/info" : '/userInfo.json';
        this.$axios.get(url).then(res=>{
            let data = res.data;
            this.infoList = flag ? data.info : data.userInfo;
        })
    },
    data () {
        return {
            infoList:[],
            pathList:[
                {
                  path:'informationMsg',
                  divClass:'informaTion',
                  iClass:'informaTionCon',
                  name:'消息'  
                },
                {
                  path:'addFriends',
                  divClass:'jiaFriends',
                  iClass:'jiaFriendsCon',
                  name:'家人和朋友'  
                },
                {
                  path:'myCollect',
                  divClass:'collect',
                  iClass:'collectCon',
                  name:'我的收藏'  
                },
                //需要更改
                {
                  path:'myOrder',
                  divClass:'unify',
                  iClass:'unifyCon',
                  name:'我的订单'  
                },
                {
                  path:'login',
                  divClass:'account',
                  iClass:'accountCon',
                  name:'其他与账户'  
                },
                {
                  path:'onlineService',
                  divClass:'unify',
                  iClass:'collectCon1',
                  name:'在线客服'  
                },
                {
                  path:'helpAndFeedback',
                  divClass:'unify',
                  iClass:'collectCon2',
                  name:'帮助和反馈'  
                },
                {
                  path:'setSetting',
                  divClass:'unify',
                  iClass:'collectCon3',
                  name:'设置'  
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
.clearfix:after{
    height:0;
    content:" ";
    display:block;
    overflow:hidden;
    clear:both;
}
.myPages{
  width:100%;
  height:1334/100rem;
  background:#f1f1f1;
}
.healthHead{
    width:100%;
    height:88/100rem;
    background:#43bf92;
}

.healthContent{
  width:100%;
  height:236/100rem;
  margin:0 auto;
}
.borderHr{
  border-bottom:1px solid #f1f1f1;
}


.contentCon{
  width:115/100rem;
  height:115/100rem;
  text-align: center;
  margin:0 auto;
    padding-top: 62/100rem;

}
.iconLeft img{
  display: block;
  width:115/100rem;
  height:115/100rem;
  text-align: center;

}
.footList{
  width: 100%;
  height: 238/100rem;
  margin-top: 46/100rem;
  box-sizing: border-box;
  
}
.roofTop{
    width: 100%;
    height: 136/100rem;
    padding-left: 20/100rem;
    padding-right: 20/100rem;
    background: #fff;
    line-height: 136/100rem;
    box-sizing: border-box;
    .imgCon{
        display: block;
        float: left;
        width:115/100rem;
        height:115/100rem;
        img{
            display: block;
            width:115/100rem;
            height:115/100rem;
            margin-top: 10/100rem;
        }
    }
    .nameCon{
        float: left;
        width:150/100rem;
        height:136/100rem;
        margin-left: 22/100rem;
    }
    .healtCon{
        float: right; 
        width: 220/100rem;
        height: 136/100rem;
        color: #313131;
        // background: red;
        text-indent: 20/100rem;
        img{
            text-align: center;
            width:20/100rem;
            height:36/100rem;
            margin-bottom: 50/100rem;
            margin-left: 20/100rem;
        }
    }
}

.jianKang{
  widows: 100%;
  height: 56/100rem;
  text-align: center;
  padding-top: 40/100rem;
      box-sizing: border-box;
}
// 箭头
.footList .jianTou1,.jianTou2,.jianTou3{
  display: block;                                                                                                                                                                                                                                        
  width: 24/100rem;
  height:136/100rem;
  background: url("../../images/baseinfo_03.png")center no-repeat;
  margin-right: 54/100rem;
  background-size: 18/100rem 24/100rem;
  float: right;
}
.iconLeft{
    display: block;
    width:115/100rem;
    height:115/100rem;
    text-align: center;
    padding-top: 10/100rem;
    float: left;
    clear:both;
}
.iconRight{
    float: right;
    color: #7c7c7c;
    font-size: 30/2px;
}
.iconPet{
    float: left;
}
.jiaFriends,.informaTion{
    color: #313131;
    width: 100%;
    height: 76/100rem;
    padding-left: 20/100rem;
    padding-right: 20/100rem;
    background: #fff;
    line-height: 76/100rem;
    margin-top: 40/100rem;
        box-sizing: border-box;
}
.collect{
    color: #313131;
    width: 100%;
    height: 76/100rem;
    padding-left: 20/100rem;
    padding-right: 20/100rem;
    background: #fff;
    line-height: 76/100rem;
    margin-top: 40/100rem;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
}
.unify{
    color: #313131;
    width: 100%;
    height: 76/100rem;
    padding-left: 20/100rem;
    padding-right: 20/100rem;
    background: #fff;
    line-height: 76/100rem;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
}
.account{
    color: #313131;
    width: 100%;
    height: 76/100rem;
    padding-left: 20/100rem;
    padding-right: 20/100rem;
    background: #fff;
    line-height: 76/100rem;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
}
i{
    color: #313131;
    float: left;
    display: block;
    width: 60/100rem;
    height: 42/100rem;
    background: url("../../images/img-icon3.png") no-repeat;
    background-size: 32/100rem 346/100rem;
    line-height: 50/100rem;
    margin-top: 20/100rem;
}
.informaTionCon{
    background-position:  0 -315/100rem;
}
.jiaFriendsCon{
    background-position:  0 -236/100rem;
}
.collectCon{
    background-position:  0 -149/100rem;
}
.unifyCon{
    // background-position:  0 -108/100rem;
}
.unifyCon{
     background-position:  0 -192/100rem;
}
.accountCon{
     background-position:  0 -33/100rem;
}
.collectCon1{
     background-position:  0 -274/100rem;
}
.collectCon2{
     background-position:  0 -108/100rem;
}
.collectCon3{
     background-position:  0 -73/100rem;
}

// 小明
</style>