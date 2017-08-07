<template>
  <div class="collect">
    <headers hLeft="返回" hCont="我的收藏"></headers>
    <div class="tab">
        <span class="topic">话题</span>
        <span class="goods">商品</span>
    </div>
    <div class="container">
        <div class="article" v-for="(item,index) in collect.topics" :key="index">
            <p class="title">{{item.title}}</p>
            <div class="content clearfix">
              <img class="left" :src="item.imgUrl"></img>
              <div class="right">
                <div class="text">
                    {{item.cont}}
                </div>
                <span class="readCount"><i>{{item.readNum}}</i>次阅读</span>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
  name: 'myCollect',
  components:{
      headers
  },
  data () {
    return {
        collect:{}
    }
  },
  created(){
    let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
    let url = flag ? "/user/collect" : '/userInfo.json';
    this.$axios.get(url).then(res=>{
        let data = res.data;
        this.collect = flag ? data.collect : data.userCollects;
    }) 
  }
}
</script>
<style scoped lang="less">
  .collect{
      width:100%;
      background:#f1f1f1;
  }
  .tab{
      display:flex;
      height:72/100rem;
      border:1px solid #f1f1f1;
      margin-top:12/100rem;
      background:#fff;
  }
  .tab span{
      flex:1;
      font-size:36/100rem;
      text-align:center;
      line-height:72/100rem;
  }
  .tab .topic{
      border-right:1px solid #f1f1f1;
      color:#44be92;
  }
  .container{
      background:#fff;
      width:100%;
  }
  .article{
      height:292/100rem;
      border-bottom:1px solid #f1f1f1;
      padding:0 20/100rem;
  }
  .article .title{
      font-size:30/100rem;
      margin:28/100rem 0 32/100rem 0;
  }
  .article .content .left{
      width:230/100rem;
      height:160/100rem;
      float:left;
  }
  .article .content .right{
      margin-left:30/100rem;
      float:left;
      width:448/100rem;
      height:160/100rem;
      position:relative;
  }
  .article .content .right .text{
      font-size:26/100rem;
      line-height:1.5;
  }
  .article .content .right .readCount{
      font-size:26/100rem;
      text-align:right;
      position:absolute;
      right:0;
      bottom:0;
  }
  .readCount i{
      color:#c53336;
      font-style:normal;
  } 
</style>