/*  
    edabit hardest level

    Create a function that identifies the very first item that has recurred in the string argument passed. 
    It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; 
    or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first
recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}
recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}
recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
recurIndex("") ➞ {}
recurIndex(null) ➞ {}
*/
(
    () => {
        function repeat(str: string): string {
            class Dictionary {
                items: object;
                constructor() {
                    this.items = {};
                }
                has(key: any): boolean {
                    return this.items.hasOwnProperty(key);
                }
                set(key: any, val: any) {
                    this.items[key] = val;
                }
                delete(key: any): boolean {
                    if (this.has(key)) {
                        delete this.items[key];
                    }
                    return false;
                }
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

            let output: string;
            let dict = new Dictionary();
            for (let i = 0; i < str.length; i++) {
                if (dict.has(str[i])) {
                    output = str[i] + ":[" + dict.get(str[i]) + "," + i + "]";
                    break;
                } else {
                    dict.set(str[i], i)
                }
            }
            return output;
        }
        console.log(repeat("DXTDXTXDTXD"));//D:[0,3]
        console.log(repeat("YXZXYTUVXWV"));//X:[1,3]
        console.log(repeat("YZTTZMNERXE"));//T:[2,3]
        console.log(repeat("AREDCBSDERD"));//D:[3,7]
    }
)();