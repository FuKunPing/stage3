var express=require("express");
var fs=require("fs");
var app=express();

app.listen(4000);

//use：处理以/a开头的 /a/b可以
//get: /a  只能访问/a  

// app.use('/a',function(req,res){
//     res.end('<h1>/a</h1>');//用send可以写中文
// });

// app.use(express.static('./public'));//图片显示

// 自己写
/* app.use('/',function(req,res,next){
    console.log(req.url);//req._parsedUrl.pathname
    //如果请求地址不是/
    if(req.url!='/'){
        var data=fs.readFileSync('./public'+req.url);
        if(req.url=='/style/index.css'){//css因为MIME影响，需要设置格式
            res.setHeader('content-type','text/css');
        }
        res.send(data);
        return ;
    }
    // 请求地址是/ ,把请求放行，让后续的中间件来处理这个请求
    next();
}); */

app.use(rootDir('./public'));



app.get('/',function(req,res){
    res.render("test.ejs");
});

// 封装  app.use(function(req,res){});-->是要传一个函数，所以return function()
function rootDir(root){
    return function(req,res,next){
        if(req.url!='/'){
            var data=fs.readFileSync(root+req.url);
            if(req.url=='/style/index.css'){//css因为MIME影响，需要设置格式
                res.setHeader('content-type','text/css');
            }
            res.send(data);
            return ;
        }
        next();

    };

}

