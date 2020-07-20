var http=require("http");


var server=http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return ;
    }
        //console.log(req.url);
        // var params=req.url.split('?')[1].split('&');  一步写
        var url=req.url;//  /?username=aaa&password=123
        var msg=url.split('?')[1].split('&');
        console.log(msg);//[ 'username=aaa', 'password=123' ]
        var username,password;
        for(var i=0;i<msg.length;i++){
            var arr=msg[i].split('=');
            if("username"==arr[0]){
                username=arr[1];
            }
            if("password"==arr[0]){
                password=arr[1];
            }

        }
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end("你的用户名是："+username+"  密码是："+password);
 

   
});

server.listen(4000);