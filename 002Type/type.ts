{
    /*
    any
    
    never
    
    
    */
    // 可以直接使用自变量进行类型声明
    let a: 10; //不能改变值
    // 可以是这两个值
    let b: "Male" | "Female";

    //联合声明， 可以连接多个类型
    let c: number | boolean;

    //可以设置为任何类型，相当于关闭了类型检测
    // ！！suggest not to do
    let d: any = 100; //let d; 如果申明变量时不负值，则为any类型
    d = 1;
    d = true;
    d = "d";
    // 用any给其他变量赋值时，其他变量的类型也会变成any
    b = d;

    let e: unknown; //类型安全的any，不能赋值给其他变量
    e = 10;
    e = "hello";
    e = false;
    // unknow类型的变量不能给别的变量赋值
    // s = e;

    // 类型断言， 可以用来告诉解析器实际类型
    c = e as number;
    c = <number>e;


    // 只要不写返回值，返回值就是void泪腺
    function fun(): void {

    }
    function fun1(): string | number {
        return 1;
    }

    // never表示永远不会有返回值,用来报错
    function fun2(): never {
        throw new Error("报错时没有返回值,所以用never类型");
    }
}

//part2
{
    let a: object;

    //可以指定对象中包含哪些属性，可以写多个
    //加？表示为可选值，可有可无
    let b: { name: string, age?: number };
    b = { name: "" };

    // [propName:string]:any 表示其他属性可以是任意类型，但是属性名要是string
    let c: { name: string, [propName: string]: any };
    c = { name: "", age: 19, gender: true }

    // 箭头函数预设定d函数的参数类型和输出类型
    let d: (a: number, b: number) => number;
    d = function (a, b) {
        return a * b;
    }

    // number[]表示字符串数组
    let e: number[];

    let g: Array<string>;
    g = ["", ''];

    /*
        元组
        tuple
    */
    let h: [string, number, boolean];
    h = ['', 123, false]

    /*
        enum
    */
    enum Gender {
        Male = 0,
        Female = 1
    }
    let i: { name: string, gender: Gender }
    i = { name: "jack", gender: Gender.Male };
    // 不需要属性值来判断
    console.log(i.gender === Gender.Female);

    // &表示同时，既是string也是number
    let j : {name:string} & {age:number};
    // j要有两个类型
    j = {name:'孙悟空', age:18}

    //别名
    type myType = 1 | 2 | 3 | 4;
    let k : myType;
    k = 1;
    k = 4;
    
}