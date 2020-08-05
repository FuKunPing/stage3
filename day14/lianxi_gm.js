var express=require("express");
var gm=require('gm');
var app=express();
app.listen(4000);

app.use(express.static('./public'));

app.get('/',function(req,res){
    res.render("cut.ejs");
});

app.get('/cut',function(req,res){
    var query=req.query;
    var w=query.w;
    var h=query.h;
    var x=query.x;
    var y=query.y;
    var img=query.img;//   /img/sago.jpg
    gm('./public'+img).crop(w,h,x,y).write('./cut.jpg',function(err){
        console.log(err);
        res.send("data");
    });




})