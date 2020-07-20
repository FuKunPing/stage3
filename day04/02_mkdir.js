var fs=require("fs");

//recursive:是否要创建父目录
// fs.mkdir('a',{recursive:true},function(err){
//     if(err){
//         console.log('创建失败');
//         console.log(err);
//         return ;
//     }
//     console.log("创建成功");
// });

//同步方法
fs.mkdirSync('a');
