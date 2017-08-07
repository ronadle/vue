<template>
  <div class="calendar">
    <div class="month">
        <div class="year-month" @click="pickYear(currentYear,currentMonth)">
            <span class="choose-year">{{ currentYear }}年</span>
            <span class="choose-month">{{ currentMonth }}月</span>
        </div>    
    </div>
    <!-- 星期 -->
    <ul class="weekdays">
        <li>周一</li>
        <li>周二</li>
        <li>周三</li>
        <li>周四</li>
        <li>周五</li>
        <li>周六</li>
        <li>周日</li>
        </ul>
        <!-- 日期 -->
        <ul class="days">
        <li @click="pick(day)" v-for="(day,index) in days" :key="index">
        <!--本月-->
        <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
        <span v-else>
        <!--今天-->
        <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
        <span v-else>{{ day.getDate() }}</span>
        </span>
        </li>
    </ul>
    <div class="onebg"></div>
    <div class="list">
        <div class="body clearfix">
            <span>身体症状</span>
            <i></i>
        </div>
        <div class="target clearfix">
            <span>今日目标</span>
            <i></i>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'calendar',
  data () {
    return {
        currentDay: 1,
        currentMonth: 1,
        currentYear: 1970,
        currentWeek: 1,
        days: [],
    }
  },
  created: function() {
   this.initData(null);
  },
  methods: {
   initData: function(cur) {
        var date = cur ? new Date(cur):new Date();
        this.currentDay = date.getDate();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth() + 1;
        this.currentWeek = date.getDay(); // 1...6,0
        if (this.currentWeek == 0) {
            this.currentWeek = 7;
        }
        var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);
        console.log("today:" + str + "," + this.currentWeek);
        this.days.length = 0;
        // 今天是周日，放在第一行第7个位置，前面6个
        for (var i = this.currentWeek - 1; i >= 0; i--) {
            var d = new Date(str);
            d.setDate(d.getDate() - i);
            console.log("y:" + d.getDate());
            this.days.push(d);
        }
        for (var i = 1; i <= 35 - this.currentWeek; i++) {
            var d = new Date(str);
            d.setDate(d.getDate() + i);
            this.days.push(d);
        }
      },
    pick: function(date) {
        alert(this.formatDate( date.getFullYear() , date.getMonth() + 1, date.getDate()));
    },
    pickPre:function(year, month) {
        // setDate(0); 上月最后一天
        // setDate(-1); 上月倒数第二天
        // setDate(dx) 参数dx为 上月最后一天的前后dx天
        var d = new Date(this.formatDate(year , month , 1));
        d.setDate(0);
        this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
    },
    pickNext: function(year, month) {
        var d = new Date(this.formatDate(year , month , 1));
        d.setDate(35);
        this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
    },
    pickYear: function(year, month) {
        alert(year + "," + month);
    },
    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year,month,day){
        var y = year;
        var m = month;
        if(m<10) m = "0" + m;
        var d = day;
        if(d<10) d = "0" + d;
        return y+"-"+m+"-"+d
    }
  }
}
</script>
<style scoped lang="less">

.calendar{
    width:100%;
    height:1334/100rem;
    position:relative;
    padding-top:60/100rem;
    box-sizing:border-box;
}
* {
    box-sizing: border-box;
}

ul {
    list-style-type: none;
}
#calendar{
    width:80%;
    margin: 0 auto;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
}
.month {
    width: 100%;
    background: #fff;
    padding-bottom:10/100rem;
    border-bottom:1px solid #d1d2d1;
}
.year-month{
    text-align: center;
}
.year-month:hover {
    background: rgba(150, 2, 12, 0.1);
}

.choose-year {
    color:#525353;
}

.choose-month {
    color:#525353;
}

.arrow {
    padding: 30px;
}

.arrow:hover {
    background: rgba(100, 2, 12, 0.1);
}
.weekdays {
    margin: 0;
    padding: 30/100rem 0 20/100rem;
    display: flex;
    flex-wrap: wrap;
    color: #b5b7b6;
    justify-content: space-around;
}

.weekdays li {
    display: inline-block;
    width: 13.6%;
    text-align: center;
}

.days {
    padding: 0;
    background: #FFFFFF;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.days li {
    list-style-type: none;
    display: inline-block;
    width: 14.2%;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size:15px;
    color: #000;
}

.days li .active {
    padding: 8/100rem 12/100rem;
    border-radius: 50%;
    background: #43bf93;
    color: #fff;
}

.days li .other-month {
    padding: 5px;
    color: gainsboro;
}

