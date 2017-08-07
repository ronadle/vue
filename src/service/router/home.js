var express = require("express");
var homeData = require("../data/homeData.js");
var homerouter = express.Router();
var url = require('url');

//获取轮播图列表
homerouter.get("/banner",function(req, res) {
	res.json(200,{
    banner:homeData.homeBanner
  })
});
//获取每日列表
homerouter.get("/dailyList",(req,res)=>{
  res.json(200,{
    dailyList:homeData.homeDailyList
  })
})
//获取话题列表
homerouter.get("/topicList",(req,res)=>{
  res.json(200,{
    topicList:homeData.homeTopicList
  })
})
//获取话题详情
homerouter.get("/topicDetail",(req,res)=>{
  var id = url.parse(req.url, true).query.id-1;
  // console.log(homeData.topicDetail[id])
  res.json(200,{
    topicDetail:homeData.topicDetail[id]
  })
})
//话题详情推荐
homerouter.get("/topicRecommend",(req,res)=>{
  res.json(200,{
    topicRecommend:homeData.topicRecommend
  })
})
//测试结果为你推荐
homerouter.get("/testRecommend",(req,res)=>{
  res.json(200,{
    testRecommend:homeData.testRecommend
  })
})

module.exports = homerouter;