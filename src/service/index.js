var express = require("express");
var app = express();
var foodTherapy = require("./router/foodTherapy.js");
var home = require("./router/home.js");
var personal = require("./router/personal.js");
var user = require("./router/user.js");
// var bodyParser = require("body-parser");

app.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

app.use("/user", user);
app.use("/foodTherapy", foodTherapy);
app.use("/home", home);
app.use("/personal",personal)

app.listen(3001, function() {
	console.log("服务器启动吧");
})