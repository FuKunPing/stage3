var express=require("express");
var MongoClient=require("mongodb").MongoClient;
var app=express();
app.listen(4000);
// 设置视图模板
app.set("view engine",'ejs');
// 设置post请求方式
app.use(express.urlencoded({extended:true}));

// 设置数据库
var url="mongodb://localhost:27017";
var opt={useUnifiedTopology:true};

app.get("/",function(req,res){
    // 获取用户名
    res.render("index"); 
});


//  /login请求
app.get('/login',function(req,res){
    // 获取用户名
    var name=req.query.username;
    console.log(name);
    // 连接数据库
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            res.send("连接数据库失败");
            return ;
        };
        var col=client.db("user").collection("user");
        // 读取数据库的数据
        col.find({}).toArray(function(arr,docs){
            if(err){
                res.send("读取失败");
                client.close();
                return ;
            };
            // 读取成功
            var userVip=docs.username;
            console.log(userVip);
            if(name==userVip){
                // res.render('index',{msg:name+"用户名已存在"});
                return ;
            }else{
                // res.render("index",{msg:"可以使用"});
            }
            client.close();
        });
    });
    
});


