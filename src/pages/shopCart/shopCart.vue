<template>
  <div class="shopCart">
    <headers hLeft="返回" hCont="订单详情"></headers>
    <div class="container">
      <div class="writer">
        <div class="address">
          <img src="../../images/order (3).png" alt="">
        </div>
        <div class="info">
          <span class="infoName">姓名：
            <i>王焱</i>
          </span>
          <span class="infoNum">15181321992</span>
          <span class="adrInfo">地址：
            <i>北京市海淀区西三旗桥东金燕龙大厦</i>
          </span>
        </div>
        <div class="empty"></div>
      </div>
       <div class="ordNum"> 
        <span class="nums">订单号：
           <i>{{product.orderNum}}</i> 
        </span>
        <span class="times">下单时间：
           <i>{{product.orderTime}}</i> 
        </span>
       </div> 
      <div class="orderInfo">
        <div class="imgInfo">
          <router-link :to="{path:'/productDetails/'+product.id}">
            <img :src="product.imgUrl" alt="">
          </router-link>
        </div>
        <div class="texts">
          <span class="texsName">{{product.name}}</span>
          <span class="texPrice">
            <i></i>{{product.finalPrice}}
          </span>
          <span class="texDx">
            <i>大小：</i>{{product.size}}
          </span>
          <span class="texTypes">
            <i>包装：</i>{{product.type}}
          </span>
          <span class="texAdd">
            <i>X</i>1
          </span>
          <span class="texNums">
            <i>数量：</i>{{product.number}}
          </span>
          <span class="texTatPrice">
            <i>价格：</i>{{product.finalPrice}}
          </span>
        </div>
      </div>
      <div class="track">
        <p>物流跟踪</p>
      </div>
      <div class="orderList">
        <ul>
          <li class="areadyList" v-for="(item,index) in orderList" :key="index">
            <div class="lisLeft">
              <div class="cirles " :class="{green :index==0}"></div>
            </div>
            <div class="lisCon" :class="{greenText:index==0}">
              <span class="lisorder">{{item.title}}</span>
              <span class="lisDate">{{item.lisDate}}</span>
              <span class="lisTime">{{item.lisTime}}</span>
            </div>
          </li>
        </ul>
        <button>确认收货</button>
      </div>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
  name: 'shopCart',
  created(){
    let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
    let id = this.$route.params.id;
    let url = flag ? ("/user/productList?id="+id) : '/userInfo.json';
    this.$axios.get(url).then(res=>{
        let data = res.data;
        this.product = flag ? data.productList : data.userOrder[id-16];
    }) 
  },
  components: {
    headers
  },
  data() {
    return {
      green: {
        active: false,
        'text-danger': false
      },
      product:[
        {
          orderNum:"",
          orderTime:""
        }
      ],
      orderList: [
        {
          title: "您的订单已完成",
          lisDate: "2016-12-01",
          lisTime: "9:00"
        },
        {
          title: "您的订单已完成",
          lisDate: "2016-11-21",
          lisTime: "12:00"
        },
        {
          title: "您的订单已完成",
          lisDate: "2016-10-05",
          lisTime: "11:00"
        }
      ]

    }
  }
}
</script>
<style scoped lang="less">
.writer {
  width: 100%;
  height: 240/100rem;
  background: #fff;
  display: flex;
  box-sizing: border-box;
}

.address {
  flex-grow: 1;
}

.address img {
  width: 27/100rem;
  margin-top: 70/100rem;
  margin-left: 40/100rem;
}

.info {
  flex-grow: 18;
  padding-left: 36/100rem;
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
}

.empty {
  flex-grow: 1;
}

.infoName {
  float: left;
  margin-top: 40/100rem;
  margin-left: -30/100rem;
  position: absolute;
  left: 62/100rem;
  box-sizing: border-box;
}

.infoNum {
  margin-top: 40/100rem;
  float: right;
  position: absolute;
  right: 160/100rem;
}

.adrInfo {
  position: absolute;
  left: 32/100rem;
  margin-top: 105/100rem;
}

.ordNum {
  width: 100%;
  height: 82/100rem;
  background: #f1f1f1;
  padding: 48/100rem 20/100rem;
  box-sizing: border-box;
  color: #333333;
  font-size: 12px;
}

.times {
  float: right;
}

.orderInfo {
  display: flex;
  background: #fff;
  width: 100%;
  height: 202/100rem;
  padding: 0 20/100rem;
  box-sizing: border-box;
}

.imgInfo {
  flex-grow: 1;
}

.imgInfo img {
  width: 113/100rem;
  margin-top: 22/100rem;
}

.texts {
  flex-grow: 10;
  padding: 22/100rem 48/100rem;
  position: relative;
}

.texsName {
  font-size: 13px;
  color: #000000;
}

.texPrice {
  position: absolute;
  right: 0;
}

.texAdd {
  position: absolute;
  right: 0;
  top: 80/100rem;
  color: #505050;
  font-size: 12px;
}

.texTatPrice {
  position: absolute;
  right: 0;
  bottom: 20/100rem;
}

.texDx {
  position: absolute;
  left: 50/100rem;
  top: 80/100rem;
  font-size: 12px;
  color: #595959;
}

.texTypes {
  position: absolute;
  left: 200/100rem;
  top: 80/100rem;
  font-size: 12px;
  color: #595959;
}

.texNums {
  position: absolute;
  right: 240/100rem;
  bottom: 22/100rem;
  font-size: 12px;
}

.track {
  height: 120/100rem;
  width: 100%;
  text-align: left;
  position: relative;
  background: #f1f1f1;
}

.track p {
  position: absolute;
  left: 20/100rem;
  bottom: 10/100rem;
}

button {
  width: 512/100rem;
  height: 76/100rem;
  background: #43BF91;
  border-radius: 12/100rem;
  display: block;
  border: 0;
  outline: none;
  margin: 52/100rem auto;
  font-size: 18px;
  color: white;
}

.areadyList {
  height: 124/100rem;
  border-bottom: 1/100rem solid #c9c9c9; // padding-left: 58/100rem;
  display: flex;
}

.orderList ul {
  padding: 0 20/100rem;
}

.lisLeft {
  flex-grow: 1;
  line-height: 116/100rem;
}

.lisCon {
  flex-grow: 12;
  position: relative;
}

.cirles {
  width: 21/100rem;
  height: 21/100rem;
  border-radius: 50%;
  background: #535353;
  margin-top: 48/100rem;
  box-sizing: border-box;
}

.lisorder {
  position: absolute;
  top: 28/100rem;
  left: 0;
  font-size: 13px;
  color: #525252;
  padding-bottom: 15/100rem;
}

.lisDate {
  position: absolute;
  bottom: 28/100rem;
  font-size: 12px;
  color: #525252;
}

.lisTime {
  position: absolute;
  bottom: 28/100rem;
  left: 150/100rem;
  font-size: 12px;
  color: #525252;
}

.green {
  background: #43BF91; // z-index: 99;
}

.greenText span {
  color: #43BF91;
}
</style>