var http=require("http");
var fs=require("fs");
var url=require("url");

http.createServer(function(req,res){
    //小图标
    if(req.url=='/favicon.ico'){
        return ;
    }

    res.setHeader("content-type","text/html;charset=utf-8");

    var urlObj=url.parse(req.url,true);
    var path=urlObj.pathname; 
    var username=urlObj.query.username;
    var message=urlObj.query.message;

    //localhost:4000/tijiao
    if(path=='/tijiao'){
        /* fs.writeFile(username+".txt",message,function(err){
            if(err){
                console.log("创建失败");
                return ;
            }else{
                res.end("success");
                console.log("成功");
            }
           
        }); 
        return ; */
        fs.readFile('./text/'+username+'.txt','utf-8',function(err,data){
            if(err){
                fs.writeFile('./text/'+username+'.txt',message,function(err,data){
                    if(err){
                        res.end("创建失败");
                        return ;
                    }
                        res.end("创建成功");
                    
                });   
                return ;
            }

                fs.writeFile('./text/'+username+'.txt',message,function(err,data){
                    if(err){
                        res.end("创建失败");
                        return ;
                    }
                        res.end("创建成功");
                    
                });  
        });

        return ;

    }

    //localhost:4000/show
        if(path=='/show'){
           /*  var file=username+".txt";
            fs.readFile('./test/'+file,function(err,data){
                console.log(err);
                console.log(data);
                if(err){
                    res.end("读取文件错误");
                    return ;
                }
                res.end(username+"的内容为："+data);
            });
            return ; */
            //先读取文件夹
            fs.readdir('./text',function(err,files){
                if(err){
                    res.end("读取失败");
                    return ;
                }
                //读取成功
                //闭包
                (function inte(i){
                    if(i>=files.length){
                        res.end("显示完成");
                        return ;
                    }
                    console.log(i);
                    fs.readFile('./text'+files[i],'utf-8',function(err,data){
                        console.log(data);
                        if(err){
                            res.end(files[i]+"读取失败");
                            return ;
                        }
                        res.write(files[i]+"的内容是：");
                        res.write("<p>"+data[i]+"</p>");
                        i++;
                        inte(i);
                    });
                })(0)
            });
        }


    //其他请求
     //localhost:4000
     fs.readFile('./lianxi01.html',function(err,data){
        if(err){
            res.end("read error");
            console.log("111");
            return ;
        }
    res.end(data);     
});




}).listen(4000);