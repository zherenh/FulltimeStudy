/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
{
    // input can be change at next line
    var max = 10;
    var arr = [];
    for (var i = max; i > 0; i--) {
        arr.push(i);
    }
    var numbers = [];
    var flag = true;
    for (var x = 2; x < arr.length; x++) {
        if (!flag) {
            x -= 1;
        }
        flag = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % x === 0) {
                arr[i] = arr[i] / x;
                if (flag) {
                    numbers.push(x);
                    flag = false;
                }
            }
        }
    }
    var result = void 0;
    result = 1;
    for (var i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    ;
    for (var i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    ;
    console.log(arr, numbers, result);
    // 232792560 for 1 to 20
}
/*
logic resource:
    https://jingyan.baidu.com/article/915fc414961c8251394b2006.html
*/ 
