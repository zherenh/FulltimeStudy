var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/
(function () {
    function move(lst) {
        var zero = [];
        var output = [];
        for (var _i = 0, lst_1 = lst; _i < lst_1.length; _i++) {
            var x = lst_1[_i];
            if (x === 0) {
                zero.push(x);
            }
            else {
                output.push(x);
            }
        }
        return __spreadArray(__spreadArray([], output, true), zero, true);
    }
    console.log(move([0, 1, 0, 3, 12]));
    console.log(move([0]));
})();
