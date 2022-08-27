/*
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^ = 385
The square of the sum of the first ten natural numbers is,
(1+2+3+...+10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
3025 - 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
(
    ()=>{
        function different(num:number):number{
            let output:number;
            let sumSqu:number = 0;
            let squSum:number = 0;
            for(let i:number = 1; i <=num; i++){
                squSum += i*i;
                sumSqu += i;
            }
            console.log(squSum, sumSqu);
            
            output = (sumSqu*sumSqu) - squSum;
            return output;
        }
        console.log(different(10));    
    }
)();