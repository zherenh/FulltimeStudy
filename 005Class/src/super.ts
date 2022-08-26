(
    ()=>{
        class Animal{
            name:string;
            
            constructor(name:string){
                this.name = name;
            }
            sayHello(){
                console.log("hello");
                
            }
        }

        class Dog extends Animal{
            age:number;
            constructor(name:string,age:number){
                // 子类重写父类的构造函数时，要用super加父类的参数重构造
                super(name);
                this.age = age;
            }
            sayHello(): void {
                // super等于直接调用父类
                super.sayHello();
            }
        }
        const dog = new Dog("Wang", 99);
        dog.sayHello();
    }
)