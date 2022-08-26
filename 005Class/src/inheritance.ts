(
    ()=>{
        class Animal{
            name:string;
            age:number;

            constructor(name:string,age:number){
                this.name = name;
                this.age = age;
            }
            sayHello(){
                console.log("Hello");
            }
        }

        class Dog extends Animal{
            //父类有的函数方法可以被重写方法，子类方法覆盖父类方法
            sayHello(){
                console.log("I am Dog");
            }
            //继承父类后的this要用`${this}`来写
            myName(){
                console.log(`${this.name} is my name`);
                
            }
        }

        class Cat extends Animal{
            sayHello(){
                console.log("Cat");
            }
        }

        const durk = new Dog("Durk", 2);
        const mimi = new Cat("mimi", 5);
        console.log(durk);
        durk.myName();
        mimi.sayHello();
    }
);
