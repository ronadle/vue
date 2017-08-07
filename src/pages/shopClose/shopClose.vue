<template>
  <div class="shopClose">
    <div class="shopCloseHead">
    <headers hLeft="关闭" hCont="购物车"hRight="编辑"></headers>
    </div>
<div class="shopCloselist">
            <div class="shopCloseflex">
            <div class="closeBtn"><img src="../../images/shopcart_10.png" alt=""></div>
            <div class="closeImg"><img src="../../images/shopcart_07.png" alt=""></div>
            <div class="redactRight">
                <div class="conTitle1">
                        <div class="conLeft">
                            <div class="title1">东北有机红谷黄小米</div>
                            <div class="title2">
                                <!--2016秋收新东北有机红谷黄小米粒2750g(5.5斤）特产杂粮小米包邮-->
                                </div>
                            <div class="title3">
                                <span class="hong">￥</span>
                                <span class="costTitle hong">445</span>
                            </div>
                        </div>
                        <div class="conRight">
                            <div class="rightTop">编辑</div>
                            <div class="rightBtm"><span class="texAdd"><i>X</i>1345</span></div>
                        </div>
                </div>
            </div>
        </div>
        
    </div>

        <div class="shopCloselist">
            <div class="shopCloseflex">
            <div class="closeBtn"><img src="../../images/shopcart_10.png" alt=""></div>
            <div class="closeImg"><img src="../../images/shopcart_07.png" alt=""></div>
            <div class="redactRight">
                <div class="conTitle1">
                        <div class="conLeft">
                            <div class="title1">东北有机红谷黄小米</div>
                            <div class="title2">2016秋收新东北有机红谷黄小米粒2750g(5.5斤）特产杂粮小米包邮</div>
                            <div class="title3">
                                <span class="hong">￥</span>
                                <span class="costTitle hong">445</span>
                            </div>
                        </div>
                        <div class="conRight">
                            <div class="rightTop">编辑</div>
                            <div class="rightBtm"><span class="texAdd"><i>X</i>1345</span></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
<!--底下结算-->
    <div class="btmClose">
        <div class="flexItem1">
            <!--<img src="../../images/shopcart_10.png" alt="">-->
        </div>
        <div class="flexItem2"><img src="../../images/shopcart_10.png" alt="">&nbsp;&nbsp;<span class="quanX">全选</span></div>
        <div class="flexItem3">
            <span class="total">合计:</span>
            <span class="addTotal"><i>X</i>56</span>
            <span class="freight">不含运费</span>
        </div>
        <div class="flexItem4">
            <router-link :to="{path:'/confirmOrder'}">
                <span class="addSettle">结算&nbsp;</span>
                (<span class="addMoney">445</span>)
            </router-link>
        </div>
    </div>
    <footers></footers>
</div>
</template>

<script>
import headers from '../../components/common/header';
import footers from '../../components/common/footer';
export default {
  name: 'shopClose',
    components:{
      headers,
      footers

    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.clearfix:after{
		height:0;
		content:" ";
		display:block;
		overflow:hidden;
		clear:both;
	}
.shopClose{
        box-sizing: border-box;
  width:100%;
  height:1334/100rem;
  background:#f1f1f1;
  position: relative;
}
.shopCloseHead{
    box-sizing: border-box;
    width:100%;
    height:88/100rem;
    background:#43bf92;
    
}


.shopCloselist{
    box-sizing: border-box;
    margin-top: 50/100rem;
    width:100%;
    height:232/100rem;
    background: #fff;
    padding-top: 23/100rem;
    .shopCloseflex{
        display: flex;
        height: 186/100rem;
        text-align: center;
        align-items: center;
        margin-left: 20/100rem;
        margin-right: 20/100rem;
    }    
    .closeBtn{
        flex: 1;
        width: 31/100rem;
        margin-left: -15/100rem;
        height: 31/100rem;
        text-align: center;

        img{
             width: 31/100rem;
             height: 31/100rem;
        }
    }
    .closeImg{
        width: 150/100rem;
        img{
            width: 150/100rem;
        }
    }
    .redactRight{
        flex: 6;
        width: 454/100rem;
        height:170/100rem;
        text-align: left;
        margin-left: 20/100rem;
        .conTitle1{
          display: flex;
          .conLeft{
              flex: 9;
              overflow: hidden;
            //   background: green;
            //   width: 248/100rem;
            //   height: 40/100rem;
            display: block;
            .title1{
                font-size: 28/2px;
            }
            .title2{
                 overflow: hidden;
                font-size: 24/2px;
                 width: 330/100rem;
                height: 80/100rem;
            }
            .title3{
                font-size: 26/100rem;
                color: red;
            }
          }
          .conRight{
              font-size: 18/100rem;
              flex: 2;
              .rightTop{
                text-align: right;
                  margin-left: 20/100rem;
              }
              .rightBtm{
                  text-align: right;
                  margin-top: 85/100rem;
                  margin-left: 20/100rem;
              }
              
          }
          .conTitle2{
            .left2{
                width: 248/100rem;
                height: 40/100rem;
                background: goldenrod;
             }
          }
         
        }
    }
}


// 底下 结算
.btmClose{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 98/100rem;
    background:#fff;
    position: absolute;
    bottom: 103/100rem;
    align-items: center;
    //  justify-content:center;
    text-align: right;
    .flexItem2{
        flex: 3;
        padding-top: -20/100rem;
        width: 40/100rem;
        height: 40/100rem;
        //  margin-top: 5/100rem;
        img{
        padding-top: -50/100rem;
        margin-top: -50/100rem;
        width: 31/100rem;
        height: 31/100rem;
        text-align: center;
        }
    }
    .flexItem2{
        flex: 3;
        // margin-top:5/100rem;

    }
    .flexItem3{
        margin-right:20/100rem; 
            flex: 6;
                .addTotal{
            color: #43bf92;
            margin-left:20/100rem; 
            margin-right:10/100rem; 
        }
    }
    .flexItem4{
        box-sizing: border-box;
        display: flex;
        flex: 4;
        width: 100%;
        height:98/100rem;
        background: #43bf92;
        align-items: center;
        text-align: center;
        font-weight: 700;
        font-size: 30/2px;
        justify-content: center;
        a{
           color: #fff;
        }
        .addSettle{
            text-align: center;
            align-items: center;
        }
        .addMoney{
            text-align: center;
            align-items: center;
        }
    }
}
.hong{
    color: red;
}
.nameRedact{
    color: #525353;
}
               
      

</style>


