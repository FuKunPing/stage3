var express=require("express");
var app=express();
app.listen(4000);
// 设置视图模板
app.set('view engine','ejs');
// 设置post请求参数的解析方式
app.use(express.urlencoded({extended:true}));

var MongoClient=require("mongodb").MongoClient;
var ObjectId=require("mongodb").ObjectID;//mongo自己的一个数据类型
var url="mongodb://localhost:27017";
var opt={useUnifiedTopology:true};

//  /请求 展示所有数据
app.get("/",function(req,res){
    // 连接数据库
    MongoClient.connect(url,opt,function(err,client){
        if(err){ //连接失败
            console.log(err);
            res.send("<h1>网络波动，稍后再试</h1>"); //连接失败后返回给浏览器的信息
            return ;
        }
        // 连接成功,获取集合对象
       var col=client.db("web").collection("products");
        // 获取所有数据
        col.find({}).sort({pid:1}).toArray(function(err,docs){
            if(err){  //获取数据失败
                console.log(err);
                res.send("获取数据失败"); //返回响应
                client.close(); //关闭连接
                return ;
            }
            // 获取数据成功，将其渲染带视图模板上
            res.render('show',{products:docs});
            client.close();
        });
});
});

// get的/add请求，跳转到添加数据的页面
app.get("/add",function(req,res){
    res.render("add");
});

// post的/add请求，接收页面传递的数据，将其保存进数据库
app.post('/add',function(req,res){
    // 获取请求参数
    var body=req.body;
    var data={};
    // 传过去的数据是字符串格式，得转换成数据库的格式
    data.pid=parseInt(body.pid);
    data.pname=body.pname;
    data.price=parseInt(body.price);
    data.count=parseInt(body.count);
    // 连接数据库
    MongoClient.connect(url,opt,function(err,client){
        if(err){ //连接失败
            console.log(err);
            res.send("网络波动，请稍后再试");
            return ;
        }
        //连接成功
        var col=client.db("web").collection("products");
        // 添加数据
        col.insertOne(data,function(err,reusult){
            if(err){ //添加失败
                console.log(err);
                res.send("进货失败，稍后再试");
                return ;
            }
            // 添加成功
            if(reusult.result.n>0){ //result判断是否添加成功(n>0)
                // 添加成功，跳转回首页
                res.redirect("/");
            }else{
                // 数据没添加成功
                res.send("添加失败");
            }
            client.close();
        });
    });
});


// get的 /update请求  跳转到修改的页面
app.get("/update",function(req,res){
    // 获取参数
    var id=req.query.id;//5f1e77cc8dfc530bb829c02e 传过来的_id是字符串，要转换成数据库的ObjectId类型
    // 将字符串的id转换成objectId类型
    id=ObjectId(id);
    // console.log(typeof id);//object
    // 根据id查询对应的数据
    MongoClient.connect(url,opt,function(err,client){
        if(err){ //连接失败
            console.log(err);
            res.send("网络波动，稍后再试");
            return ;
        }
        // 连接成功 开始查询对应的数据
        var col=client.db("web").collection("products");
        col.find({_id:id}).toArray(function(err,docs){
            if(err){
                console.log(err);
                res.send("服务器故障");
                client.close();
                return ;
            }
            // 查询数据成功
            if(docs.length==0){
                // 没有数据
                res.send("查无此数据");
            }else{
                // 查到了数据
                res.render('update',{product:docs[0]});//数组里的第一条数据返回去
            }
            client.close();

        });
    });
});

// post的 /update请求，更新数据
app.post("/update",function(req,res){
    var body=req.body;
    var data={};
    data.price=parseInt(body.price);
    data.count=parseInt(body.count);
    // 获取_id的值，并将它转换成ObjectId类型
    var id=ObjectId(body.id);
    var filters={_id:id};//修改的条件
    MongoClient.connect(url,opt,function (err,client){
        if(err){
            console.log(err);
            res.send("网络波动，稍后再试");
            return ;
        }
        // 连接成功，获取集合对象
        var col=client.db("web").collection("products");
        // 修改数据
        col.updateOne(filters,{$set:data},function(err,result){
            if(err){
                console.log(err);
                res.send("修改失败");
                return ;
            }
            // 修改成功
            if(result.result.nModified>0){
                // 修改成功
                res.redirect('/');
            }else{
                res.send("数据未曾发生改变，无须更新");
            }
            client.close();
        });

      })

});

// /delete/:id 删除指定id的数据
app.get("/delete/:id",function(req,res){
    var id=req.params.id;//string
    id=ObjectId(id);//ObjectId
    var filters={_id:id}; //删除的条件
    // 连接数据库删除数据
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            console.log(err);
            res.send('网络波动，稍后再试');
            return ;
        }
        var col=client.db("web").collection("products");
        col.deleteOne(filters,function(err,result){
            if(err){
                console.log(err);
                res.send("删除失败");
                client.close();
                return ;
            }
            // if(result.result.n>0)
            res.redirect('/');
            client.close();
        });
    });
});



