/*
Given two integers dividend and divisor, 
divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, 
which means losing its fractional part. For example, 
8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
*/
{
    let divide = function(dividend:number, divisor:number):number {
        // check the output should be negative or not
        let isNeg:boolean = false;
        if((dividend < 0 && divisor > 0)|| (dividend > 0 && divisor < 0)){
            isNeg = true;
        }
        // absolute two value to calculate
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
        // everytime minus, result plus one
        let result:number = 0;
        for(let x = dividend; x >= divisor; x -= divisor){
            result ++;
        }
        if(isNeg){
            result = result * (-1);
        }
        return result;
    };
    console.log(divide(7,-3));//-2
    console.log(divide(10,3));//3
    console.log(divide(-20,-3));//6
    console.log(divide(100,1));//100
}