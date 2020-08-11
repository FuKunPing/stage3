{
    // 获取symbol的值
    // Symbol是基本数据类型，不能使用new关键字
    let s1=Symbol();
    let s2=Symbol();
    console.log(typeof s1,typeof 1,typeof true);//symbol number boolean
    console.log(s1===s2);//false
}

{
    // Symbol一般用于对象属性，表示独一无二，防止属性被误修改
    let obj={
        [Symbol()]:1
    }
    console.log(obj);
    // 修改Symbol()属性对应的值
    // 重新创建的Symbo()值
    obj[Symbol()]=2;
    console.log(obj);//{Symbol(): 1, Symbol(): 2}
}   

{
    let s=Symbol()
    let obj={
        [s]:1
    }
    console.log(obj);
    // 通过s变量来修改
    obj[s]=2;
    console.log(obj);
}

{
    // 为了方便识别不同的Symbol，在创建Symbol时可以添加 一个参数，该参数与Symbol的值没有任何影响，仅仅起一个描述的作用
    let s1=Symbol('aa');
    let s2=Symbol('bb');
    let s3=Symbol('bb');
    // s2和s3虽然描述一样，但是值不一样
    console.log(s2==s3);//false
}

{
    // Symbol.for('描述')
    // 创建Symbol对应描述的值时，会优先从内存中查询是否已经存在该描述的值，如果不存在，则创建，同时，如果存在，值不创建，直接使用内存中的值
    let s1=Symbol('a'); //独一无二的
    let s2=Symbol.for('a');//第一次，内存中没有，就创建
    console.log(s1==s2);//false
    let s3=Symbol.for('a'); //第二次，因为第一次已经创建了，所以这一次不再创建，直接使用第一次的值
    console.log(s2==s3);//true
    console.log(Symbol.keyFor(s2));//a 只能返回Symbol.for创建的描述值
    console.log(Symbol.keyFor(s1));//undefined 
}

{
    let obj={
        a:1,
        b:2,
        [Symbol()]:3
    }
    // for-in循环无法遍历Symbol类型的key
    for(let key in obj){
        console.log(`${key}========${obj[key]}`);
    }
    // 只能获取普通的key
   let keys=Object.getOwnPropertyNames(obj); 
    console.log(keys);

    // 只能获取Symbol的key
    let key=Object.getOwnPropertySymbols(obj);
    console.log(key);

    // 可以获取所有的key
    let k=Reflect.ownKeys(obj);
    console.log(k);



}