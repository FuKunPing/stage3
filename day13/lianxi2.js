var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();
var User=require('./db.js');

app.listen(4000);

app.use(cookieParser("keyboard cat"));
app.set("view engine",'ejs');
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    // 判断是否登录过
    var username=req.cookies.username;
    if(username){
        res.send("<h1>欢迎你："+username+"</h1>");
    }else{
        res.render("index");
    }
    
});

// get的/login登录请求
app.get('/login',function(req,res){
    res.render('index');
});

// post的/login请求
app.post("/login",function(req,res){
    // 获取参数
    var username=req.body.username;
    var password=req.body.password;
    // 查找数据库的用户名密码
    User.find({username:username},function(err,docs){
        if(err){
            // 没有查询到
            console.log(err);
            res.send("查询失败"); 
            return ;
        }
        // 判断
        if(docs.length==0){
            res.send("用户名错误");
        }else{
            if(password == docs[0].password){
                res.cookie('username',username);
                res.send('<h1>登录成功，欢迎你:'+username+'</h1>');
            }else{
                res.send('<h1>密码错误</h1>');
            }
            
        }
    });
});


// get的/register 跳转到注册页面
app.get('/register',function(req,res){  
   res.render('register');
});

// post的/register
app.post("/register",function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    // 查找数据库 判断用户名是否重复
    User.find({username:username},function(err,docs){
        if(err){
            console.log(err);
            res.send("查找失败");
            return ;
        }
        console.log(docs);
        if(docs.length>0){
            res.send("<h1>用户名已存在</h1>");
        }else{
            // 保存进数据库
            var o=new User({
                username:username,
                password:password
            });
            o.save(function(err,product){
                if(err){
                    console.log(err);
                }else{
                    // res.redirect("/");  
                    // 记录状态
                    res.cookie("username",username);
                    res.send('<h1>注册成功，欢迎你：'+username+'</h1>');
                }
            });
            
        }
    });

    




})






