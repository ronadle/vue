<template>
  <div class="home">
    <div class="banner">
      <el-carousel height="3.35rem" arrow="never" autoplay>
        <el-carousel-item v-for="(item,index) in slides" :key="index">
          <img :src="item.src" :alt="item.title" >
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="daily">
        <div class="dailyItem" v-for="(item,index) in dailyList" :key="index">
          <router-link :to="'/'+item.path">
            <img :src="item.img" :alt="item.title">
            <span>{{item.title}}</span>
          </router-link>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in topicList" :key="index">
          <router-link :to="'/'+item.path+'/'+item.id">
            <h3>{{item.title}}</h3>
            <div class="topic">
              <img :src="item.img" alt="">
              <div class="topicCont">
                <p>{{item.cont}}</p>
                <div><span>{{item.readNum}}</span>次阅读</div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  created(){
    let flag = this.$axios.defaults.baseURL!== '/net/axsl/static';
    if(flag){
      this.$axios.get('/home/banner').then(res=>{
        this.slides = res.data.banner;
      });
      this.$axios.get('/home/dailyList').then(res=>{
        this.dailyList = res.data.dailyList;
      })
      this.$axios.get('/home/topicList').then(res=>{
        this.topicList = res.data.topicList;
      })
    }else{
      this.$axios.get('/homeData.json').then(res=>{
        let data = res.data;
        this.slides = data.homeBanner;
        this.dailyList = data.homeDailyList;
        this.topicList = data.homeTopicList;
      });
    }
  },
  data() {
    return {
      slides:[],
      dailyList:[],
      topicList:[]
    }
  }
}
</script>
<style scoped lang="less">
.home{
  padding-bottom:98/100rem;
}
.banner {
  height: 335/100rem;
  img {
    width: 100%;
    height: 335/100rem;
  }
}
.el-carousel__button{
  width: 10/100rem;
  height: 10/100rem;
  border-radius: 50%;
  border:1px solid #e3bf92;
  background:rgba(0,0,0,0);
}

.container {
  margin: 0 20/100rem;
}

.daily {
  display: flex;
  padding: 32/100rem 0 10/100rem;
  text-align: center;
  overflow: hidden;
  .dailyItem {
    margin: 0 20/100rem;
    font-size: 28/2px;
    img {
      width: 305/100rem;
      margin-bottom: 10/100rem;
      height: 186/100rem;
    }
    span{
      color: #676565;
    }
  }
}
li{
  padding:20/100rem 0;
  border-bottom: 1px solid #e8e8e8;
  h3{
    font-weight: normal;
    font-size:30/2px;
    color:#000;
  }
  .topic{
    overflow: hidden;
    display: flex;
    margin-top:20/100rem;
    color:#999;
    position: relative;
    font-size:26/2px;
    img{
      width:213/100rem;
      height: 143/100rem;
      margin-right: 20/100rem;
    }
    .topicCont{
      p{
        color:#b3b3b3;
      }
      div{
        position: absolute;
        right: 0;
        bottom: 0;
        span{
          color:#ff5555;
        }
      }
    }
  }
}
</style>
<style lang="less">
//饿了么轮播图样式
.el-carousel__button{
  width:20/100rem;
  height:20/100rem;
  border-radius:50%;
  border:1px solid #5ec39f;
}
.is-active .el-carousel__button{
  background:#5ec39f;
}
</style>
