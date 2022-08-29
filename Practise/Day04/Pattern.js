/*
edabit: Hardest Level
https://edabit.com/challenge/oXWwHkutPD5Aer6Db

Create a function that checks if the sub-arrays in an array adhere to the specified pattern.
The length of the pattern will always be the same as the length of the (main) array.
The pattern does not necessarily have to be alphabetically ordered (see last example).

checkPattern([[1, 1], [2, 2], [1, 1], [2, 2]], "ABAB") ➞ true

checkPattern([[1, 2], [1, 3], [1, 4], [1, 2]], "ABCA") ➞ true

checkPattern([[1, 2, 3], [1, 2, 3], [3, 2, 1], [3, 2, 1]], "AABB") ➞ true

checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "ABCD") ➞ true

checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "DCBAA") ➞ fasle
*/
(function () {
    function checkPattern(outerLst, pattern) {
        var Dictionary = /** @class */ (function () {
            function Dictionary() {
                this.items = {};
            }
            Dictionary.prototype.has = function (key) {
                return this.items.hasOwnProperty(key);
            };
            Dictionary.prototype.set = function (key, val) {
                this.items[key] = val;
            };
            Dictionary.prototype["delete"] = function (key) {
                if (this.has(key)) {
                    delete this.items[key];
                }
                return false;
            };
            Dictionary.prototype.get = function (key) {
                return this.has(key) ? this.items[key] : undefined;
            };
            Dictionary.prototype.values = function () {
                var values = [];
                for (var k in this.items) {
                    if (this.has(k)) {
                        values.push(this.items[k]);
                    }
                }
                return values;
            };
            return Dictionary;
        }());
        if (outerLst.length !== pattern.length) {
            return false;
        }
        var dic = new Dictionary();
        for (var i = 0; i < outerLst.length; i++) {
            var value = "";
            for (var j = 0; j < outerLst[i].length; j++) {
                value = outerLst[i][j] + value;
            }
            if (dic.has(pattern[i])) {
                if (dic.get(pattern[i]) !== value) {
                    return false;
                }
            }
            dic.set(pattern[i], value);
        }
        return true;
    }
    console.log(checkPattern([[1, 2, 3], [1, 2, 3], [3, 2, 1], [3, 2, 1]], "AABB"));
})();
