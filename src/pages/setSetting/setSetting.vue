<template>
  <div class="setSetting">
    <div class="setSettingHead">
    <headers hLeft="返回" hCont="设置"></headers>
    </div>
    <div class="forgotInput">
        <ul class="setSettinglist">
            <li>用户协议</li>
            <li>关于安心食疗</li>
            <li>去评分</li>
            <li>清理缓存</li>
        </ul>
        <router-link :to="{path:'/myPages'}">
            <button class="forgotBtn">退出</button>
        </router-link>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'setSetting',
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
.setSetting{
    width: 100%;
    height: 1334/100rem;
    background: #f1f1f1;
}
// li
.setSettingHead{
    width:100%;
    height:88/100rem;
    background:#43bf92;
    margin-bottom: 20/100rem;
}
// 退出
.forgotBtn{
    width:600/100rem;
    height:76/100rem;
    margin:auto 65/100rem;
    margin-top:66/100rem;
    text-align: center;
    border-radius:10/100rem;
    border:none; 
    background:#43bf92;
    color:#fff;
    font-size:34/2px;
    outline: none;
    color:#fff;
}
// li
.setSettinglist li{
    width: 100%;
    height:76/100rem;
    padding-left:22/100rem;
    line-height: 76/100rem;
    border-bottom: 1px solid #f1f1f1;
    background: #fff;
}
   
</style>