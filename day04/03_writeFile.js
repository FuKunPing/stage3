var fs=require("fs");

var path="test.txt";
var data='\n哈哈哈哈';
var ops={flag:'a'};//a追加进入  flag默认是w,直接覆盖

fs.writeFile(path,data,ops,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log('写入成功');
});