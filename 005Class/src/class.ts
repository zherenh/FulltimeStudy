/*
    类对象中有两个东西，一个属性，一个方法

    直接定义的是实例属性，要用创建的对象访问

    static为静态属性，要用类来访问,方法同理

    readonly开头表示为只读属性，不能修改
*/
class Person{
    // readonly name:string = 'Angle';
    name:string;
    // static age:number = 21
    age:number;
 
    //定义方法
    sayHello():void{
        console.log("I am "+this.name);
    }

    //会在对象创建时调用
    constructor(name : string, age:number){
        //在构造函数中，当前对象就是当前新建的对象
        // 通过this向对象新建属性
        console.log(this);
        this.name = name;
        this.age = age;
    }

    readonly type:string = "Human"
}

const per = new Person("Angle", 21);
const per2 = new Person("Shamp", 99)
console.log(per2.sayHello());
// 加了static之后，age会变成Person的静态属性，必须通过类来访问，不能用变量访问
console.log(per.name, per.age);
 