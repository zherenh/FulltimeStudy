(
    function(){
        // abstract 为抽象类，专门用来被继承，不能被用来创建实例
        // 可以添加抽象方法
        abstract class Animal{
            name:string;

            constructor(name:string){
                this.name = name;
            }

            // 抽象方法
            // 抽象方法没有方法题，专门用来被继承，被子类重写
            // 抽象方法只能定义在抽象类
            abstract sayHello():void;
        }

        class Dog extends Animal{
            sayHello(){
                console.log("I am Dog");         
            }
        }

        const dog = new Dog("Woof");
        dog.sayHello();


    }
)();