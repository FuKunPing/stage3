// 引入monggose
var mongoose=require("mongoose");

// mongoose对数据库的操作全部都是基于Schema的 
// 创建user对应的schema
// 参数为数据的结构
// key:表示存储数据的属性
// value表示数据的数据类型
var userSchema=new mongoose.Schema({
    uid:String,
    uname:String,
    age:Number,
    isMarried:Boolean,
    birth:Date
});
// 基于Schema创建对应的模型(model)
// 第一个参数：其对应的复数形式为集合名称
// 第二个参数:Schema
var User=mongoose.model("user",userSchema);

// 连接数据库
// 协议：//ip:端口/数据库名称
var url="mongodb://localhost:27017/web";
var opt={
    useUnifiedTopology:true,
    useNewUrlParser: true 
};
mongoose.connect(url,opt);

// 监听
var db=mongoose.connection;
db.on('error',function(err){
    console.log(err);
});
db.once('open',function(){
    console.log('连接成功');
});

// 连接成功后 CRUD
// 4.查询数据
/* User.find({查询条件},function(err,docs){
    
}); */



// 3.修改数据
/* User.updateOne({修改的提交},{$set:{修改的数据}},function(err){
    
}); */




// 2.删除数据
/* User.deleteOne({},function(err){
    console.log(err);
}); */



// 1.增加数据
/* var u={
    uname:'张三1',
    age:23,
    isMarried:false,
    birth:new Date(),
    test:'测试的'//不会保存进数据库
};
var u2={
    uname:'张三2',
    age:23,
    isMarried:false,
    birth:new Date(),
   
};
var u3={
    uname:'张三3',
    age:23,
    isMarried:false,
    birth:new Date(),
    
};
var u4={
    uname:'张三4',
    age:23,
    isMarried:false,
    birth:new Date(),
   
}; */
// 插入一条
/* var o =new User(u);
o.save(function(err,doc){
    console.log(err);
    console.log(doc);
}); */
// 插入多条
/* User.insertMany([u,u2,u3,u4],function(err,res){
    console.log(err);
    console.log(res);
}); */

