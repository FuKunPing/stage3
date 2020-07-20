var fs=require("fs");

// ./读取当前文件夹里面的内容
fs.readdir('./',{withFileTypes:true},function(err,files){
    console.log(err);
    console.log(files);
    console.log(files[0].isFile());
    for(var i=0;i<files.length;i++){
        if(files[i].isFile()){
            console.log(files[i].name+"是一个文件");
        }else{
            console.log(files[i].name+"是一个文件夹");
        }
    }
});