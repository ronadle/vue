<template>
  <div class="addFriends">
    <div class="addFriendsHead">
          <headers hLeft="返回" hCont="家人和朋友" hRight="添加"></headers>
    </div>

    <div class="amendCon">
        <div class="amendConter">
            <span>我们为不同性别，年龄和地区的人设计了不同的定制服务，请认真填写。</span>
            <div class="amendImg"><img src="../../images/xstz_03.png" alt=""></div>
            <button class="conBtn">修改头像</button>
        </div>
    </div>



    <div class="addFriendsConter">
        <ul class="listInput">
            <li>名字<input type="text" placeholder="点击输入"></li>
            <li>关于安心食疗<input type="text"></li>
            <li class="sex">性别
                <!--<div class="sex">-->
                    <img class="sexNan" src="../../images/baseinfo_07.png" alt="">
                    <img class="sexNv" src="../../images/baseinfo_08.png" alt="">
                <!--</div>-->
            </li>
            <li>生日<input type="text"></li>
            <li>城市<input type="text"/></li>
        </ul>

    </div>
    <router-link :to="{path:'/familyFriend'}">
        <button class="forgotBtn">完成</button>
    </router-link>
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'addFriends',
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
.addFriends{
    width: 100%;
    height: 1334/100rem;
    background: #f1f1f1;
}
// 修改头像div
.amendCon{
    padding-top: 10/100rem;
    width:100%;
    height: 286/100rem;
    background: #fff;
}
.amendConter{
    width:482/100rem;
    height:272/100rem;
    margin:0 auto;
    font-size: 24/2px;
    text-align: center;
    padding-top: 9/100rem;
}
.amendImg{
    width: 100/100rem;
    height:100/100rem;
    text-align: center;
    margin:20/100rem auto;
}
.amendImg img{
    width: 100/100rem;
    height:100/100rem;
}
.conBtn{
    // padding-top: 10/100rem;
    width:150/100rem;
    height:50/100rem;
    border-radius: 15/100rem;
    text-align: center;
    background: #fff;
    border:1px solid #000;
    outline: none;
    
}
// li
.addFriendsHead{
    width:100%;
    height:88/100rem;
    background:#43bf92;
}
// 完成
.forgotBtn{
    display: block;
    width:512/100rem;
    height:76/100rem;
    margin: 0 auto;
    margin-top:66/100rem;
    text-align: center;
    border-radius:10/100rem;
    border:none; 
    background:#43bf92;
    color:#fff;
    font-size:34/2px;
}


// 下面input
.listInput li{
    display: block;
    width:100%;
    height: 76/100rem;
    border-top: none;
    border-left: none;
    border-right: none;
    text-indent: 44/100rem;
    border-bottom: 1px solid #f1f1f1;
    line-height: 76/100rem;
}
.listInput input{
    float: right;
    text-align: center;
    border:none;
    height:70/100rem;
    width:40%;
    position: relative;
    background: url("../../images/baseinfo_03.png")235/100rem  no-repeat;
    background-size: 18/100rem 24/100rem;
    outline: none;
}
.addFriendsConter{
    margin-top:12/100rem;
    background: #fff;
}

// 男女
.addFriendsConter .sexBtn{
    float: right;
    width:62/100rem;
    height:40/100rem;
    border-radius: 18/100rem;
    border:1px solid #878787;
    background: #fff;
    text-align: center;
    line-height: 40/100rem;
    margin-left: 30/100rem;
}
.addFriendsConter img{
    width: 62/100rem;
    height:40/100rem;
    text-align: center;
    line-height: 40/100rem;
    // position: absolute;
    // right:30/100rem;
}
.sex{
    position: relative;

}
.sex .sexNan{
    position: absolute;
    right: 105/100rem;
    top:20/100rem;
}
.sex .sexNv{
    position: absolute;
    right: 45/100rem;
    top:20/100rem;
}
</style>