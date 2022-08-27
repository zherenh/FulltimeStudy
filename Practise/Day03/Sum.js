/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series
*/
(function () {
    function sum(num) {
        var output = "";
        var str = "";
        for (var i = 1; i <= num; i++) {
            str += Math.pow(i, i);
        }
        for (var i = str.length - 1; i >= str.length - 10; i--) {
            output = str[i] + output;
        }
        return Number(output);
    }
    console.log(sum(5)); // 4272563125
    console.log(sum(7)); // 6656823543
})();
