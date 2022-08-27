/*
Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
*/
(() => {
    function sum(input) {
        let num = 0;
        let str = input + "";
        let output = 0;
        for (let x of str) {
            num++;
            if (num == 11) {
                break;
            }
            output += Number(x);
        }
        console.log(str, output);
        return output;
    }
    console.log(sum(12345678999));
    console.log(sum(4366576453411415452));
    console.log(sum(22222222222222222222));
})();
