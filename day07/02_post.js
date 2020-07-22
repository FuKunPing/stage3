var express=require("express");
var app=express();
app.listen(4000);

// extended:true返回任意类型  false返回string/array
app.use(express.urlencoded({extended:true}));//给req添加body属性

app.get('/',function(req,res){
    res.render('form.ejs');
});

app.post('/tijiao',function(req,res){
    console.log(req.body);//{ sname: 'apple', sage: '20' }
    res.end('over');
});
