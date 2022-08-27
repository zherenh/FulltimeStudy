(
    ()=>{
        // k可以在属性前面添加修饰符
        class Person{
            /*
                public 公共的可以被任意修改,包括子类
                private 私有属性，只能在类内部修改
                    可以通过方法来调用并且暴露
                    继承了的类也不能访问

                protected 只能在当前类和继承的子类中使用，访问和修改
            */
            private name:string;
            private age:number;

            constructor(name:string,age:number){
                this.name = name;
                this.age = age;
            }

            getName(){
                return this.name;
            }

            setName(newName:string){
                this.name = newName;
            }

            getAge(){
                return this.age;
            }

            setAge(value:number){
                if(value > 0){
                this.age = value;
                }else{
                    console.log("age should be bigger than 0");
                    
                }
            }
        }

        const per = new Person("Angel", 18);

        /*
            属性可以被随意的修改
        */
       
        // 加了private无法被访问
        // console.log(per.age);
        per.getName();
        per.setName("Pig");

        //数据可以被随意修改，不安全


        // quicker method for constructor and mutator
        class Animal{
            private name:string;
            private age:number;

            constructor(name:string,age:number){
                this.name = name;
                this.age = age;
            }

            get getName(){
                return this.name;
            }

            set setName(value:string){
                this.name = value;
            }
        }

        const dog = new Animal("Dog",99);

        // ts 自己的getter函数可以直接用属性值调用，不需要()
        console.log(dog.getName);

        class A{
            protected num:number;
            constructor(num:number){
                this.num = num;
            }
        }

        class B extends A{
            test(){
                console.log(this.num);
            }
        }

        class C{
            // 直接在构造器里面定义
            constructor(public name:string, public age:number){}
        }
    }
)();