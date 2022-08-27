/*
Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
*/
(
    ()=>{
        function sum(input:number):number{
            let num:number = 0;
            let str = input + "";
            let output: number = 0;
            for(let x of str){
                num ++;
                if(num == 11){
                    break;
                }
                output += Number(x);
            }
            console.log(str, output);
            return output;
        }
        // 150 digit number is too big 
        console.log(sum(12345678999));// 54
        console.log(sum(4366576453411415452));// 49
        console.log(sum(22222222222222222222));// 20
    }
)();