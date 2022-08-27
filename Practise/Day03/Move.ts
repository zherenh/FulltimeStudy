/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/
(
    ()=>{
        function move(lst:number[]):number[]{
            let zero:number[] = [];
            let output:number[] = [];
            for(let x of lst){
                if(x === 0){
                    zero.push(x);
                }else{
                    output.push(x);
                }
            }
            return [...output, ...zero];
        }
        console.log(move([0,1,0,3,12]));
        console.log(move([0]));
    }
)();