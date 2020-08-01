var express=require("express");
var app=express();;
var cookie=require("cookie-parser");
const cookieParser = require("cookie-parser");

app.listen(4000);

app.use(cookieParser("abc"));


// 设置cookie
app.get("/",function(req,res){
    res.cookie("cookie1",'aaaa');
    res.cookie("cookie2",'bbbb',{httpOnly:true});//httpOnly:只能通过服务器访问，无法使用脚本获取该cookie
    res.cookie("cookie3",'cccc',{domain:"localhost"});//domain:域名 只能通过localhost访问
    res.cookie('cookie4','dddd',{expires:new Date(Date.now()+5000)});//有效期为5秒
    res.cookie("cookie5",'eeee',{maxAge:1000*60*60*24*10});//最多保存10天
    res.cookie("cookie6",'pathpath',{path:"/patha"});//只能在指定的请求路径下访问
    res.cookie("cookie7",'signed',{signed:true});

    res.end();
});

app.get("/patha",function(req,res){
    res.end();
});

app.get("/pathb",function(req,res){
    res.end();
});

app.get("/getcookie",function(req,res){
    console.log(req.cookies);
    console.log(req.signedCookies);//获取signed的cookie
    res.end();
})

