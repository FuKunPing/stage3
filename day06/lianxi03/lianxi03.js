var fs = require('fs');
var fd = require('formidable');
var express = require('express');
var app = express();

app.listen(4000);

app.get('/',function(req,res){
    fs.readFile('./lianxi03.html',function(err,data){
        if(err){
            res.end('read file error cannot show the page');
            return ;
        }
        res.end(data);
    });
});

app.post('/tijiao',function(req,res){
    const form =fd();
    form.uploadDir='./image';
    form.parse(req, (err, fields, files) => {  
        var oldName=files.pic.path;
        var newName=files.pic.name;
        newName='./image/'+newName;
        //改名 fs.rename()异步方法
        fs.rename(oldName,newName,function(err){
            // console.log(err)
            // res.send('rename over');
            app.set('view engine','ejs');
            //设置根目录
            app.use(express.static('./image'));
            var pics = fs.readdirSync('./image');
            res.render('lianxi03',{pics:pics});
            // res.render('lianxi03.ejs');
        });
    });
    return ;
  });

/* app.set('view engine','ejs')
//设置根目录
app.use(express.static('./uploadPic'));
app.get('/show',function(req,res){
    var pics = fs.readdirSync('./uploadPic');
    res.render('zuoye',{pics:pics});
})   */







