<template>
  <div class="expresseEition">
    <div class="expressHead">
          <headers hLeft="放弃" hCont="简易版体质测试"></headers>
    </div>
    <div class="expressContent">
        <p class="contentTitle">1.出行坐飞机起飞降落时感到耳痛、头痛。</p>
        <ul>
          <li>A.没有</li>
          <li>B.有，但程度浅</li>
          <li>C.有，程度深</li>
          <li>D.有</li>
        </ul>
    </div>
    <div class="expressContent">
        <p class="contentTitle">2.您容易有黑眼圈吗？</p>
        <ul>
          <li>A.没有</li>
          <li>B.有，但程度浅</li>
          <li>C.有，程度深</li>
          <li>D.有</li>
        </ul>
    </div>
    <div class="expressContent">
        <p class="contentTitle">3.您容易精神紧张、焦虑不安吗？</p>
        <ul>
          <li>A.没有</li>
          <li>B.有，但程度浅</li>
          <li>C.有，程度深</li>
          <li>D.有</li>
        </ul>
    </div>

  </div>
</template>

<script>
import headers from '../../components/common/header';
export default {
  name: 'expressEdition',
      components:{
      headers
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.expresseEition{
    width:100%;
  height:1334/100rem;
  background:#fff;
}
.titleLeft{
  display: inline-block;
  font-size:30/2px;
  color:#fff;
  text-align: left;
  line-height: 88/100rem;
  margin-left:108/100rem;
  background:url("../../images/x_03.png") -10px no-repeat;
}

.titleRight{
  font-size:36/2px;
  color:#fff;
  text-align: center;
  // margin-top:-120/100rem;
}
.expressContent{
  width:90%;
  height:420/100rem;
  margin:0 auto;
  margin-top:74/100rem;
  border-bottom:1px solid #c3c3c3;
}
.contentTitle{
  font-size:30/2px;
  margin-bottom:90/100rem;

}
.expressContent li{
  font-size:30/2px;
  margin-bottom:20/100rem;
}
</style>
