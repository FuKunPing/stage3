var http=require("http");
var fs=require("fs");
//解析字符串
var qs=require("querystring");

http.createServer(function(req,res){
    if(req.url=='/tijiao'&&req.method.toLowerCase()=='post'){
        // console.log(req);

        //nodejs为了追求数据传输的效率，采用一小段一小段传输的方式，这样就产生了两种状态：
        //数据传输过程中，数据传输完成


        var str='';//用于拼接每次传输的一小段数据
        //数据传输过程中
        //chunk表示每次传输的一小段数据
        req.on('data',function(chunk){
            str+=chunk;
        });
        //数据传输完成
        req.on('end',function(){
            console.log(str);
            //将字符串解析为对象
            str=qs.parse(str);
            console.log(str);
            res.end("over");
        });





        return ;
    }



    //其他请求
    fs.readFile("./05.html",function(err,data){
        if(err){
            res.end("<h1>read file error</h1>");
            return ;
        }
        res.end(data);
    })
}).listen(4000);