<template>
  <div class="dailyRecord">
    <router-link :to="{path:'/personalOrder/calendar'}">
       <div class="calendar">
        <img src="../../images/siren_3.png" alt="">
      </div>
    </router-link>
    <dl>
      <div>
        <dt class="title">
          <img class="icon" src="../../images/siren_04.png" alt="">
          <span>身体症状</span>
          <i class="downBtn" @click="dropDown(1)"></i>
        </dt>
        <dd>
          <div class="checkList">
            <el-checkbox-group v-model="checkList" v-show="showList1">
              <ul>
                <li>
                  <div class="checkboxItem"><el-checkbox label="嗓子痛"></el-checkbox></div>
                  <div class="checkboxItem"><el-checkbox label="手脚冰冷发麻"></el-checkbox></div>
                </li>
                <li>
                  <div class="checkboxItem"><el-checkbox label="口腔溃疡"></el-checkbox></div>
                  <div class="checkboxItem"><el-checkbox label="脚脖子疼"></el-checkbox></div>
                </li>
                <li>
                  <div class="checkboxItem"><el-checkbox label="声音沙哑肿痛"></el-checkbox></div>
                  <div class="checkboxItem"><el-checkbox label="流行性感冒"></el-checkbox></div>
                </li>
              </ul>
            </el-checkbox-group>
            <div class="addBtn">
              <span>自定义<i class="el-icon-plus"></i></span>
            </div>
          </div>
        </dd>
        <dt class="title">
          <img class="icon" src="../../images/siren_05.png" alt="">
          <span>今日目标</span>
          <i class="downBtn" @click="dropDown"></i>
        </dt>
        <dd>
          <div class="checkList">
            <el-checkbox-group v-model="checkList" v-show="showList2">
              <ul>
                <li>
                  <div class="checkboxItem"><el-checkbox label="吃早饭"></el-checkbox></div>
                  <div class="checkboxItem"><el-checkbox label="早睡早起"></el-checkbox></div>
                </li>
                <li>
                  <div class="checkboxItem"><el-checkbox label="按时吃药"></el-checkbox></div>
                  <div class="checkboxItem"><el-checkbox label="八杯水"></el-checkbox></div>
                </li>
                <li>
                  <div class="checkboxItem"><el-checkbox label="排便"></el-checkbox></div>
                  <div class="checkboxItem"><el-checkbox label="健走3000步"></el-checkbox></div>
                </li>
              </ul>
            </el-checkbox-group>
            <div class="addBtn">
              <span>自定义<i class="el-icon-plus"></i></span>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'dailyRecord',
  created(){
    let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
    let url = flag ? "/personal/checkList" : '/personalData.json';
    this.$axios.get(url).then(res=>{
      this.checkList= res.data.checkList;
    })
  },
  data() {
    return {
      showList1:1,
      checkList:[],
      showList2:1,
    }
  },
  methods:{
    dropDown(flag){
      if(flag==1){
        this.showList1 = !this.showList1;
      }else{
        this.showList2 = !this.showList2;
      }
    }
  }
}
</script>
<style lang="less" scoped>
.calendar {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 72/100rem;
    height: 72/100rem;
  }
}
dl{
  .title{
    display:flex;
    position:relative;
    align-items:center;
    margin:30/100rem 50/100rem 0;
    padding-bottom: 8/100rem;
    border-bottom:3/100rem solid #43bf92;
    .downBtn{
      background:url(../../images/siren_06.png) no-repeat;
      background-size:28/100rem 16/100rem;
      width:28/100rem;
      height:16/100rem;
      position:absolute;
      right:0;
    }
    .icon{
      width:50/100rem;
      height:43/100rem;
      margin-right:20/100rem;
   }
  }
}
.checkList{
  padding:42/100rem 50/100rem;
}
.addBtn span{
  margin:0 auto;
  display: flex;
  width:210/100rem;
  line-height: 48/100rem;
  border:1px solid #bfbfbf;
  padding:8/100rem 20/100rem;
  box-sizing: border-box;
  color:#bfbfbf;
  border-radius: 48/100rem;
  position: relative;
  font-size:15px;
  i{
    position: absolute;
    right:20/100rem;
    top:15/100rem;
    
  }
}
</style>
<style lang="less" >
.el-checkbox-group{
  ul{
    li{
      display:flex;
      margin-bottom:16/100rem;
      height:60/100rem;
      .checkboxItem{
        flex:1;
        padding-left:30/100rem;
        box-sizing: border-box;
      }
    }
  }
}
.el-checkbox__inner{
  border: 1px solid #43bf92;
}
.el-checkbox__label{
  font-size:13px;
  color:#525252;
  padding:8/100rem 18/100rem;
  border:1px solid #bfbfbf;
  border-radius: 30/100rem;
  margin-left:10/100rem;
}

</style>
