//1.引入模块
var http = require("http");

//2.创建服务
var server = http.createServer(function(req,res){
    //4.返回响应给浏览器，参数就是返回的数据
    res.end("Hello Node!");
});

//3.开启监听，端口号为4000
server.listen(4000);