// mongoose的简单封装
var mongoose = require('mongoose');
var config = require('./02_config.js');
var protocal = config.protocal;
var ip = config.ip;
var port = config.port;
var dbName = config.dbName;
var colName = config.colName;

// 创建User的Schema
var userSchema = new mongoose.Schema({
  id: {type: Number},
  name: String,
  age: Number,
  position: Number,
  hireDate: Date,
  hobbies: Array
},{
  collection: colName, // 指定集合名称
  versionKey: false // 不要 __v
})

// 创建Model
var User = mongoose.model('emp',userSchema)

// 连接地址
var url = protocal+"://"+ip+":"+port+"/"+dbName;
// 连接数据库
var opt = {
  useNewUrlParser:true,useUnifiedTopology:true
}
// console.log(url)
mongoose.connect(url,opt);


// 暴露
module.exports = User;