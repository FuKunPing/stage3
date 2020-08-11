{
    let sum=(...a)=>{
        let s=0;
        for(let i=0;i<a.length;i++){
            s+=a[i];
        }
        return s;
    }
    console.log(sum(1,2,3,4,5));
}

{
    // 封装console.log
    let log=(...a)=>{
        console.log(...a);
    }
    log('aaa%sbbb','NAME');
}

{
    let obj = {
        status: 0,
        data: [
            {
                id:1,msg:'返回的数据'
            }
        ],
        user:{
            name: 'jim',
            score: {
                math: 80,
                chinese: 88
            }
        }
  }
    // let {status,data,user}=obj;

    // let [o]=data;
    // let {id,msg}=o;

    // let {name,score}=user;
    // let {math,chinese}=score;

    // 一步
    let {status,data,data:[o],data:[{id,msg}],user,user:{name,score},user:{score:{math,chinese}}}=obj;
}

{
    let {name,age}={name:"jim",age:"23"};
    let html=`
<table>
    <tr>
        <td>姓名</td>
        <td>年龄</td>
    </tr>
    <tr>
        <td><%= ${name}%></td>
        <td><%= ${age}%></td>
    </tr>
</table>
    `;
    console.log(html);
    document.write(html);
}