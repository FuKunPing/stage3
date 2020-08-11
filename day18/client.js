// socket客户端
let WebSocketClient = require('websocket').client;

// 创建客户端对象
let client = new WebSocketClient();

// 连接失败
client.on('connectFailed', function(error) {
    console.log('Connect Error: ',error.toString());
});

// 连接成功,获得连接对象connection
client.on('connect',function(connection){
    console.log('连接成功');
    // 监听服务器端返回的信息
    connection.on('message',message=>{
        console.log('服务器端说：',message);
    })
    setInterval(function(){
        connection.sendUTF('你好，我是客户端');
    },2000)
    
})

// 开始连接服务器
client.connect('http://localhost:4000');
