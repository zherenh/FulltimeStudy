/*
edabit hardest level

Given a positive number as a string, multiply the number by 11 and also return it as a string. However, there is a catch:
You are NOT ALLOWED to simply cast the numeric string into an integer!
Now, how is this challenge even possible? Despite this, there is still a way to solve it,
and it involves thinking about how someone might multiply by 11 in their head. See the tips below for guidance.

multiplyBy11("11") ➞ "121"

multiplyBy11("111111111") ➞ "1222222221"

multiplyBy11("1213200020") ➞ "13345200220"

multiplyBy11("1217197941") ➞ "13389177351"

multiplyBy11("9473745364784876253253263723") ➞ "104211199012633638785785900953"
*/
(
    () => {
        function M11(str: string): string {
            let output: string = "";
            // set up flag for plus one
            let isOverTen: boolean = false;
            // get the last number first
            output += str[str.length - 1]
            for (let i = str.length - 1; i > 0; i--) {
                let tmp: string
                // if over ten, plus one
                if (isOverTen) {
                    tmp = (Number(str[i]) + Number(str[i - 1]) + 1) + '';
                } else {
                    tmp = (Number(str[i]) + Number(str[i - 1])) + '';
                }
                // output plus the last number in tmp
                output = tmp[tmp.length - 1] + output;
                // control the overten flag
                Number(str[i]) + Number(str[i - 1]) > 9 ? isOverTen = true : isOverTen = false;
            }
            //if the first number should add 1
            if (isOverTen) {
                output = (Number(str[0]) + 1) + output;
            } else {
                output = str[0] + output;
            }
            return output;
        }
        console.log(M11("11111"));//122221
        console.log(M11("1217197941"));// 13389177351
        console.log(M11("1213200020")); // 13345200220
        console.log(M11("9473745364784876253253263723"));//104211198012633638785785800953
    }
)();