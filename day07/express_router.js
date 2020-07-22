var express=require("express");

// 引入student路由模块
var student=require('./route/student.js');

// 引入teacher路由模块
var teacher=require("./route/teacher.js");

var app=express();

app.listen(4000);

// 处理所有以/student开头的请求
app.use('/student',student);

app.use('/teacher',teacher);