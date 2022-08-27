(
    ()=>{
        // 不知道返回值的类型时，使用泛型

        // 把类型设为T，且参数和返回值的类型相同
        function fun<T>(a:T):T{
            return a
        }

        // 自动推断为number类型
        console.log(fun(10));
        // 手动推断类型
        console.log(fun<string>("HelloWorld"));
        

        // 范型可以指定多个
        function fun2<T, K>(a:T, b:K):(T|K)[]{
            return [a, b];
        }
        console.log(fun2<number,string>(123,"!"));

        interface Inter{
            length:number;
        }
        
        // <T extends Inter> 表示T必须时Inter实现类的子类
        function fun3<T extends Inter>(a:T):number{
            return a.length;
        }
        // fun3的参数必须有length属性
        fun3('123');

        fun3([]);

        class MyClass<T>{
            name:T;
            constructor(name:T){
                this.name = name;
            }
        }
        const cla = new MyClass(123);
        console.log(cla.name);
    }
)();