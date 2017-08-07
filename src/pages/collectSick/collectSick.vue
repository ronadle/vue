<template>
    <div class="collectSick">
        <headers hLeft="返回" hCont="选择性慢性病"></headers>
        <ul>
            <li><span>减重</span></li>
            <li><span>痛风</span></li>
            <li><span>血糖升高</span></li>
            <li><span>脂肪肝</span></li>
            <li><span>慢性肠胃炎</span></li>
            <li><span>慢性支气管炎</span></li>
            <li><span>血脂升高</span></li>
            <li><span>血糖升高</span></li>
        </ul>
    </div>
</template>
<script>
import headers from '../../components/common/header'
export default {
  name: 'collectSick',
  components:{
      headers
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
  .collectSick{
      width:100%;
      height:1318/100rem;
      background:#f1f1f1;
  }
  .collectSick ul{
      margin-top:16/100rem;
      background:#fff;
  }
  .collectSick ul li{
      width:710/100rem;
      height:76/100rem;
      font-size:26/100rem;
      border-bottom:1px solid #f1f1f1;
      margin:20/100rem;
  }
  .collectSick ul li span{
      line-height:76/100rem;
  }
</style>