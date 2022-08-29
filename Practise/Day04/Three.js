/*
edabit: Hardest Level

You are given a number n. Determine whether n has exactly 3 divisors or not.

isExactlyThree(4) ➞ true
// 4 has only 3 divisors: 1, 2 and 4

isExactlyThree(12) ➞ false
// 12 has 6 divisors: 1, 2, 3, 4, 6, 12

isExactlyThree(25) ➞ true
// 25 has only 3 divisors: 1, 5, 25
*/
(function () {
    function isExactlyThree(input) {
        var output = false;
        for (var i = 2; i <= input / 2; i++) {
            if (i * i === input) {
                output = true;
            }
            if (input % i === 0 && i * i !== input) {
                output = false;
                break;
            }
        }
        return output;
    }
    console.log(isExactlyThree(26));
})();
