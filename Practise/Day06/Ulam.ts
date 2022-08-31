/*
edabit hadest level

Ulam Sequence

ulam = [1, 2]
The next number in the sequence is the smallest positive number that is equal to the sum of 2 distinct numbers 
(that are already in the sequence) exactly one way. Trivially, this is 3, as there are only 2 numbers in the starting sequence.
ulam = [1, 2, 3]
The next number is 4, which is the sum of 3+1. 4 is also 2+2, but this equation does not count, as the 2 addends have to be distinct.
ulam = [1, 2, 3, 4]
The next number cannot be 5, as 5 = 1 + 4, but also 5 = 2 + 3. There should only be one way to make an Ulam number 
from 2 distinct addends found in the sequence. The next number is 6 (2+4). There are 2 ways to make 7 (1+6 or 3+4), 
so the next is 8 (2+6). And so on.
ulam = [1, 2, 3, 4, 6, 8, 11, 13, 16, 18, 26, 28, 36, 38, 47, 48, 53, …]

Create a function that takes a number n and returns the nth number in the Ulam sequence.

ulam(4) ➞ 4
ulam(9) ➞ 16
ulam(206) ➞ 1856
*/
(
    ()=>{
        function Ulam(input:number):number{
            // init the ulam list which must have two number in list for beginning
            let curr:number = 2;
            let lst:number[]=[1,2];
            // current number is two, so the input number minus two to get the correct answer
            input = input - 2;
            // loop to get the ulam list
            while(input){
                curr++;
                let count:number = 0;
                // check whether can use the numbers in ulam list to get the current number
                // meanwhile exactly one way
                for(let i = 0; i< lst.length; i++){
                    for(let j = i + 1; j< lst.length; j++){
                        if(lst[i] + lst[j] === curr){
                            count++;
                        }
                    }
                }
                // use the counter to check exactly one way or not
                if(count===1){
                    lst.push(curr);
                    // if count === 1,means length of ulam string plus 1, then the input number minus 1
                    input --;
                }
                if(input === 0){
                    break;
                }
            }            
            // last element of list is the answer
            return lst[lst.length-1];
        }
        console.log(Ulam(11));// 26
        console.log(Ulam(206)); // 1856
    }
)();