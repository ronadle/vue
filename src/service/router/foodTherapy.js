var express = require("express");
var foodTherapyData = require("../data/foodTherapyData.js");
var foodTherapyrouter = express.Router();

//食疗坊展示商品列表
foodTherapyrouter.get("/list", function(req, res) {
	res.json(200,{
    list:foodTherapyData.foodTherapyList
  })
});

module.exports = foodTherapyrouter;