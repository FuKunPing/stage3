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
     let {status,data:[{id,msg}],user:{name,score:{math,chinese}}}=obj;
     console.log(status,id,msg,name,math,chinese);
}


{
    function sum(...a){
        let sum=0;
        for(let i=0;i<a.length;i++){
            sum+=a[i];
        }
        return sum;
    }
    console.log(sum(1,3,5,6,8,9));
}


{
    let str=`
        <table>
            <tr>
                <td>姓名</td>
                <td>年龄</td>
            </tr>
            <tr>
                <td><%= name %></td>
                <td><%= age %></td>
            </tr>
        </table>
    `;
    console.log(str);
}