{
    //  一对大括号就是一个块级作用域
    var a=1; //全局
    // let a;//报错 let声明的变量只能声明一次
    let b=10;
    // console.log(b);//10
}
// console.log(a);//1
// console.log(b);//报错 b的作用域只在{}里面

var c=10;
let d=2;
console.log('window.c',window.c);//10
console.log('window.d',window.d);//undefined

for(var i=0;i<5;i++){ //换成let就外面的访问不到了(块级)
    console.log(i);// 01234
}
// console.log(i)//5

{
    //const用于声明常量
    //必须同时初始化
    const PI=3.14;
    // const a;
    //a=1; 常量不能先声明后初始化，必须声明的同时就初始化

    // 声明出来的常量不可修改它的值
    // PI=3.1415926535;

    // 如果常量的值是一个对象或数组，则可以修改对象中的属性或数组中的元素
    // 通过常量所指向的引用修改的数据，而不是直接修改它的引用
    const obj={
        a:1
    };
    obj.a=10;
    console.log(obj);
    obj.b=100; // 没有修改引用地址，所有不会报错
    console.log(obj);
    const arr=[1,2,3];
    //  arr=[1,2,3];//不能直接修改数组的地址
    arr[0]=10;
    console.log(arr);//[10,2,3]


}