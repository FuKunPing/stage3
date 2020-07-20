function showIndex(req,res){
  console.log(req.url)
  res.end("<h1>这是首页</h1>")
}
function showInfo(req,res){
  res.end("<h1>这是信息页</h1>")
}
function showErr(req,res){
  res.end("<h1>这是错误页</h1>")
}

// exports.showIndex = showIndex
// exports.showInfo = showInfo
// exports.showErr = showErr

module.exports = {
  showIndex : showIndex,
  showInfo: showInfo,
  showErr: showErr
}

