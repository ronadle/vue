var express = require("express");
var personalData = require("../data/personalData.js");
var personalrouter = express.Router();

//私人订制选项
personalrouter.get("/checkList", function(req, res) {
	res.json(200,{
    checkList:personalData.checkList
  })
});
//症状调理推荐
personalrouter.get("/sysptomRecommend", function(req, res) {
	res.json(200,{
    sysptomRecommend:personalData.sysptomRecommend
  })
});
module.exports = personalrouter;