{
    // 对象的解构赋值
    // 对象解构成功，必须满足一个条件：
    // 变量名与属性名保持一致
    let {a,b}={a:1,b:2};
    console.log(a,b);//1 2
    // c,d取不到值，等号右边的对象中没有对应的属性
    let {c,d}={a:1,b:2};
    console.log(c,d);//undefined undefined
}
{
    // let t=require('./test.js');
    // var a=t.a;
    // 在node环境下使用对象的解构赋值获取其他模块中的属性
    // let {a,b,c,d}=require('./test.js');
    // console.log(a,b,c,d);
}
{
    let obj={
        a:1,
        b:{
            x:10
        }
    }
    let {a,b}=obj;
    console.log(a,b); //1  {x:10}
    // 取对象中某个属性里的值
    let {b:{x}}=obj;
    console.log(x);// 10
}
{
    // 对象的扩展
    var username='zhangsan';
    var password='123';
    // 完整的写法
    let data={
        username:username,
        password:password
    }
    // 当变量名与属性名相同时，可以蚕蛹简写的方式
    let data2={
        username,
        password
    }
}
{
    // 对象解构赋值的完整模式和简写模式
    // 1.因为变量名为a,b和属性名相同，所以采用简写模式
    let {a,b}={b:1,a:2};
    // let {a:a,b:b}={b:1,a:2}  完整模式
    // 2.变量名与属性名不一致,变量名为x,y   
    // let{x:a,y:b}={b:1,a:2}
}
{
    // 先声明,后解构
    // let a,b,c;
    // [a,b,c]=[1,2,3];

    let a,b,c; 
    // 必须用()包裹起来，否则会报错，两个{}会被认为是两个作用域，不等=
    ({a,b,c}={a:1,b:2,c:3})
    console.log(a,b,c)
}
{
    // 对象解构赋值的默认值
    // let [a=0,b=0]=[1,2,3];  数组的默认
    let {a=0,b=0}={a:1};
    console.log(a,b);//1 0
    let {c:c=0,d:d=0}={c:1};
    console.log(c,d);//1 0 
}
{
    // 展开运算符的使用...
    let obj={
        name:'jim',
        sex:"man"
    }
    // 使用...展开复制obj
    let obj2={
        ...obj
    };
    console.log(obj);
    console.log(obj2);

    // 将两个以上的对象合并成一个对象
    let o1={
        a:1,
        b:2
    };
    let o2={
        c:3,
        d:4
    };
    let o={
        ...o1,
        ...o2
    }
    console.log(o);
}
{
    let news=[
        {
            title:"新闻",
            msg:"这是一条新闻",
        }
    ]
    let title,msg;
    [{title,msg}]=news;
    console.log(title,msg);
}
{
    let news=[
        {
            title:"新闻1",
            contents:[
                {t:"体育",m:"篮球开始比赛了"},
                {t:"娱乐",m:"电影院开放了"}
            ]
        },
        {
            title:"新闻2",
            contents:[
                {t:"体育",m:"乒乓球世锦赛"},
                {t:"娱乐",m:"夺兵奇宝"}
            ]
        }
    ]

    // let title1,contents1,t,m;
    // [{title1,contents1:[{t,m}]}]=news;
    // console.log(title1,contents1,t,m);

    // let [m1,m2]=news;//数组的解构
    // console.log(m1,m2);
    // let {title,contents}=m1;
    let [{title,contents}]=news;
    console.log(title,contents);
    let [{contents:[{t:t1,m:m1}]}]=news
    console.log(t1,m1);
}

{
    // 后端返回的数据
    let result={
        status:"ok",
        responseType:"json",
        responseData:[
            {
                id:101,msg:"服务器返回的数据"
            }
        ]
    }

    let {status,responseType,responseData,responseData:[{id,msg}]}=result;
    console.log(status,responseType,responseData,id,msg);
    // let {responseData:[{id,msg}]}=result;
    // console.log(id,msg);
}

{
    // 函数参数的解构赋值
    function add1(a,b){
        return a+b;
    }
    console.log(add1(1,4));//5

    let arr=[2,5];
    console.log(add1(...arr));//7  add1(2,5)

    // 参数的数组解构
    function add2([a,b]){
        return a+b;
    }
    console.log(add2(arr));// 7
}
{
    // 函数的参数解构
    // function total(a,b){
    //     console.log(a,b);
    // }
    // // total(1);//1 undefined
    // total(1,2,3,4);//1 2

    function total(x,y,...a){
        console.log(a)//[3,4,5,6,7]
    }
    total(1,2,3,4,5,6,7);

    function info(name,age,tel,obj){
        this.name=name;
        this.age=age;
        this,tel=tel;
        ({pro1,pro2}=obj);
        this.pro1=pro1;
        this.pro2=pro2
    }
    var obj={
        pro1:'pro1',
        pro:'pro2',
        pro3:'pro3'
    }
    let o=new info('jim',12,158,obj);
    console.log(o);
}
{
    // 函数参数的解构：参数为对象
    function show({a:x,b:y}){
        console.log(x,y)
    }
    let obj={
        a:1,b:2
    }
    show(obj);//1,2
}