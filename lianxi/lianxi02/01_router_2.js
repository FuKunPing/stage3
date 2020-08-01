var router=require("express").Router({
    mergeParams:true//{ name1: 'aaa', name2: 'bbb' } 加了这个可以拿到父级的参数(参数名字一样的话就会覆盖)
});

//  : 传参 abc是参数名
router.get("/abc/:name2",function(req,res){
    console.log(req.params);//params只能拿到路由这边的参数{ name2: 'bbb' }
    res.end('over');
});

module.exports=router;