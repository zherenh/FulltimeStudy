(() => {
    // k可以在属性前面添加修饰符
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        setName(newName) {
            this.name = newName;
        }
        getAge() {
            return this.age;
        }
        setAge(value) {
            if (value > 0) {
                this.age = value;
            }
            else {
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
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        get getName() {
            return this.name;
        }
        set setName(value) {
            this.name = value;
        }
    }
    const dog = new Animal("Dog", 99);
    // ts 自己的getter函数可以直接用属性值调用，不需要()
    console.log(dog.getName);
})();
