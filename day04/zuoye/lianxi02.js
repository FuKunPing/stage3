var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
  // if(req.url=="/favicon.ico"){return}
  if(req.url=="/circle"){
    fs.readFile("./circle.html",function(err,data){
      if(err){
        res.end("read file error")
        return;
      }
      res.end(data)
    })
    return;
  }
  if(req.url=="/square"){
    fs.readFile("./square.html",function(err,data){
      if(err){
        res.end("read file error");
        return ;
      }
      res.end(data)
    })
    return ;
  }
  res.end("url error")

}).listen(4000)

