// 演示路由的参数选项
/*
caseSensitive:true  区分大小写
strict:true   严格匹配/ 请求地址
mergeParams:true  加了这个可以拿到父级的参数(参数名字一样的话就会覆盖)

*/

var express=require("express");
var router=require("./01_router_2.js");

var app=express();
app.listen(4000);

// 处理路由
app.use("/test/:name1",router);