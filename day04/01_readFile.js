var fs=require("fs");

// fs.readFile('./day04.txt',{encoding:"utf-8"},function(err,data){ //第二个参数，没有就是buffer，写了就是string
//     console.log(err);
//     console.log(data);
// });

//同步方法中没有回调函数，读取到的结果会作为返回值返回  
var data=fs.readFileSync('./day04.txt','utf-8');
console.log(data);


