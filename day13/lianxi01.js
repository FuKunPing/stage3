var express=require("express");
var app=express();
var cookieParser=require("cookie-parser");

app.listen(4000,function(err){
    // console.log(err);//undefined
    err?console.log("启动失败",err):console.log("启动成功");
});

app.use(cookieParser("keyboard cat"));

app.get("/",function(req,res){
    // 获取cookie，判断用户有没有登陆过
    var username=req.cookies.username;
    console.log(username);
    if(username){
        // 找到了username的cookie,说明之前已经登录过，不需要再登录啦
        res.send("<h1>欢迎你,"+username+"</h1>");
        return ;
    }
    // 没有找到username的cookie，说明没登录，跳转到登录界面
    res.send('<form action="/login">用户名:<input type="text" name="username">密码:<input type="password" name="password"><button type="submit">登录</button></form>');
});

app.get("/login",function(req,res){
    var username=req.query.username;
    var password=req.query.password;
    if(username=="zhangsan" && password=='123'){
        // 登录成功，保存登录状态
        res.cookie("username",username);
        res.send("<h1>登录成功</h1>");
    }else{
        res.send("<h1>用户名或密码错误</h1>");
        
    }
})