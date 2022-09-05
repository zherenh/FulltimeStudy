/*
edabit hardest level

A centrifuge, as you probably know, is a laboratory device used to separate fluids based on density. 
The separation is achieved through centripetal force by spinning a collection of test tubes at high speeds. 
his means, the configuration needs to be in balance.
Create a function that takes two numbers as arguments n and k and returns true if the configuration is balanced and false if it's not. 
To check out the formula, look at the resources tab.

cFuge(6, 4) ➞ true
cFuge(2, 1) ➞ false
cFuge(3, 3) ➞ true
*/
(
    ()=>{
        function balance(n:number, k:number):boolean{
            if(k === 1){
                return false;
            }
            if(n % k === 0 || n % (n-k) === 0){
                return true
            }
            return false;
        }
    }
)();