// express的基本用法
var express = require('express');
// 创建应用
var app = express();

// 监听端口
app.listen(4000);

// 处理get方式的 / 请求
app.get('/',function(req,res){
  res.end("this is / request");
});

// 处理get方式的 /a 请求
app.get('/a',function(req,res){
  var pathname = req._parsedUrl.pathname;
  var query = req.query;
  console.log(pathname) // 请求路径
  console.log(query) // 请求参数
  res.send('<h1>这是/a请求</h1>');
})
// 请求地址的匹配：
// 忽略大小写，忽略参数，忽略锚点

// 接收类似于 /show/xxx 的请求
// 其中，第二个层级为请求参数
// 参数的属性名为 name

// 请求的匹配按照从上往下依次匹配的顺序
// 如果上面有请求能匹配成功，则请求处理结束
// 如果匹配不成功，则继续往下依次匹配
// 直至匹配成功，或者无法处理
// 一般情况下，精确匹配放在上面，模糊匹配放在下面
app.get("/show/:name", function(req,res){
  console.log(req.params.name);
  res.send('冒号传参的方式');
})

// 请求地址还可以是正则表达式
// 匹配 /pic/xxx 的请求地址
// 使用正则时，变化的部分必须使用小括号包起来
// 每一组小括号就是一个参数
app.get(/\/pic\/(.{1,}\.(jpg|png|jpeg|gif))/,function(req,res){
  console.log(req.params[0]);
  res.send('图片路径')
})










// /show/img永远无法处理到的，被上面的请求给拦截了
app.get('/show/img',function(req,res){
  res.send('/show/img请求');
})


// 处理post方式的 /tijiao请求
app.post('/tijiao',function(req,res){
  res.end('post request');
})



