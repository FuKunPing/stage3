{
    // 数组的解构赋值：
    // 按照对应的位置对变量进行赋值，需要等号两边的格式要保持一致,将右边的值赋值给左边的变量
    // var a=1,b=2,c=3;
    let [a,b,c]=[1,2,3];
    console.log(a,b,c);//1,2,3

}

{
    // 特殊格式: 左右两边格式不一致，可能会导致的结果有:undefined 报错
    // let [a,[b,c]]=[1,[2,3]];
    // console.log(a,b,c);//1,2,3

    // let [a,b,c]=[1,2];
    // console.log(a,b,c);//1,2,undefined

    // let [a,b,c]=[1,[2,3]];
    // console.log(a,b,c);//1 [2,3] undefined

    // let [a,[b],c]=[1,2,3];
    // console.log(a,b,c);//报错 左右两边格式不匹配 

    // let [a,b,c]=[1,[2],3];
    // console.log(a,b,c);//1,[2],3

    let [a,b,[c,d]]=[1,[2,3],[4,5,6]];
    console.log(a,b,c,d);// 1 [2,3] 4 5 
    

}
{
    // var a=1;b=2;
    // var t=a;
    // a=b;b=t;
    // console.log(a,b);//2,1

    var a=1;b=2;
    [a,b]=[b,a];
    console.log('a:',a);//2
    console.log('b:',b);//1
}

{
    function sendXHR(url,params){
        //·····················各种操作
        return [1,2,3];
    }
    // 可以先声明，再解构
    let a,b,c;
    [a,b,c]=sendXHR('','');
}

{
    // 解构赋值的默认值
    // 如果能成功解构获取到值，则采取获取的值
    // 如果解构没有取到值，则采用默认的初始值
    // let [a,b,c=0]=[1,2];
    // console.log(a,b,c);//1,2,0

    let [a=0,b=0,c=0]=[1,,2];
    console.log(a,b,c);//1,0,2

    // NaN和null会覆盖默认值，undefined不会覆盖默认值
    [a=0,b=0,c=0]=[NaN,undefined,null];
    console.log(a,b,c);//NaN 0 null
}

{
    //扩展运算符，展开运算符 ...
    // 扩展运算符只能用在最后一个元素上
    let [a,b,...c]=[1,2,3,4,5,6,7,8,9];
    console.log(a,b,c);//1,2,[3,4,5,6,7,8,9]
    // 使用展开运算符复制数组
    let arr=[...c];
    console.log(arr);//[3,4,5,6,7,8,9]
    arr[0]=100;
    console.log(arr);//[100,4,5,6,7,8,9]
    
}