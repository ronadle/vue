<template>
  <div class="shopCart">
    <router-link :to="{path:'/shopClose'}">
      <img src="../../images/siren_07.png" alt="购物车">
    </router-link>
  </div>
</template>
<script>
  export default{
    name:'shopCart',
    data(){
      return{
        
      }
    }
  }
</script>
<style lang="less" scoped>
.shopCart img{
  position: fixed;
  right:48/100rem;
  bottom:150/100rem;
  width:84/100rem;
  height:84/100rem;
}
</style>
