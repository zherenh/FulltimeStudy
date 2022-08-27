/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series
*/
(
    ()=>{
        function sum(num:number):number{
            let output:string = "";
            let str:string = "";
            for(let i :number = 1; i<=num; i++){
                str += Math.pow(i,i);
            }
            for(let i :number = str.length-1; i>=str.length-10; i--){
                output = str[i] + output;
            }
            return Number(output);
        }
        console.log(sum(5));// 4272563125
        console.log(sum(7));// 6656823543
    }
)();