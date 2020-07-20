var http = require("http")
var router = require("./router.js");


http.createServer(function(req,res){
  res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
  if(req.url=="/"){
    router.showIndex(req,res)
    return ;
  }
  if(req.url=="/info"){
    router.showInfo(req,res)
    return;
  }
  // 其他请求
  router.showErr(req,res)
}).listen(4000)