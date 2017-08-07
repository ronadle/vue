<template>
  <div>
    <ul class="personalNav">
      <router-link  active-class="personal" tag='li' :to="{path:'/personalOrder/'+item.path}" v-for="(item,index) in tabs" :key="index">
        <span>{{item.name}}</span>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    name:'personalNav',
    data(){
      return{
        tabs:[
          {
            path:'',
            name:'日常记录',
          },
          {
            path:'symptomCondition',
            name:'症状调理'
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
.personalNav{
  display: flex;
  margin:0 20/100rem;
  height:61/100rem;
  padding-top:55/100rem;
  padding-bottom: 20/100rem;
  font-size:18px;
  li{
    flex:1;
    text-align: center;
    background:url(../../images/siren_88.png) no-repeat;
    background-size:48/100rem 275/100rem;
    span{
      margin-left:58/100rem;
    }
    &:nth-child(1){
      background-position: 76/100rem -154/100rem;
      border-right:1px solid #d9d9d9;
    }
    &:nth-child(2){
      background-position: 70/100rem -75/100rem;
    }
  }
  .router-link-exact-active{
    color:#44bf91;
  }
  .router-link-exact-active{
    &:nth-child(1){
      background-position: 76/100rem -230/100rem;
    }
    &:nth-child(2){
      background-position: 70/100rem 0/100rem;
    }
  } 
}
</style>
