{
    // Array.from()
    // 将类数组对象转换为数组
    let lis=document.querySelectorAll('li');
    console.log(lis);
    let arr=Array.from(lis);
    console.log(arr);
    // 如果 传进去的参数就是一个数组，则返回一个一模一样的数组
    let arr2=Array.from([1,2,3]);
    console.log(arr2);
}

{
    // Array.of()
    // let arr1=[1,2,3,4];
    // let arr2=new Array(1,2,3,4);//传一个参数是这个数组的长度
    let arr2=new Array(4);//[,,,] 长度
    let arr3=Array.of(4);//4 值
    let arr4=Array.of(1,2,3,4);//[1,2,3,4]
    let arr5=Array.of();
    console.log(arr5);//[]
}

{
    // find()  findIndex()
    let arr=[1,2,3,4,5,6,7];
    let result=arr.find(function(val,index,a){
        // console.log(`${index}=====${val}`);
        // console.log(a);//数组
        // 找到3的倍数，find值返回第一个
        // if(val%3==0){
        //   return val;
        // }
        return val%3==0
    });
    console.log(`find方法：${result}`); //3
    let arr1=[1,2,3,4,5,6,7];
    let result1=arr1.findIndex(function(val,index,a){
        // console.log(`${index}=====${val}`);
        // console.log(a);//数组
        // 找到3的倍数，find值返回第一个
        // if(val%3==0){
        //   return val;
        // }
        return val%3==0
    });
    console.log(`findIndex方法：${result1}`); //2
}

{
    let arr=[1,0,undefined,null,NaN,'',false];
    let result=arr.find(function(val){
        console.log(val);
        // 判断两个值是否相同
        return Object.is(NaN,val);
    })
    console.log(result);
}

{
    let arr=new Array(6);
    console.log(arr);

    arr.fill(0); //[0,0,0,0,0,0]
    console.log(arr)
    arr.fill('');
    console.log(arr);//['','','','','','']

    // 第二个参数表示从哪个下标位置开始
    arr.fill('a',2);//从下标2开始填充字符串a，直到结束
    console.log(arr);//['','','a','a','a','a']

    // 第三个参数表示结束的下标位置
    // 从下标3开始到下标5结束(长度为6)(含头不含尾)
    arr.fill('b',3,5);
    console.log(arr);// ["", "", "a", "b", "b", "a"]
}