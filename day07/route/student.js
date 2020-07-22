// 创建student路由
var express=require("express");

// 创建路由对象
var router=express.Router();

// 使用路由对象处理具体的请求
router.get('/',function(req,res){
    res.send("<h1>/student请求</h1>");
});

//   /student/login
router.get('/login',function(req,res){
    res.send('<h1>学生的login请求</h1>');
});
//   /student/logout
router.get('/logout',function(req,res){
    res.send("<h1>学生的logout请求</h1>");
});
//   /student/choose
router.get('/choose',function(req,res){
    res.send("<h1>学生的choose请求</h1>");
});

// 暴露路由对象
module.exports=router;


