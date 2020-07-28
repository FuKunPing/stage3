// 使用NodeJs连接数据库
var MongoClient = require("mongodb").MongoClient;

// 连接地址
var url = "mongodb://localhost:27017";

//连接选项
var opt = {useUnifiedTopology:true}
// 开始连接
MongoClient.connect(url,function(err,client){
  if(err){
      console.log(err);
      return ;
  }
  console.log("连接成功");
  //操作结束后，一定要关闭连接
  //client.close()
  //获取数据库对象`
  var db = client.db("web");
  //获取集合
  var col = db.collection("emp");

  //增加数据
  var obj1={
    a:1,b:2
    };
    var obj2={
      a:10,b:20
    };
    var obj3={
      a:100,b:200
    };

  // 向集合中添加一条数据
 /*  col.insertOne(obj1,function(err,result){
      if(err){
          console.log(err);
      }else{
         console.log(result);  
      }
      client.close();
  }); */

    //向集合中添加多条数据
    /* col.insertMany([obj2,obj3],function(err,result){
      if(err){
        console.log(err);
      }else{
       console.log(result);  
      }
    client.close();
	}); */
	
	// 删除一条数据
	/* col.deleteOne({a:100},function(err,result){
		if(err){
			console.log(err);
		  }else{
		   console.log(result);  
		  }
		client.close();
	}); */

	// 删除多条数据
	col.deleteMany({a:100},function(err,result){
		if(err){
			console.log(err);
		  }else{
		   console.log(result);  
		  }
		client.close();
	});


    // 修改一条数据
    /* col.updateOne({a:10},{$set:{a:100,b:200}},function(err,result){
      if(err){
        console.log(err);
      }else{
       console.log(result);  
      }
    client.close();
	}); */
	
	// 修改多条数据
    /* col.updateMany({a:10},{$set:{a:100,b:200}},function(err,result){
      if(err){
        console.log(err);
      }else{
       console.log(result);  
      }
    client.close();
    }); */


  //查询集合中的所有数据,只有查询要转换成数组
  /* col.find().toArray(function(err,docs){
      if(err){
          console.log(err);
          client.close();
          return ;
      }
      console.log(docs);
  }); */
  //关闭连接
  // client.close();
})