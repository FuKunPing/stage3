// 使用mongoose简单实现员工信息管理功能
var express = require('express');
// 获取封装的User模型(model)
var User = require('./02_user.js');
var fs = require('fs');
var app = express();

var pos={
  "后端开发":1,
  "web开发":2,
  "UI开发":3
};

app.listen(4000);

app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
  // 获取数据库中的员工信息
  User.find({},'id name position',function(err,docs){
    if(err){
      console.log(err);
      res.render('show.ejs',{state:1,errMsg:"获取数据失败"});
      return ;
    }
    console.log(docs);
    res.render("show.ejs",{state:0,docs:docs});
  });


})

app.post('/add', function(req,res){
  var body = req.body;
  var name = body.empName;
  var age = body.age;
  var position = body.position;
  var hireDate = new Date(); // 日期
  var hobbies = []; // 爱好
  var id = parseInt(fs.readFileSync('./id.txt')); // 上一个id
  id++; 
  fs.writeFileSync("./id.txt",id);
  // 创建对象
  var o = new User({
    id: id,
    name: name,
    age: age,
    position: pos[position],
    hireDate: hireDate,
    hobbies: hobbies
  });
  // 保存进数据库
  o.save(function(err,product){
    if(err){
      console.log(err);
    }
    console.log(product);
    res.redirect('/')
  })
})






