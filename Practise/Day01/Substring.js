/*
Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Input: s = "cbbd"
Output: "bb"
*/
var Substring = function (s) {
    var cha = s[0];
    var tmpLen = 0;
    var bool = true;
    var len = 0;
    if (s.length > 0) {
        for (var x = 0; x < s.length; x++) {
            for (var y = x + 1; y < s.length; y++) {
                tmpLen = y - x;
                var tmpIndex = 0;
                for (var k = 0; k < (y - x) / 2; k++) {
                    if (s[x + k] != s[y - tmpIndex]) {
                        bool = false;
                        break;
                    }
                    bool = true;
                    tmpIndex++;
                }
                if (bool == true && tmpLen > len) {
                    len = tmpLen;
                    cha = s.slice(x, y + 1);
                }
            }
        }
    }
    return cha;
};
var s = "cbbd";
console.log(Substring(s));
