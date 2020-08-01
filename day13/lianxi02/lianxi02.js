var express=require("express");
var mongoose=require("mongoose");
var cookieParser=require("cookie-parser");
var app=express();

var userSchema=new mongoose.Schema({
    username:String,
    password:String
},{
    collection: 'user', // 指定集合名称
    versionKey: false // 不要 __v
  });
var User=mongoose.model('user',userSchema);
var url='mongodb://localhost:27017/web';
var opt={useNewUrlParser:true,useUnifiedTopology:true};
mongoose.connect(url,opt);

app.listen(4000);

// cookieParser()的参数：如果不使用signed cookie 
// 参数可以省略不写,如果要用就必须要写
app.use(cookieParser());

app.use(express.urlencoded({extended:true}));


app.get('/',function(req,res){
    // 获取cookie，判断有没有登录过
    var username=req.cookies.username;
    if(!username){
        // 没有找到username，就跳转到登录页面
        res.send('<form action="/login" method="POST">用户名: <input type="text" name="username">密码: <input type="password" name="password"><input type="submit" value="登录">没有账号？点击<a href="/regist">注册</a></form>');
        return ;
    }
    // 找到了用户名
    // 到数据库中检查该用户名是否存在
    User.find({username:username},function(err,result){
        if(err){
            console.log(err);
            res.send("网络故障");
            return ;
        }
        if(result.length==0){
            // 数据库中没有cookie里保存的用户名
            // 清除无效的cookie
            res.clearCookie('username');
            // 返回信息
            res.send("<h1>登录失效，请重新<a href='/'>登录</a></h1>");
            return ;
        }
        // 在数据库中找到了对应cookie的用户名
        res.send("欢迎你: "+username);
    });
});

app.post('/login',function(req,res){
    var query=req.body;//{username:xx,password:xx}
    // 到数据库中查询用户名和密码是否匹配
    User.find(query,function(err,result){
        if(err){
            console.log(err);
            res.send("网络错误");
            return ;
        }
        if(result.length==0){
            // 没找到
            res.send('<h1>登录失败，用户名或密码错误</h1>');
            return ;
        }
        // 用户名密码正确，登录成功，保存登录状态
        res.cookie("username",query.username);
        res.send('<h1>登录成功，欢迎你:'+query.username+'</h1>');
    });
});

app.get("/regist",function(req,res){
    res.send('<form action="/regist" method="POST">用户名: <input type="text" name="username">密码: <input type="password" name="password"><input type="submit" value="注册">已有账号？点击<a href="/">登录</a></form>');
});

app.post('/regist',function(req,res){
    var query=req.body;
    // 查看数据库中是否已经存在username
    User.find({username:query.username},function(err,result){
        if(err){
            console.log(err);
            res.send("网络波动");
            return ;
        }
        if(result.length>0){
            // 找到了数据，用户名存在
            res.send("用户名已经存在")
            return ;
        }
        // 用户名不存在，可以保存进数据库
        var o=new User(query);
        o.save(function(err){
            if(err){
                console.log(err);
                res.send("网络错误，注册失败");
                return ;
            }
            // 注册成功
            // 保存登录状态
            res.cookie('username',query.username);
            res.send('注册成功，欢迎你,'+query.username);
        })
    })
})