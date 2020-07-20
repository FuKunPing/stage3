var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer(function(req,res){
  if(req.url=="/favicon.ico"){
    return ;
  }
  // 使用url模块将字符串格式的请求地址转换为对象
  //console.log(url);
  var urlStr = req.url;
  var urlObj = url.parse(urlStr,true);//true-->参数转换成对象
  // console.log("urlStr: ", urlStr)
  // console.log("urlObj: ", urlObj)
  var path = urlObj.pathname;
  var query = urlObj.query;
  var username = query.username;
  var password = query.password;
  res.setHeader("content-type","text/html;charset=utf-8")
  if(path=="/login"){
    res.end("你的用户名是："+username+"，密码是："+password)
    return ; 
  }
  // 其他情况，跳转到登录页面
  fs.readFile("./lianxi011.html",function(err,data){
    if(err){
      res.end("读取页面出错")
      return ;
    }
    res.end(data)
  })
  
}).listen(4000)