var fd=require("formidable");
var fs=require('fs');
var express=require("express");
var app=require();

app.listen(4000);

app.get('/',function(req,res){
    fs.readFile('./lianxi03.html',function(err,data){
        if(err){
            res.end('readfile err');
            return;
        }
    });

app.post('/tijiao',function(req,res){
    const form=fd();
    form.uploadDir='./image';
    form.parse(req,(err,fields,files)=>{
        var oldN=files.pic.path;
        var newN=files.pic.name;
        newN='./image/'+newN;
        fs.rename(oldN,newN,function(err){
            app.set('view engine','ejs');
            app.use(express.static('./image'));
            var pics=fs.readFileSync('./image');
            app.render('lianxi03',{pics:pics});
        });
    });
    return ;
});



});








