/*
Pandigital Number
An n-digit number is considered pandigital if it makes use
of all the digits 1 to n exactly once, where n is the number
of non-zero digits.
For example, 2143 and 103245 are both pandigital number,
Write a function take a interger, return boolean

Input:1423
Output:true

Input:84023
Output:false

Input:14023
Output:true

Input:1483
Output:false

Input:987654321
Output:true
*/
(function () {
    function Pandigital(num) {
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
        var str = num + '';
        var dic = new Dictionary();
        var biggest = 0;
        for (var i = 0; i < str.length; i++) {
            dic.set(str[i], 0);
        }
        for (var i = 0; i < str.length; i++) {
            if (Number(str[i]) > biggest) {
                biggest = Number(str[i]);
            }
        }
        for (var i = 1; i < biggest; i++) {
            if (dic.has(i + '') === false) {
                return false;
            }
        }
        return true;
    }
    console.log(Pandigital(9));
})();
