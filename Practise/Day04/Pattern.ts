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
(
    () => {
        function checkPattern(outerLst: number[][], pattern: string): boolean {
            // init Dictionary
            class Dictionary {
                items: object;
                constructor() {
                    this.items = {};
                }
                // check
                has(key: any): boolean {
                    return this.items.hasOwnProperty(key);
                }
                // update
                set(key: any, val: any) {
                    this.items[key] = val;
                }
                // delete
                delete(key: any): boolean {
                    if (this.has(key)) {
                        delete this.items[key];
                    }
                    return false;
                }
                // get
                get(key: any): any {
                    return this.has(key) ? this.items[key] : undefined;
                }
                values(): any[] {
                    let values: any[] = [];
                    for (let k in this.items) {
                        if (this.has(k)) {
                            values.push(this.items[k]);
                        }
                    }
                    return values;
                }
            }
            // if the length of list and pattern is different, false
            if (outerLst.length !== pattern.length) {
                return false;
            }
            let dic = new Dictionary();
            for (let i = 0; i < outerLst.length; i++) {
                let value: string = "";
                for (let j = 0; j < outerLst[i].length; j++) {
                    // make value as string to put into dictionary
                    value = outerLst[i][j] + value
                }
                if(dic.has(pattern[i])){
                    if(dic.get(pattern[i]) !== value){
                        return false;
                    }
                }
                // the character in pattern is the key in dictionary
                dic.set(pattern[i],value);
            }
            return true;
        }
        console.log(checkPattern([[1, 2, 3], [1, 2, 3], [3, 2, 1], [3, 2, 1]], "AABB"));
    }
)();