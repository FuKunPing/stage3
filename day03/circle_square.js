var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }
    if(req.url=='/circle'){
        fs.readFile('./circle.html',function(err,data){
            if(err){
                res.end('read error');
                return ;
            }
            res.end(data);
        })
    }else if(req.url=='/square'){
        fs.readFile('./square.html',function(err,data){
            if(err){
                res.end('read error');
                return ;
            }
            res.end(data);
        });
    }else{
        res.end('other url read error');
    }
    

}).listen(4000);

