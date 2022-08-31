/*
edabit hadest level

Create a function that takes a range of numbers and returns the sum of each digit from start to stop.
Two input should be bigger than zero.

digitsSum(1, 10) ➞ 46
// total numbers in the range are = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// sum of each digits is = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 1 + 0 = 46

digitsSum(1, 20) ➞ 102

digitsSum(1, 100) ➞ 901
*/
(
    ()=>{
        function Sum(front:number, back:number):number{
            let total = 0;
            for(let i = front; i <= back; i++){
                if(i < 10){
                    total += i;
                }
                else{
                    let tmpStr:string = i + '';
                    for(let x = 0; x <tmpStr.length; x++){
                        total += Number(tmpStr[x]);
                    }
                }
            }
            return total;
        }
        console.log(Sum(1,100));
        
    }
)();