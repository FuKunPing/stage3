let webSocket=require('websocket').server;
let http=require('http');

// 创建http服务
let httpServer=http.createServer(function(req,res){
    console.log('Received request for '+req.url);
    res.writeHead(404);
    res.end();
}); 

httpServer.listen(4000);
// 通过http服务器创建websocket服务
let wsServer=new webSocket({
    httpServer:httpServer,
    autoAcceptConnections:true
})
// 监听请求
/* wsServer.on('request',function(req){
    // 获取连接对象
    let connection=req.accept();
    // 监听客户端发送的数据
    connection.on('message',function(data){
        console.log('客户端发送的数据是：'+data)
    })
}) */

// 连接成功后监听
wsServer.on('connect',function(connection){
    connection.on('message',function(data){
        console.log('客户端发送的数据是',data);
    })
    setInterval(function(){
        connection.sendUTF('这里是服务器');
    },2000)
})

