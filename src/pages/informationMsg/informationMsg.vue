<template>
  <div class="informationMsg">
    <div class="msgHead">
            <headers hLeft="返回" hCont="收到的消息"></headers>
    </div>
        <div class="messageList"  v-for="(item,index) in receiveMsg" :key="index">
            <div class="msgConter">
                <div class="conterCon">
                    <img :src="item.icon" alt="">
                    <!--<img src="../../images/getmessage_03.png" alt="">-->
                    </div>
                <div class="conterTitle">
                    <div class="nickName">{{item.nickName}}</div>
                    <div class="tagName">{{item.msg}}</div>
                </div>
                <div class="conterTime">
                    <div class="msgTime">{{item.date}}</div>
                </div>
            </div>
        </div>   
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'informationMsg',
        components:{
      headers
    },
     created(){
        let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
        let url = flag ? "/user/receiveMsg" : '/userInfo.json';
        this.$axios.get(url).then(res=>{
            this.receiveMsg = res.data.receiveMsg;
        }) 
    },
    data(){
      return{
        "receiveMsg":[]
      }
    }
  }
</script>
<style scoped lang="less">
.setSetting{
    width: 100%;
    height: 1334/100rem;
    background: #f1f1f1;
}
// li
.msgHead{
    width:100%;
    height:88/100rem;
    background:#43bf92;
}
.messageList{
    width: 100%;
    height: 90/100rem;
    padding-top: 10/100rem;
}
.msgConter{
    display: flex;
    // background: red;
    width:90%;
    height:89/100rem;
    margin-left:30/100rem;
    // padding-top:10/100rem;
    border-bottom: 1px solid #e8e8e8;
    .conterCon{
        flex:2;
        width: 80/100rem;
        height:80/100rem;
        margin-left: 1/10rem;

        img{
            width: 80/100rem;
            height:80/100rem;
        }
    }
    .conterTitle{
        flex:6;
        color: #111;
        .nickName{
        font-size: 30/2px;
        }
        .tagName{
        font-size: 24/2px;
        }
    }
    .conterTime{
        flex:4;
        text-align: right;
        .msgTime{
            font-size: 22/2px;
            color: #898989;
        }
    }
}


   
</style>