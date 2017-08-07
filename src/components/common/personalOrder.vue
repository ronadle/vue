<template>
  <div class="personalOrder">
    <router-view></router-view>
    <shopcart></shopcart>
  </div>
</template>
<script>
import shopcart from '../../components/common/shopCart.vue';
  export default{
    name:'personalOrder',
     components:{
      shopcart
    },
    data(){
      return{
      }
    }
  }
</script>
<style lang="less" scoped>
</style>

