var router=require("express").Router({
    caseSensitive:true,//区分大小写
    strict:true //严格匹配/ 请求地址
});


router.get("/abc",function(req,res){
    res.send('/test/abc');
});

// route路由不区分大小写，要加caseSensitive:true才可以匹配
router.get("/ABC",function(req,res){
    res.send('/test/ABC');
});

//strict:true // 严格匹配/
router.get("/ABC/",function(req,res){
    res.send('/test/ABC/');
});






module.exports=router;