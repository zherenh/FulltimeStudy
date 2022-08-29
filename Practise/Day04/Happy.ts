/*
edbit: Hardest Level
https://edabit.com/challenge/GnF85aA7XgZdZYrZp

A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. 
If such a process results in an endless cycle of numbers containing 4, the number is said to be an unhappy number.
Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.

isHappy(67) ➞ false
isHappy(89) ➞ false
isHappy(139) ➞ true
isHappy(1327) ➞ false
isHappy(2871) ➞ false
isHappy(3970) ➞ true
*/
(
    () => {
        function isHappy(num: number): boolean {
            let str:string = num+"";
            let sum: number  = 0;
            for(let i = 0; i<str.length;i++){
                let tmp:number = Number(str[i]);
                sum += tmp*tmp;
            }
            str = sum+"";
            let hasOne:boolean = false;
            for(let i = 0; i<str.length;i++){
                if(str[i] === "4"){
                    return false;
                }
                if(str[i] === "1"){
                    hasOne = true;
                }
            }
            if(hasOne){
                console.log("happy", str);
                return true;
            }else{
                sum = Number(str);
                console.log(str,sum,typeof(sum));
                isHappy(sum);
                // sum = Number(str);
                // isHappy(sum);
            }
        }
        console.log(isHappy(67));
        
    }
)();