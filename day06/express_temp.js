var express=require("express");
var app=express();

app.listen(4000);

// NodeJs默认的模板引擎是jsde,所以
// 如果要使用其他模板引擎，需要先设置
// 设置视图模板引擎为ejs
// 设置后，在使用res.render方法时，调用的模板的后缀名.ejs可以省略不写
// 如果不设置,则必须添加后缀名,express会根据后缀名自动调用对应的模板引擎
app.set("view engine",'ejs');

// app.set("views",'./myview'); 要自己创建myview文件夹，里面show.ejs

app.get('/',function(req,res){
    // 模拟从数据库中获取到的数据
    var stus=[
        {id:1,name:'张三'},
        {id:2,name:'李四'},
        {id:3,name:'王五'},
        {id:4,name:'赵六'},
    ];
    // 将数据传递给模板渲染展示
    // 第一个参数表示模板名称(views文件夹中的模板)
    // 第二个参数表示渲染的数据(必须是json格式)
    // 第三个参数为回调函数
    res.render('show',{stus:stus});
});