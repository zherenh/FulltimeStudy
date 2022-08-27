(function () {
    //重复声明时，内部的数据会被拼接使用
    // 引用myType数据类型，
    var obj = {
        name: "sss",
        age: 111
    };
    var obj2 = {
        name: "sss",
        age: 111,
        gender: "male"
    };
    /*
    *定义类时，可以使类去实现一个接口
        但是类里面必须实现接口里的所有类和方法

    接口对类是一个限制

    only ts， not in js
    */
    var MyClass = /** @class */ (function () {
        function MyClass(name) {
            this.name = name;
        }
        MyClass.prototype.sayHello = function () {
            console.log(("大家好"));
        };
        return MyClass;
    }());
})();
