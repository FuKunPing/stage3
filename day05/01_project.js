//创建服务，并启动监听
//当访问时，返回index.html页面的内容
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    res.setHeader("content-type","text/html;charset=utf-8");
    //获取每一个请求地址
    var url=req.url;
    console.log(url);
    if(req.url=='/favicon.ico'){
        return ;
    }
    if(url=='/'){
        url='/index.html';
    }

    fs.readFile('./project'+url,function(err,data){
        if(
            err){
            res.end("读取失败");
            return ;
        }
        res.end(data);
    });
}).listen(4000); 
