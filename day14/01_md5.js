/* var crypto=require("crypto");
var fs=require("fs");

// 1. 给密码(明文)加密
// var str='123';

// 2. 验证文件的数据一致性
// var data=fs.readFileSync('./nwt_setup_3.3.2192.exe').toString();

// 3. 一般情况下，需要加密多次
var str='123';


// var pas=crypto.createHash('md5').update(str).digest('base64');//ICy5YqxZB1uWSwcVLSNLcA==
// var pas=crypto.createHash('md5').update(data).digest('base64');

var pas=crypto.createHash('md5').update(str).digest('base64');

// 加盐
pas=pas.substring(3,20);
pas='4Xr'+pas+'Mr==';
console.log(pas);//4Xr5YqxZB1uWSwcVLSNLMr==
pas=crypto.createHash('md5').update(pas).digest('base64');//二次加密

console.log(pas);//NJTmxGN0LjyWAp+Thzr2lg==


 */

var {encrypt}=require('./myMd5.js');
var pass=encrypt('123');
console.log(pass);