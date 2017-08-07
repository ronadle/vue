<template>
  <div class="container">
    <headers hLeft="返回" hCont="订单详情"></headers>
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
      <div class="empty">
        <i></i>
      </div>
    </div>
    <div class="list">
      <div class="listImg">
        <img src="../../images/shopcart_07.png" alt="">
      </div>
      <div class="listText">
        <span class="listName">东北有机红谷黄小米</span>
        <span class="listTime">2016秋收新东北有机红谷黄小米粒</span>
        <span class="listType">2750g(5.5斤）特产杂粮小米包邮</span>
      </div>
      <div class="listPrice clearfix">
        <span class="money">
          <i>￥</i>
          45.00
        </span>
        <span class="priceNum clearfix">
          <i>x</i>1
        </span>
      </div>
    </div>
    <div class="types">
      <div class="typesName">配送方式</div>
      <div class="typesMiddle"></div>
      <div class="typesSpans">
        <span class="myf">免运费</span>
        <span class="kdfh">快递发货</span>
      </div>
    </div>
    <div class="message">
      <div class="messBuy">
        <span class="messBuyCon">
          <i>卖家留言：</i>无
        </span>
        <span>
          <i>合计：</i>
        </span>
      </div>
      <div class="messPrice">
        <i>￥</i>
        <span>45.00</span>
      </div>
    </div>
    <div class="pay">
      <div class="payName">
        <span class="spje">商品金额</span>
        <span class="yf">运费</span>
      </div>
      <div class="payMiddle"></div>
      <div class="payNum">
        <span class="ssw">
          <i>￥</i>45.00</span>
        <span class="ldl">
          <i>+￥</i>0.00</span>
      </div>
    </div>
    <div class="bottom">
      <div class="bottAll">
        <button>
          <router-link :to="{path:'/shipAddress'}">
            去支付
          </router-link>
        </button>
        <span><i>合计：</i><b>￥</b>45.00</span> 
      </div>
    </div>
  </div>
</template>

<script>
import headers from '../../components/common/header';
export default {
  name: 'confirmOrder',
  components: {
    headers
  },
  data() {
    return {

    }
  },
  methods:{
    
  }
}
</script>
<style scoped lang="less">
//收货地址
.writer {
  width: 100%;
  height: 218/100rem;
  background: #fff;
  display: flex; // padding-top: 40/100rem;
  box-sizing: border-box;
  border-bottom: 1/100rem solid #707070;
  padding: 0 20/100rem;
}

.address {
  width: 40/100rem;
}

.address img {
  width: 27/100rem;
  margin-top: 70/100rem;
}

.info {
  flex-grow: 1;
  padding-left: 36/100rem;
  box-sizing: border-box;
  position: relative;
}

.empty {
  // width: 40/100rem;
  i {
    width: 25/100rem;
    height: 30/100rem;
    display: block;
    background: url("../../images/baseinfo_03.png") no-repeat 0 center;
    background-size: 18/100rem;
    margin-top: 70/100rem;
  }
}

//配送方式
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

.list {
  width: 100%;
  height: 300/100rem; // background: red;
  display: flex;
  padding: 0 20/100rem;
  box-sizing: border-box;
  .listImg {
    width: 120/100rem;
    margin-top: 63/100rem;
    img {
      width: 120/100rem;
      margin-right: 10/100rem;
    }
  }
  .listText {
    flex: 1;
    padding-left: 20/100rem;
    span {
      display: block;
    }
    .listName {
      font-size: 14px;
      color: 000000;
      margin-top: 56/100rem;
      margin-bottom: 30/100rem;
    }
  }
  .listPrice {
    // padding-right: 20/100rem;
    margin-top: 63/100rem;
    span {
      display: block;
    } // width: 168/100rem;
    .money {
      color: #de2626;
      padding-top: 0.36rem;
    }
    .priceNum {

      font-size: 12px;
      padding-left: 90/100rem;
      padding-top: 36/100rem;
    }
  }
  .listTime,
  .listType {
    font-size: 12px;
    color: #666666;
    margin-bottom: 15/100rem;
  }
}

//配送方式
.types {
  display: flex;
  padding: 0 20/100rem;
  height: 174/100rem;
  width: 100%;
  box-sizing: border-box;
  .typesName {
    flex: 2;
    margin-top: 20/100rem;
    font-size: 15px;
    color: #525353;
  }
  .typesMiddle {
    flex: 6
  }
  .typesSpans {
    span {
      display: block;
    }
    .myf {
      font-size: 14px;
      margin-top: 10/100rem;
      color: #525353;
      margin-bottom: 12/100rem;
    }
    .kdfh {
      font-size: 12px;
      color: #525353;
    }
  }
}

//卖家留言
.message {
  display: flex;
  padding: 0 20/100rem;
  box-sizing: border-box;
  .messBuy {
    margin-top: 40/100rem;
    span {
      display: block;
      padding-bottom: 50/100rem;
    }
    i {
      color: #525353;
      font-size: 15px;
    }
    flex: 10;
    .messBuyCon {
      color: #868686;
    }
  }
  .messPrice {
    color: #de2626;
    float: right;
    margin-top: 120/100rem;
    font-size: 15px;
  }
}

//商品金额
.pay {
  width: 100%;
  height: 212/100rem;
  display: flex;
  padding: 0 20/100rem;
  box-sizing: border-box;
  span {
    display: block;
  }
  .payName {
    flex: 3;
    font-size: 15px;
    color: #525353;
    margin-top: 90/100rem;
    
    .yf {
      margin-top: 40/100rem;
      margin-bottom: 50/100rem;
    }
  }
  .payMiddle {
    flex: 1;
  }
  .payNum {
    font-size: 15px;
    color: #525353;
    .ssw {
      margin-top: 90/100rem;
    }
    .ldl {
      margin-top: 40/100rem;
      margin-bottom: 100/100rem;
    }
  }
}

//底部
.bottom {
  height: 80/100rem;
  width: 100%;
  line-height: 80/100rem;
  position: fixed;
  bottom: 0;
  .bottAll {
    float: right;
    a{
      font-size:14px;
    }
    span {
      font-size: 18px;
      width: 300/100rem;
      color: #ff3545;
      display: block;
      padding-left: 20/100rem;
      float: right;
    }
    i {
      color: #525353;
    }
    b {
      color: #ff3545;
    }
    button {
      background: #ff3545;
      font-size: 18px;
      outline: none;
      border: 0;
      width: 186/100rem;
      height: 77/100rem;
      float: right;
      a {
        color: #fff;
      }
    }
  }
}
</style>


