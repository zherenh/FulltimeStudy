/*
edabit hardest level
N-th Element of a Binary Sorted Array with length = N

Given two positive integers n and k, generate all binaries between the integers 0 and (2^n) - 1 , 
inclusive. These binaries will be sorted in descending order according to the number of existing 1s on it, 
if there is a tie, we choose the lowest numerical value. Return the k-th element from the sorted array created.

For n = 3 and k = 5 for example, the numbers from 0 to 7 (7 = (2^3) - 1), make the binary array:
["0", "1", "10", "11", "100", "101", "110", "111"]
When sorted by the rules, we have:
["111", "110", "101", "100", "11", "10", "1", "0"]
And "11" is the fifth element on it.

kthBinaryArray(3, 5) ➞ "11"

kthBinaryArray(4, 10) ➞ "110"
*/
(
    () => {
        function Nth(N: number, K: number): string {
            let lst: string[] = [];
            for (let i = 0; i >= 0; i++) {
                let tmp: string = i.toString(2);
                if (tmp.length > N) {
                    break
                }
                lst.push(tmp);
            }
            lst.sort;
            console.log(lst);
            /*
            ['0', '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
            */
            return lst[lst.length - K];
        }
        console.log(Nth(4, 10)); //'110'
    }
)();