var a=require("./03_module.js");
console.log(a);

// console.log(a.name);
// a.say();

var s = new a(1,'战三');
console.log(s);
s.say();

var s2=new a(2,'李四');
console.log(s2);
s2.say();