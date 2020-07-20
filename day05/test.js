var sd = require("silly-datetime")

var str = sd.format(new Date(),"YYYY年MM月DD日 hh时mm分ss秒 a")
console.log(str)