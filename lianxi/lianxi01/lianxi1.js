var http = require('http');
var fs = require('fs')
var url = require('url')


http.createServer(function(req,res){
  var urlObj = url.parse(req.url,true);

  var path = urlObj.pathname;
  
  // 接收数据
  if(path=="/tijiao"){
    res.setHeader("content-type","text/html;charset=utf-8")
    var query = urlObj.query
    var username = query.username
    var message = query.message
    // 将message写入到username.txt文件中
    var file = "users/"+username+".txt";
    fs.writeFile(file,message+"\n",{flag:"a"},function(err){
      if(err){
        res.end("写错了")
        return ;
      }
      res.end("成功了")
    })
    return;
  }
  // 显示数据
  if(path=="/show"){
    res.setHeader("content-type","text/plain;charset=utf-8")
    fs.readdir("users",function(err,files){
      if(err){
        res.end("服务器问题")
        return ;
      }
      (function iterate(i){
        if(i>=files.length){
          res.end()
          return;
        }
        fs.readFile('users/'+files[i],function(err,data){
          if(err){
            res.end("Error")
            return
          }
          res.write(files[i])
          res.write("\n")
          res.write(data)
          
          res.write("\n----------------\n")
          i++
          iterate(i)
        })
      })(0)
    })
    return ;
  }
  res.setHeader("content-type","text/html;charset=utf-8")
  // 其他，显示页面
  fs.readFile("lianxi1.html",function(err,data){
    if(err){
      res.end("出错了")
      return;
    }
    res.end(data)
  })




}).listen(4000)

