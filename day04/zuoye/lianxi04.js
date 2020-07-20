var http = require("http");
var fs = require('fs');
var url = require("url");

http.createServer(function(req,res){
  // 登录请求
  res.setHeader("content-type","text/html;charset=utf-8");
  // 将字符串的地址转换为对象
  var urlObj = url.parse(req.url,true)
  var path = urlObj.pathname
  var query = urlObj.query
  if(path=="/login"){
    var username = query.username;
    var password = query.password;
    fs.readFile("./users.json",function(err,data){
      if(err){
        res.end("服务器故障，稍后再试")
        return ;
      }
      data = data.toString();
      var obj = JSON.parse(data);
      var flag = false; // 假设用户密码错误
      for(var i=0;i<obj.length;i++){
        var u = obj[i];
        if(username==u.username&password==u.password){
          flag = true; // 假设错误
          break;
        }
      }
      if(flag){
        res.end("登录成功")
      }else{
        res.end("用户名或密码错误")
      }
      
    })
    return ;
  }
  // 其他请求
  fs.readFile("./lianxi04.html",function(err,data){
    if(err){
      res.end("ERROR")
      return ;
    }
    res.end(data);
  })
}).listen(4000)