/*
Read the string array input which contain key:value pairs, 
where the key is string and the value is an integer.
Output should be a string with new key:value pairs
separated by comma such that each key only appear once.
And the order from the key with biggest value to the key with smallest value.

Input:["X:-1","Y:1","X:-4","B:3","X:5"]
Output: B:3,Y:1

Input:["Z:0","A:-1"]
Output: A:-1
*/
(
    () => {
        function Searching(strArr: string[]): string {
            if (strArr?.length === 0 || !strArr) {
                return '';
            }
            const result = []
            const strObj = {}
            strArr.forEach(item => {
                const Alph = item.slice(0, 1)
                if (!strObj[Alph]) {
                    strObj[Alph] = Number(item.slice(2))
                } else {
                    strObj[Alph] += Number(item.slice(2))
                }
            })

            Object.keys(strObj).forEach(item => {
                if (strObj[item] === 0) {
                    delete strObj[item]
                } else {
                    result.push(item + ':' + strObj[item])
                }
            })

            return result.sort().reduce((total, curr) => {
                if (total === '') {
                    return curr
                }
                return total + ',' + curr
            }, '')
        }
        console.log(Searching(["X:-1","Y:1","X:-4","B:3","X:5"]));
        console.log(Searching(["Z:0","A:-1"]));
    }
)();