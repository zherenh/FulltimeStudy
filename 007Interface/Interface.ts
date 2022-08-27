(
    function(){
        // typr描述一个对象的类型
        type myType = {
            name:string,
            age:number
        };

        /*
        接口用来定义一个类的结构，包含哪些属性
            接口也可以当成类型数据去使用
        */
        //注意接口格式  interface xxx{xxx:type; ...}
        interface myInterface{
            name:string;
            age:number;
        }

        // 接口可以重复声明
        interface myInterface{
            gender:string;
        }
        //重复声明时，内部的数据会被拼接使用

        // 引用myType数据类型，
        const obj:myType={
            name:"sss",
            age:111
        }
        
        const obj2:myInterface={
            name:"sss",
            age:111,
            gender:"male"
        }

        /*
        接口可以在定义类的时候去限制类的结构
            接口在所有的属性都不能用实际的值
            接口只定义对象的结构而不考虑实际值
                在接口中，所以的方法都是抽象方法
        */
        interface myInter{
            name:string;
            sayHello():void;
        }

        /*
        *定义类时，可以使类去实现一个接口
            但是类里面必须实现接口里的所有类和方法

        接口对类是一个限制

        only ts， not in js
        */
        class MyClass implements myInter{
            name: string;

            constructor(name: string){
                this.name = name;
            } 
            sayHello(): void {
                console.log(("大家好"));
            }
          
        }
    }
)(); 