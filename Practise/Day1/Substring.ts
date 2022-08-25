/*
Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Input: s = "cbbd"
Output: "bb"
*/
let Substring = function (s: string): string {
    let cha = s[0];
    let tmpLen = 0;
    let bool = true;
    let len = 0;
    if (s.length > 0) {
        for (let x = 0; x < s.length; x++) {
            for (let y = x + 1; y < s.length; y++) {
                tmpLen = y - x;
                var tmpIndex = 0;
                for (let k = 0; k < (y - x) / 2; k++) {
                    if (s[x + k] != s[y - tmpIndex]) {
                        bool = false;
                        break;
                    }
                    bool = true;
                    tmpIndex++;
                }
                if (bool == true && tmpLen > len) {
                    len = tmpLen;
                    cha = s.slice(x, y + 1)
                }
            }
        }
    }
    return cha;
};
let s: string = "cbbd";
console.log(Substring(s));
