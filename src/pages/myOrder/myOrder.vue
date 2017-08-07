<template>
  <div class="myOrder">
    <headers hLeft="返回" hCont="我的订单"></headers>
    <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <ul class="antiWinkle ">
              <li v-for="(item,index) in list" :key="index">
                <p>安心食疗店</p>
                <div class="goodsDetail clearfix">
                    <router-link :to="{path:'/productDetails/'+item.id}">
                        <img :src="item.imgUrl" alt="">
                    </router-link>
                    <div class="content">
                        <h3>{{item.name}}</h3>
                        <span>{{item.feat}}</span>
                        <p></p>
                    </div>
                    <ul class="price">
                        <li>{{item.finalPrice}}</li>
                        <li>{{item.originalPrice}}</li>
                        <li class="number"><i>x</i>{{item.number}}</li>
                    </ul>
                </div>
                <ul class="total clearfix">
                    <li>共1件商品</li>
                    <li>合计</li>
                    <li>￥25.00</li>
                    <li>(含运费￥0.00)</li>
                </ul>
                <div class="line"></div>
                <ul class="button clearfix">
                    <li><span>延长收货</span></li>
                    <router-link :to="{path:'/shopCart/'+item.id}">
                        <li><span>查看物流</span></li>
                    </router-link>
                    <li><span class="confirm">确认收货</span></li>
                </ul>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
          <el-tab-pane label="待发货" name="third">待发货</el-tab-pane>
          <el-tab-pane label="待收货" name="fourth">待收货</el-tab-pane>
          <el-tab-pane label="待评价" name="fifth">待评价</el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
  name: 'myOrder',
  created(){
    let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
    let url = flag ? "/user/order" : '/userInfo.json';
    this.$axios.get(url).then(res=>{
        let data = res.data;
        this.list = flag ? data.order : data.productList;
    }) 
  },
  components:{
      headers
  },
  data () {
    return {
        activeName: 'first',
        list:[
            {
                feat:"",
                finalPrice:"",
                id:"",
                imgUrl:"",
                name:"",
                number:"",
                originalPrice:""
            }
        ]

    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style scoped lang="less">
.myOrder{
    background:#f1f1f1;
}
.antiWinkle{
    width:100%;
    li{
        color:#b3b3b3;
        margin-bottom:10/100rem;
        p{
            height:68/100rem;
            padding-left:33/100rem;
            line-height:68/100rem;
            color:30/100rem;
            background:#fff;
        }
        .goodsDetail{
            img{
                width:149/100rem;
                height:131/100rem;
                display:block;
                margin:15/100rem 30/100rem;
                float:left;
            }
            .content{
                float:left;
                margin-left:15/100rem;
                margin-top:15/100rem;
                h3{
                    font-size:26/100rem;
                    margin-bottom:10/100rem;
                }
                span{
                    font-size:24/100rem;
                }
                p{
                    width:100/100rem;
                    height:30/100rem;
                    background:url('../../images/myorder_10.png') no-repeat ;
                    background-size:100/100rem 30/100rem;
                    margin-top:20/100rem;
                }
            }
            .price{
                float:right;
                margin-right:30/100rem;
                margin-top:30/100rem;
                font-size:24/100rem;
                .number{
                    text-align:right;
                }
            }
        }
        .total{
            height:68/100rem;
            background:#fff;
            padding-left:230/100rem;
            li{
                float:left;
                line-height:68/100rem;
                font-size:28/100rem;
                margin-left:5/100rem;
            }
            -webkit-li:last-child{
                margin-left:10/100rem;
            }
        }
        .line{
            width:696/100rem;
            height:1px;
            margin:0 auto;
            background:#f1f1f1;
        }
        .button{
            height:70/100rem;
            background:#fff;
            padding-left:280/100rem;
            li{
                float:left;
                margin-left:20/100rem;
                margin-top:6/100rem;
                span{
                    width:126/100rem;
                    height:43/100rem;
                    border-radius:10/100rem;
                    border:1px solid #b3b3b3;
                    font-size:26/100rem;
                    display:block;
                    text-align:center;
                    line-height:43/100rem;
                }
                .confirm{
                    border:1px solid red;
                }
            }
        }
    }
}
</style>
<style lang="less">
.el-tabs__nav-wrap.is-scrollable {
  padding: 0;
}

.el-tabs__item.is-active {
  color: #43bf92;
  width:70px;
}

.el-tabs__nav-prev,
.el-tabs__nav-next {
  display: none;
}

.el-tabs__item {
  padding: 0;
  font-size: 28/100rem;
  color:#b3b3b3;
  text-align:center;
  width:140/100rem;
}
.el-tabs__nav{
    margin:0 30/100rem;;
}
.el-tabs__active-bar {
    background-color:#43bf92;
}
.el-tabs__header{
  border:0 none;
    background:#fff;
    margin-bottom:15/100rem;
  
}
</style>