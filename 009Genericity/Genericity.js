(function () {
    // 不知道返回值的类型时，使用泛型
    // 把类型设为T，且参数和返回值的类型相同
    function fun(a) {
        return a;
    }
    // 自动推断为number类型
    console.log(fun(10));
    // 手动推断类型
    console.log(fun("HelloWorld"));
    // 范型可以指定多个
    function fun2(a, b) {
        return [a, b];
    }
    console.log(fun2(123, "!"));
    // <T extends Inter> 表示T必须时Inter实现类的子类
    function fun3(a) {
        return a.length;
    }
    // fun3的参数必须有length属性
    fun3('123');
    fun3([]);
    var MyClass = /** @class */ (function () {
        function MyClass(name) {
            this.name = name;
        }
        return MyClass;
    }());
    var cla = new MyClass(123);
    console.log(cla.name);
})();
