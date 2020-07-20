var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return ;
    }
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var path=urlObj.pathname;
    var query=urlObj.query;
    if(path=='btn1'){
        fs.readFile('./ajax.html',function(err,data){
            if(err){
               res.end('res error!');
            }
            res.setHeader('content-type','text/html;charset=utf-8');
            res.end("你好我叫小明");
        });

    }
}).listen(4000);