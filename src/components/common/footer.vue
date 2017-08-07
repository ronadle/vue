<template>
  <div class="footer">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <ul class="footerNav">
      <router-link active-class="active" tag='li' class='item' :to="{path:'/'+item.path}" v-for="(item,index) in tabs" :key="index">
          <div class="homeIcon"></div>
          <span>{{item.name}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'footer',
  data() {
    return {
      tabs:[
        {
          path:'home',
          name:'首页'
        },
        {
          path:'foodTherapy',
          name:'食疗坊'
        },
        {
          path:'personalOrder',
          name:'私人订制'
        },
        {
          path:'myPages',
          name:'我的'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.footerNav{
  background: #fff;
  z-index: 100;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 98/100rem;
  display: flex;
  border-bottom: solid #f1f1f1;
  border-bottom: solid #f1f1f1;
  border-width: 1px 0;
}
.homeIcon{
    margin: 0 auto;
    width: 54/100rem;
    height: 50/100rem;
    background: url('../../images/img.png');
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 381/100rem 121/100rem;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10/100rem;
  font-size: 12px;
  &:nth-child(1)>.homeIcon{
    background-position: -74/100rem -1px;
  };
  &:nth-child(2)>.homeIcon{
    background-position: -154/100rem -1px;
  }
  &:nth-child(3)>.homeIcon{
    background-position: -246/100rem -1px;
  }
  &:nth-child(4)>.homeIcon{
    background-position: 4/100rem 0px;
  }
}
.item.active{
  color:#42bf93;
  &:nth-child(1)>.homeIcon{
    background-position: -74/100rem -68/100rem;
  }
  &:nth-child(2)>.homeIcon{
    background-position: -154/100rem -66/100rem;
  }
  &:nth-child(3)>.homeIcon{
    background-position: -246/100rem -70/100rem;
  }
  &:nth-child(4)>.homeIcon{
    background-position: 4/100rem -68/100rem;
  }
}
</style>
