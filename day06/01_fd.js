// const:es6语法定义一个常量
const fd=require('formidable');
const fs=require("fs");
const http=require('http');

http.createServer(function(req,res){
    if(req.url=='/tijiao'&&req.method.toLowerCase()=='post'){
        //获取表单对象
        const form = fd({ multiples: true });
        // const form=fd.IncomingForm();//老版写法

        //设置上传文件临时保存的路径
        form.uploadDir='./uploads';

        /* 
        form.parse()-->解析请求对象，获取其中的数据
        err:错误信息，解析出错
        fields:解析得到的表单中的文本域的内容
        files:解析得到的表单中上传的文件(文件信息)(文件默认保存在C盘)
        */
        form.parse(req, (err, fields, files) => { 
            console.log(fields);//{ txt: '123123' }
            console.log(files.pic1.path);//图片路径
            // res.end('over');
            //修改上传文件的名称(修改多个文件名称就for in遍历去修改)
            var oldName=files.pic1.path;
            var newName=files.pic1.name;//图片名称xxx.jpg 
            newName='./uploads/'+newName;//加了路径就保存在uploads文件夹里
            //改名
            fs.rename(oldName,newName,function(err){
                console.log(err);
                res.end("rename over");
            });
    });
    return;

}

    fs.readFile('./01.html',function(err,data){
        if(err){
            res.end("read err");
            return ;
        }
        res.end(data);
    })

}).listen(4000);

