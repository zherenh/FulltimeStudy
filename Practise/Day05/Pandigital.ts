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
(
    () => {
        function Pandigital(num: number): boolean {
            // init dictionary
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
            let str = num + '';
            let dic = new Dictionary();
            let biggest = 0;
            // write down every digit of the input number in dictionary
            for(let i = 0; i<str.length; i++){
                dic.set(str[i],0);
            }
            // get the biggest number
            for(let i = 0; i<str.length; i++){
                if(Number(str[i])>biggest){
                    biggest = Number(str[i]);
                }
            }
            // check from 1 to biggest number, whether all of them are in dict
            // ingnore 0 directly
            for(let i = 1; i<biggest; i++){
                if(dic.has(i+'') === false){
                    return false;
                }
            }
            return true;
        }
        console.log(Pandigital(9));
    }
)();