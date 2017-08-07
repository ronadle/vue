<template>
  <div class="topicDetail">
    <headers hLeft="返回"></headers>
    <div class="container">
      <h1>{{topicDetail.titleLeft}}<strong>{{topicDetail.strong}}</strong>{{topicDetail.titleRight}}
      </h1>
      <div class="topicMain">
        <h4>作者:
          <span>{{topicDetail.author}}</span>
        </h4>
        <img :src="topicDetail.img" alt="">
        <p class="preface">{{topicDetail.preface}}
        </p>
        <dl>
          <div  v-for="(item,index) in topicDetail.contList" :key="index" >
            <dt>{{item.title}}</dt>
            <dd>
              <p>{{item.cont}}</p>
            </dd>
          </div>
        </dl>
      </div>
      <div class="recommend">
        <h3>为你推荐</h3>
        <ul>
          <li>
            <i>食谱</i>
            <img :src="topicRecommend.receipes[0]" alt="">
          </li>
          <li>
            <i>单品</i>
            <ul class="singleItem">
              <li>
                <img :src="topicRecommend.singleItem[0]" alt="">
                <b></b>
              </li>
              <li>
                <img :src="topicRecommend.singleItem[1]" alt="">
                <b></b>
              </li>
            </ul>
          </li>
          <span class="shopCart">
            <router-link :to="{path:'/shopClose'}">
              <img src="../../images/siren_07.png" alt="">
            </router-link>
          </span>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header';
export default {
  name: 'topicDetail',
  components: {
    headers
  },
  data() {
    return {
      topicDetail:{},
      topicRecommend:{
        receipes:[],
        singleItem:[]
      }
    }
  },
  created(){
    let id = this.$route.params.id;
    if(this.$axios.defaults.baseURL!== '/net/axsl/static'){
      this.$axios.get("/home/topicDetail?id="+id)
      .then(respone => {
        this.topicDetail = respone.data.topicDetail;
      })
      this.$axios.get("/home/topicRecommend")
      .then(respone => {
        this.topicRecommend = respone.data.topicRecommend;
      })
    }else{
      this.$axios.get("/homeData.json").then(res=>{
        let data = res.data;
        this.topicDetail = data.topicDetail[id-1];
        this.topicRecommend = data.topicRecommend;
      })
    }  
  }
}
</script>
<style scoped lang="less">
@mainGreen:#43bf92;
.container {
  margin: 0 20/100rem;
}
h1 {
  font-size: 26px;
  font-weight: normal;
  color: @mainGreen;
  text-align: center;
  line-height: 120/100rem;
  padding: 12/100rem 0;
  border-bottom: 1px solid #c8c8c8;
  strong {
    color: #ff0000;
    font-size: 30px;
    font-weight: normal;
  }
}
.topicMain{
  font-size: 12px;
  h4{
    font-weight: normal;
  }
  p{
    line-height: 40/100rem;
  }
  .preface{
    color:@mainGreen;
    margin-bottom:40/100rem;
  }
  img{
    display: block;
    margin:24/100rem auto 12/100rem;
    width:334/100rem;
    height: 220/100rem;
  }
  dl{
    padding-bottom:100/100rem;
    border-bottom:1px solid #c8c8c8;
    dt{
      color:@mainGreen;
      font-size:14px;
      padding:10/100rem 0;
    }
  }
}
.recommend{
  h3{
    font-size: 15px;
    font-weight: normal;
    margin-bottom:48/100rem;
  }
  ul{
    position: relative;
    li{
      display: flex;
      align-items: center;
      margin-bottom:44/100rem;
      i{
        padding:0 42/100rem;
      }
      img{
        width:290/100rem;
        height:112/100rem;
      }
      .singleItem{
        display: flex;
        li{
          margin-bottom: 0;
          position: relative;
          margin-right: 94/100rem;
          img{
            width:98/100rem;
            height: 98/100rem;
          }
          b{
            position: absolute;
            background:url(../../images/jia.png) no-repeat;
            background-size:34/100rem;
            right:-28/100rem;
            top:-28/100rem;
            width:34/100rem;
            height: 34/100rem;
            display: block;
          }
        }
      }
    }
    .shopCart{
      position: absolute;
      right:0;
      bottom:0;
      img{
        width:84/100rem;
        height:84/100rem;
      }
    }
  }
}
</style>