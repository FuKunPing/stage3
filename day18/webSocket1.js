let webSocket=require('ws');

// 创建webSocket服务器
let wss=new webSocket.Server({
    port:4000
});

// 连接成功后，得到一个webSocket对象，用于连接数据的接收和发送
wss.on('connection',ws=>{
    //监听客户端发送过来的数据
    ws.on('message',msg=>{
        console.log(msg);
        msg=msg.split('').reverse().join('')
        ws.send(msg);
    }) 
})