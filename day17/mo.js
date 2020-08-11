// 导出
// 方式1
// export let name='张三';

// export let age=23;

// export function add(a,b){
//     return a+b;
// }

// 方式2
let num=100;
let msg='abc';
function show(){
    console.log('functionShow');
}
// 一次性全部导出
// 简写
export default{
    num,
    msg,
    show
}