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
(function () {
    function M11(str) {
        var output = "";
        var isOverTen = false;
        output += str[str.length - 1];
        for (var i = str.length - 1; i > 0; i--) {
            var tmp = void 0;
            if (isOverTen) {
                tmp = (Number(str[i]) + Number(str[i - 1]) + 1) + '';
            }
            else {
                tmp = (Number(str[i]) + Number(str[i - 1])) + '';
            }
            output = tmp[tmp.length - 1] + output;
            Number(str[i]) + Number(str[i - 1]) > 9 ? isOverTen = true : isOverTen = false;
        }
        if (isOverTen) {
            output = (Number(str[0]) + 1) + output;
        }
        else {
            output = str[0] + output;
        }
        return output;
    }
    console.log(M11("11111"));
    console.log(M11("1217197941"));
    console.log(M11("1213200020"));
    console.log(M11("9473745364784876253253263723"));
})();
