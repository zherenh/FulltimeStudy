/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21
*/
{
    var reverse = function (x) {
        // change number to string
        var tmp = x + "";
        var output = "";
        var isLastNum = true;
        for (var i = tmp.length - 1; i >= 0; i--) {
            // check if the last number is 0
            if (isLastNum && tmp[i] === "0") {
                continue;
            }
            else {
                isLastNum = false;
            }
            // check is it negative
            if (tmp[i] === "-") {
                output = "-" + output;
            }
            else {
                output += tmp[i];
            }
        }
        // change the number back to string
        output = Number(output);
        return output;
    };
    console.log(reverse(123456789));
    console.log(reverse(-1203000));
}
