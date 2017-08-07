var express = require("express");
var userData = require("../data/userInfo.js");
var userrouter = express.Router();
var url = require('url');

//用户基本信息
userrouter.get("/info", function(req, res) {
	res.json(200,{
    info:userData.userInfo
  })
});
//用户朋友和家人
userrouter.get("/friends", function(req, res) {
	res.json(200,{
    friends:userData.friends
  })
});
//用户收藏
userrouter.get("/collect", function(req, res) {
	res.json(200,{
    collect:userData.userCollects
  })
});
//用户收到的消息
userrouter.get("/receiveMsg", function(req, res) {
	res.json(200,{
    receiveMsg:userData.receiveMsg
  })
});
//我的订单
userrouter.get("/order", function(req, res) {
	res.json(200,{
    order:userData.productList
  })
});
//用户订单列表
userrouter.get("/productList", function(req, res) {
  var id = url.parse(req.url, true).query.id-16;
  // console.log(id);
	res.json(200,{
    productList:userData.userOrder[id]
  })
});
//收货地址
userrouter.get("/getAddress",function(req,res){
  res.json(200,{
    getAddress:userData.getAddress
  })
})
module.exports = userrouter;