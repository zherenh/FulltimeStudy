/*
Declare a rational() function that gets two natural numbers (a, b) and return a string containing a record of the rational number a / b in the form of a decimal fraction, possibly periodic.

rational(2, 5) ➞ "0.4"
rational(1, 6) ➞ "0.1(6)"
rational(1, 3) ➞ "0.(3)"
rational(1, 7) ➞ "0.(142857)"
rational(1, 77) ➞ "0.(012987)"
*/
(
    ()=>{
        function rational(x:number, y:number):string{
            let num:number = ((x*10000)/y)/10000;
            return ''+num;
        }
        console.log(rational(1,6));
    }
)();