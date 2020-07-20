var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return ;
    }
    //转换请求地址
    var urlObj=url.parse(req.url,true);
    //请求路径
    var path=urlObj.pathname;
    //设置响应头
    res.setHeader("content-type","text/html;charset=utf-8");
    //判断请求地址
    if(path=='/register'){
        //获取请求参数
        var username=urlObj.query.username;
        var password=urlObj.query.password;
        //读取users.json
        fs.readFile('users.json','utf-8',function(err,data){
            if(err){
                //出错，没有读取到文件,就创建
                var user=[{"username":username,"password":password}];
                user=JSON.stringify(user);
                fs.writeFile("users.json",user,function(err){
                    if(err){
                        res.end('注册失败');
                        return ;
                    }
                    res.end("注册成功！！！");
                })
                return ;
            }

            //users.json存在，读取到了原有的数据
            //data是字符串，将其转换为json对象
            data=JSON.parse(data);//[{},{}]
            data.push({"username":username,"password":password});
            //重新将data转换成字符串，写入文件
            data=JSON.stringify(data);
            fs.writeFile("users.json",data,function(err){
                if(err){
                    res.end("注册失败");
                    console.log(err);
                    return ;
                }
                res.end("注册成功");
            })
        })


    
        return ;
    }
        //其他请求，返回表单页面
        fs.readFile('./lianxi01.html',function(err,data){
            if(err){
                res.end("读取页面失败");
                return ;
            }
            //读取成功，返回页面给浏览器
            res.end(data);
        })




}).listen(4000);