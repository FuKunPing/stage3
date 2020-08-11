let [a,b,c]=[1,2,3]

let obj={
    name:'jim',
    say(){
        console.log(this.name);
    },
    getBirth(){
        return ()=>{
            return `${this.name}的生日是今天`;
        }
    }
}

let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1秒结束');
    },1000)
})
p.then(data=>{
    console.log(data);
})

class Stu{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    say(){
        console.log(this.name);
    }
}