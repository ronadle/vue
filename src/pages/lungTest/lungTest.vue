<template>
  <div class="lungTest">
    <headers hLeft="返回" hCont="肺部测试"></headers>
    <div class="container">
      <p class="testNum">1/2</p>
      <h4>你一天吸烟的频率?</h4>
      <ul class="options">
        <li v-for="(item,index) in optionsList" :key="index" @click="selected(index)" :class="{active:index == currentIndex}">{{item.option}}</li>
      </ul>
      <router-link to="/testResult">
        <button class="submit">提交</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import headers from '../../components/common/header';
  export default{
    name:'lungTest',
    components:{
      headers
    },
    data(){
      return{
        optionsList:[
          {
            option:'很少'
          },
          {
            option:'很多'
          },
          {
            option:'经常'
          },
          {
            option:'从不'
          }
        ],
        currentIndex:0
      }
    },
    methods:{
      selected(index){
        this.currentIndex = index;
      }
    }
  }
</script>
<style scoped lang="less">
.container{
  margin:0 20/100rem;
  color:#757575;
}
.testNum{
  padding:90/100rem 0 40/100rem 50/100rem;
}
h4{
  padding:0 0 70/100rem 50/100rem;
  font-weight:normal;
}
.options{
  width: 570/100rem;
  margin:0 auto;
  li{
    text-align: center;
    line-height: 80/100rem;
    height:80/100rem;
    border: 1px solid #e6e6e6;
    border-radius: 30/100rem;
    margin-bottom: 24/100rem;
  }
  .active{
    background:#44bf91;
    color:#fff;
  }
}
.submit{
  display: block;
  margin: 144/100rem auto 0;
  width:600/100rem;
  background:#43bf92;
  font-size: 18px;
  color:#fff;
  text-align: center;
  line-height: 90/100rem;
  outline: none;
  border: 0 none;
  border-radius: 10/100rem;
}
</style>