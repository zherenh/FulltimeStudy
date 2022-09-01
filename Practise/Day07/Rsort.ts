/*
edabit hardest level

R, a programming language used for Statistics and Data Analysis, 
has the function rank, which returns the rank for each value in a vector.

my_arr = [1, 3, 3, 9, 8]
// Ranked would be: [0, 1.5, 1.5, 4, 3]

When two or more values have the same rank, 
they are assigned the mean of their rankings. 
Here, the two 3s have ranks 1 and 2, so both are assigned rank 1.5.

rank([9, 1, 4, 5, 4]) ➞ [4.0, 0.0, 1.5, 3.0, 1.5]
*/
(
    () => {
        function Rank(lst:number[]):number[] {
            let output:number[];
            for(let i = 0; i<lst.length;i++){
                // count the level
                let level:number = 0;
                for(let j = 0; j<lst.length;j++){
                    // when compare the identical number
                    if(i === j){
                        continue;
                    }
                    // level ++
                    if(lst[i]>lst[j]){
                        level = level + 1;
                    }
                    // when compare the same number or char
                    if(lst[i]=lst[j]){
                        level = level + 0.5;
                    }
                }
                // add the final level of number into output
                output.push(level);
            }
            return output;
        }
        console.log(Rank([9, 1, 4, 5, 4]));
    }
)()