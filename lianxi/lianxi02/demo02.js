// 演示用户名判断
var express =require('express');
var mongoose = require('mongoose');
var app = express()

app.listen(4000);

//连接数据库 ***********************************
var userSchema = new mongoose.Schema({
  uname: String,
  pwd: String
},{
  collection: "testUser" // 指定集合名
})
var User = mongoose.model("user",userSchema);

var url = "mongodb://localhost:27017/web"
var opt = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(url, opt)

// ***********************************

app.use(express.urlencoded({extended: true}))

app.get('/',function(req,res){
  res.render('regist.ejs')
})

// 检查用户名是否存在
app.post('/check',function(req,res){
    var uname = req.body.uname.trim();
    if(uname==""){
      res.send({status:1,msg:"用户名不能为空"});
      return ;
    }
    if(!/^[a-zA-Z]*[a-zA-Z0-9_]?$/.test(uname)){
      res.send({status:1,msg:"用户名只能由数字字母和下划线组成且由字符开头"});
      return ;
    }
    // if(!(uname.length>=6&&uname.length<=15)){
    if(uname.length<6 || uname.length>15){
      res.send({status:1,msg:"用户名长度必须在6到15位之间"});
      return ;
    }
    // 检查uname
    User.find({uname:uname},function(err,result){
      if(err){
        console.log(err);
        res.send({status:1,msg:"network Error"});
        return ;
      }
      if(result.length>0){
        res.send({status:1,msg:"用户名已存在"})
      }else{
        res.send({status:0,msg:"用户名可以使用"})
      }
    })
  })

