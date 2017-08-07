<template>
    <div class="profession">
        <headers hLeft="放弃" hCont="专业版体质测试"></headers>
        <div class="container" >
            <div class="problem" v-for="(item,index) in problemList" :key="index">
                <p class="title" @click="toggle(index)" >{{item}}</p>
                <ul class="clearfix"  v-show="isDrop" >
                    <li>A.没有</li>
                    <li>B.有，但程度浅</li>
                    <li>C.有，程度深</li>
                    <li>D.有</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
  name: 'profession',
  components:{
      headers
  },
  data () {
    return {
        problemList:['1.出行坐飞机起飞降落时感到耳痛、头痛。','2.您面色晦暗或容易出现褐斑吗？','3.您容易有黑眼圈吗？','4.您皮肤或口唇干吗？','5.您面部两颧潮红或偏红吗？','6.您口唇颜色偏暗吗？','7.您有额部油脂分泌多的现象吗？','8.您容易生痤疮或疮疖吗？','9.您的皮肤在不知不觉中会出现青紫瘀斑吗？','10.您容易疲乏吗？','11.您容易精神紧张、焦虑不安吗？'],
        isDrop:0,
    }
  },
  methods:{
    toggle(index){
      if(index == 0){
        this.isDrop =!this.isDrop
      }
    }
  }
}
</script>
<style scoped lang="less">
  .profession{
      width:100%;
  }
  .container{
    width:686/100rem;
    margin:0 auto;
    margin-top:30/100rem;
  }
  .container .problem{
    border-bottom:1px solid #f1f1f1;
  }
  .container .problem p{
    padding-left:30/100rem;
    margin:24/100rem 0;
  }
  .container .problem ul{
    margin-left:56/100rem;
  }
  .container .problem ul li{
    width:300/100rem;
    height:50/100rem;
    margin-right:10/100rem;
    float:left;
  }
</style>
