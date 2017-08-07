<template>
  <div class="foodTherapy">
    <header>食疗坊</header>
    <div class="container">
      <div class="searchRecipes">
        <input type="text" placeholder="搜索食谱">
        <i class="serachIcon" @click="showMsg"></i>
      </div>
      <div class="icons">
        <ul>
          <li>
            <div class="iconsItem" v-for="(item,index) in iconListOne" :key="index">
              {{item}}
            </div>
          </li>
          <li class="secondLine">
            <div class="iconsItem" v-for="(item,index) in iconListTwo" :key="index">
              {{item}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="排毒" name="first">排毒</el-tab-pane>
          <el-tab-pane  label="抗皱" name="second">
            <ul class="antiWinkle">
              <router-link :to="{path:'/productDetails/'+item.id}" v-for="(item,index) in itemList" :key="index">
                <li>
                    <img :src="item.img" :alt="item.title">
                    <div class="itemInfo">
                      <h4>{{item.title}}</h4>
                      <p>{{item.cont}}</p>
                      <div class="priceInfo">
                        <i>{{item.price}}</i>
                        <span>{{item.buyNum}}人付款</span>
                        <b>. . .</b>
                      </div>
                    </div>
                </li>
              </router-link>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="祛斑" name="third">祛斑</el-tab-pane>
          <el-tab-pane label="美白" name="fourth">美白</el-tab-pane>
          <el-tab-pane label="护发" name="fifth">护发</el-tab-pane>
          <el-tab-pane label="润肤" name="sixth">润肤</el-tab-pane>
          <el-tab-pane label="祛痘" name="seventh">祛痘</el-tab-pane>
        </el-tabs>
      </div>
      <shopcart></shopcart>
  </div>
</template>
<script>
import shopcart from '../../components/common/shopCart';
export default {
  name: 'foodTherapy',
  components:{
    shopcart
  },
  created(){
    let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
    let url = flag ? "foodTherapy/list" : '/foodTherapyData.json';
    this.$axios.get(url).then(res=>{
        let data = res.data;
        this.itemList = flag ? data.list : data.foodTherapyList;
    })
  },
  data() {
    return {
      iconListOne: ['美容养颜', '保健调养', '补养', '减肥', '母婴'],
      iconListTwo: ['气节', '常见食疗', '人群功效', '维生素', '其他'],
      activeName: 'second',
      itemList:[]
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    showMsg(){
      alert('暂未开放搜索功能');
    }
  }
}
</script>
<style lang="less" scoped>
header {
  height: 88/100rem;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background: #43bf92;
  line-height: 88/100rem;
}

.container {
  margin: 0 20/100rem;
}

.searchRecipes {
  margin: 14/100rem 0;
  display: flex;
  height: 60/100rem;
  line-height: 60/100rem;
  background: #e7e7e7;
  width: 100%;
  border-radius: 10/100rem;
  input {
    flex: 1;
    box-sizing: border-box;
    padding-left: 20/100rem;
    outline: none;
    border: 0 none;
    background: #e7e7e7;
    border-radius: 10/100rem;
    color: #acacac;
  }
  i {
    width: 60/100rem;
    background: url(../../images/con_2.png) no-repeat;
    background-position: -93/150rem 12/150rem;
    background-size: 275/150rem 63/150rem;
  }
}

.icons {
  ul {
    border-bottom: 1px solid #f1f1f1;
    li {
      margin-bottom: 20/100rem;
      display: flex;
      .iconsItem {
        background: url(../../images/con_1.png) no-repeat;
        background-size: 1329/100rem 88/100rem;
        flex: 1;
        text-align: center;
        font-size: 12px;
        height: 34/100rem;
        padding-top: 76/100rem;
        &:nth-child(1) {
          background-position: 34/100rem -2px;
        }
        &:nth-child(2) {
          background-position: -100/100rem -2px;
        }
        &:nth-child(3) {
          background-position: -242/100rem -2px;
        }
        &:nth-child(4) {
          background-position: -376/100rem -2px;
        }
        &:nth-child(5) {
          background-position: -514/100rem -2px;
        }
      }
    }
    .secondLine {
      .iconsItem {
        &:nth-child(1) {
          background-position: -659/100rem -2px;
        }
        &:nth-child(2) {
          background-position: -790/100rem -2px;
        }
        &:nth-child(3) {
          background-position: -930/100rem -2px;
        }
        &:nth-child(4) {
          background-position: -1068/100rem -2px;
        }
        &:nth-child(5) {
          background-position: -1208/100rem -2px;
        }
      }
    }
  }
}
.antiWinkle{
  li{
    display: flex;
    padding:20/100rem;
    border:solid #f1f1f1;
    border-width: 14/100rem 0;
    color:#5f5f5f;
    font-size: 13px;
    &>img{
      width:284/100rem;
      height: 284/100rem;
      margin-right: 20/100rem;
    }
    .itemInfo{
      padding:18/100rem 0;
      h4{
        font-size: 16px;
        color:#333;
      }
      p{
        line-height: 40/100rem;
        margin:16/100rem 0;
      }
      .priceInfo{
        display: flex;
        text-align: center;
        height:40/100rem;
        line-height: 40/100rem;
        i{
          color:#ee2020;
        }
        span{
          flex:1;
          font-size:12px;
        }
        b{
          line-height: 20/100rem;
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
}

.el-tabs__nav-prev,
.el-tabs__nav-next {
  display: none;
}

.el-tabs__item {
  padding: 0;
  font-size: 14px;
  margin-right: 52/100rem;
  width:56/100rem;
}

.el-tabs__active-bar {
  display: none;
}
.el-tabs__header{
  border:0 none;
  margin:0 20/100rem;
}
</style>