.days li:hover {
    background: #e1e1e1;
}
.onebg{
    width:100%;
    height:20/100rem;
    background:#f1f1f1;
}
.list{
    width:100%;
    .body{
        height:100/100rem;
        padding-top:50/100rem;
        span{
            width:533/100rem;
            height:50/100rem;
            display:block;
            padding-left:50/100rem;
            margin-left:54/100rem;
            text-indent:26/100rem;
            line-height:50/100rem;
            float:left;
            background:url('../../images/siren_04.png') no-repeat 0 center;
            background-size:50/100rem 43/100rem;
        }
        i{
            display:block;
            width:21/100rem;
            height:31/100rem;
            background:url('../../images/manxing_10.png')no-repeat center center;
            float:right;
            margin-right:60/100rem;
            margin-top:8/100rem;
            
        }
    }
    .target{
        height:100/100rem;
        padding-top:50/100rem;
        span{
            width:533/100rem;
            height:50/100rem;
            line-height:50/100rem;
            display:block;
            padding-left:50/100rem;
            margin-left:54/100rem;
            text-indent:26/100rem;
            float:left;
            background:url('../../images/siren_05.png') no-repeat 0 center;
            background-size:50/100rem 43/100rem;
        }
        i{
            display:block;
            width:21/100rem;
            height:31/100rem;
            background:url('../../images/manxing_10.png')no-repeat center center;
            float:right;
            margin-right:60/100rem;
            margin-top:8/100rem;
        }
    }
}

  .calendar{
      width:100%;
      height:1334/100rem;
      position:relative;
      padding-top:60/100rem;
      box-sizing:border-box;
      .top{
          height:50/100rem;
          text-align:center;
          font-size:14px;
          border-bottom:1px solid #f1f1f1;
      }
      .week{
          width:700/100rem;
          column-count:7;
          color:#dfe0db;
          margin:30/100rem auto;
          li{
              text-align:center;
          }
      }
      .day{
          width:700/100rem;
          color:#dfe0db;
          margin:0 auto;
          padding-left:10/100rem;
          li{
              float:left;
              width:100/100rem;
              text-align:center;
              height:124/100rem;
              span{
                  width:64/100rem;
                  height:64/100rem;
                  display:block;
                  border-radius:50%;
                  line-height:64/100rem;
                  text-align:center;
              }
            }
      }
      .onebg{
          width:100%;
          height:20/100rem;
          background:#f1f1f1;
      }
      .list{
          width:100%;
          .body{
              height:100/100rem;
              padding-top:50/100rem;
              span{
                  width:533/100rem;
                  height:50/100rem;
                  display:block;
                  padding-left:50/100rem;
                  margin-left:54/100rem;
                  text-indent:26/100rem;
                  line-height:50/100rem;
                  float:left;
                  background:url('../../images/siren_04.png') no-repeat 0 center;
                  background-size:50/100rem 43/100rem;
              }
              i{
                  display:block;
                  width:21/100rem;
                  height:31/100rem;
                  background:url('../../images/manxing_10.png')no-repeat center center;
                  float:right;
                  margin-right:60/100rem;
                  margin-top:8/100rem;
                  
              }
          }
          .target{
              height:100/100rem;
              padding-top:50/100rem;
              span{
                  width:533/100rem;
                  height:50/100rem;
                  line-height:50/100rem;
                  display:block;
                  padding-left:50/100rem;
                  margin-left:54/100rem;
                  text-indent:26/100rem;
                  float:left;
                  background:url('../../images/siren_05.png') no-repeat 0 center;
                  background-size:50/100rem 43/100rem;
              }
              i{
                  display:block;
                  width:21/100rem;
                  height:31/100rem;
                  background:url('../../images/manxing_10.png')no-repeat center center;
                  float:right;
                  margin-right:60/100rem;
                  margin-top:8/100rem;
              }
          }
      }
  }

  .calendar{
      width:100%;
      padding-top:60/100rem;
      box-sizing:border-box;
      background:#fff;
      .top{
          height:50/100rem;
          text-align:center;
          font-size:14px;
          border-bottom:1px solid #f1f1f1;
      }
      .week{
          width:700/100rem;
          column-count:7;
          color:#dfe0db;
          margin:30/100rem auto;
          li{
              text-align:center;
          }
      }
      .day{
          width:700/100rem;
          color:#dfe0db;
          margin:0 auto;
          padding-left:10/100rem;
          li{
              float:left;
              width:100/100rem;
              text-align:center;
              height:124/100rem;
              span{
                  width:64/100rem;
                  height:64/100rem;
                  display:block;
                  border-radius:50%;
                  line-height:64/100rem;
                  text-align:center;
              }
            }
      }
      .onebg{
          width:100%;
          height:20/100rem;
          background:#f1f1f1;
      }
      .list{
          width:100%;
          .body{
              height:100/100rem;
              padding-top:50/100rem;
              span{
                  width:533/100rem;
                  height:50/100rem;
                  display:block;
                  padding-left:50/100rem;
                  margin-left:54/100rem;
                  text-indent:26/100rem;
                  line-height:50/100rem;
                  float:left;
                  background:url('../../images/siren_04.png') no-repeat 0 center;
                  background-size:50/100rem 43/100rem;
              }
              i{
                  display:block;
                  width:21/100rem;
                  height:31/100rem;
                  background:url('../../images/manxing_10.png')no-repeat center center;
                  background-size:12/100rem 23/100rem;
                  float:right;
                  margin-right:60/100rem;
                  margin-top:8/100rem;
                  
              }
          }
          .target{
              height:100/100rem;
              padding-top:50/100rem;
              span{
                  width:533/100rem;
                  height:50/100rem;
                  line-height:50/100rem;
                  display:block;
                  padding-left:50/100rem;
                  margin-left:54/100rem;
                  text-indent:26/100rem;
                  float:left;
                  background:url('../../images/siren_05.png') no-repeat 0 center;
                  background-size:50/100rem 43/100rem;
              }
              i{
                  display:block;
                  width:21/100rem;
                  height:31/100rem;
                  background:url('../../images/manxing_10.png')no-repeat center center;
                  background-size:12/100rem 23/100rem;
                  float:right;
                  margin-right:60/100rem;
                  margin-top:8/100rem;
              }
          }
      }
  }
</style>
