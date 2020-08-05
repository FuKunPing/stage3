{
    // 字符串新增的表示方式``
    let str1='abc';
    let str2="abc";
    let str3=`abc`;
    //使用``表示的字符串再引号中间可以换行
    let str4=`
<div>
    <h1>字符串</h1>
</div>
`;
    console.log(str4);
    document.write(str4);
    str4=str4.replace(`h1`,`h4`);
    console.log(str4);
    document.write(str4);
}

{
    // 字符串的拼接
    let name='张三';
    let age=23;
    let str=`你好，我叫${name}，今年${age}岁。`;
    console.log(str);

    str=`abcd${age>30?'中年人':'年轻人'}qwer`;
    console.log(str);

    str=`今年是${age}岁，明年是${age+1}岁`;
    console.log(str);
    
    str=`aaa${10>5}ssss`;
    console.log(str);
}

    // 字符串新增的方法
    // includes(),startsWith(),endsWith(),repeat()
    // padStart(),padEnd(),trimStart(),trimEnd(),trim(),matchAll()
{
    let str=`Hello,my name is HanMeiMei,I'm thirhteen years old`;
    console.log(str.charAt(0));//H
    console.log(str.charCodeAt(0));//72
    console.log(str.codePointAt(0));//72
    // includes() 判断字符串中是否包含某一个字符串
    console.log(str.includes('me'));//true 是否包含me
    // 第二个参数表示从哪个位置开始查询
    console.log(str.includes('me',12));//false
    console.log(str.includes('me',12));//false
    console.log(str.includes('me',str.lastIndexOf('me')+1));//false

    // startWith 判断字符串中是否以某个字符开头的
    console.log(str.startsWith('Hello'));//true
    console.log(str.endsWith('old'));//true
}
{
    // repeat() 重复某个字符串
    console.log('a'.repeat(12));//aaaaaaaaaaaa
    console.log('\\'.repeat(5));
    console.log('韩梅梅，我喜欢你!'.repeat(3));
    // 如果参数不是整数，则舍弃小数部分 (向下取整)
    console.log('\\'.repeat(5.9));
    console.log('\\'.repeat(0.9)); //相当于0
    console.log('\\'.repeat(-0.9));//相当于0
    // console.log('\\'.repeat(-1));//报错

}

{
    // padStart,padEnd向字符串的开头或结尾填充内容 
    //实现左对齐或右对齐
    // 第一个参数表示填充到目标长度
    // 第二个参数表示使用什么字符串来填充
    console.log('123'.padStart(10,'#'));
    // 如果填充的内容超过了10位，则截取使其达到10位
    console.log('123456'.padStart(10,'abc'));
    // 如果字符串已经达到了10位，则不做操作,显示原字符串
    console.log('126123123123123'.padStart(10,'#'));//126123123123123
    // 把多余的0去掉
    console.log('6'.padEnd(10,'1234567890'));//6123456789
}

{
    //trimStart() 清除字符串开头部分的空格
    // trimEnd() 清除尾部的空格
    //trim() 清除开头和结尾的空格
}

{
    // matchAll() 
    let result ='abca2a'.matchAll(/a/g);
    // console.log(result.next());
    // console.log(result.next());
    // console.log(result.next());
    // console.log(result.next());
    // console.log(result.next());
    let res=null;
    res=result.next();
    while(!res.done){
        console.log(res);
        res=result.next();
    }
    console.log(res);

}