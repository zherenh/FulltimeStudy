{
    let a = "Hello world";
    let b: string = "Hello world";
    // 如果变量声明和赋值同时进行时，类型讲不能改变

    function sumNum(a: number, b: any): string {
        return a + b;
    }

    sumNum(123, "123");
}