<template>
  <div class="header">
    <div class="hLeft" @click="goBack">
      {{hLeft}}
    </div>
    <span>{{hCont}}</span>
    <div class="hRight" @click="showMsg(hRight)">
      {{hRight}}
    </div>
  </div>
</template>
<script>
  export default{
    name:'header',
    props:{
      hLeft:[String],
      hCont:[String],
      hRight:[String]
    },
    data(){
      return{
        
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      showMsg(hRight){
        if(hRight){
          alert('暂未开放此功能')
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.header{
  display: flex;
  height:88/100rem;
  background:#43bf92;
  color:#fff;
  line-height:88/100rem;
  padding:0 20/100rem;
  font-size: 16px;
  .hRight{
    width: 200/100rem;
    text-align: right;
  }
  span{
    flex: 1;
    text-align: center;
  }
  .hLeft{
    box-sizing: border-box;
    position: relative;
    width: 200/100rem;
    padding-left:34/100rem;
    &::before{
      content: '';
      display: block;
      background:url('../../images/order (2).png');
      background-repeat: no-repeat;
      width:48/100rem;
      height: 88/100rem;
      background-size:23/100rem 39/100rem;
      position:absolute;
      left:0;
      top:26/100rem;
    }
  }
}
</style>


