// mongoose的简单封装
var mongoose = require('mongoose');

// 创建User的Schema
var userSchema = new mongoose.Schema({
    username:String,
    password:String
},{
  collection: 'user', // 指定集合名称
  versionKey: false // 不要 __v
})

// 创建Model
var User = mongoose.model('user',userSchema)

// 连接地址
var url = "mongodb://localhost:27017/web";
// 连接数据库
var opt = {
  useNewUrlParser:true,useUnifiedTopology:true
}
// console.log(url)
mongoose.connect(url,opt);

// 暴露
module.exports = User;