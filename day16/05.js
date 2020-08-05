{
    // class类的使用
    // function Point(x,y){
    //     this.x=x;
    //     this.y=y;
    // }
    // Point.prototype.toString=function(){
    //     return `(${this.x},${this.y})`;
    // }
    // console.log(new Point(1,3).toString());

    class Stu{
        constructor(id,name){ //构造方法 
            this.id=id;
            this.name=name;
        }
        say(){};
        walk(){};
        run(){};
    }
    let s=new Stu(1,'jim');
    console.log(s);
}
// 
{
    function Stu(id,name){
        this.id=id;
        this.name=name;
    } 
    Stu.prototype={
        say:function(){},
        walk:function(){},
        run:function(){}
    }
    let s=new Stu(1,'jim');
    console.log(s);
}