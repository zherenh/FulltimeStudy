{
    var a = "Hello world";
    var b = "Hello world";
    // 如果变量声明和赋值同时进行时，类型讲不能改变
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(123, "123")); 
}
