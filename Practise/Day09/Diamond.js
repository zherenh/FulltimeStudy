(
    () => {
        function diamond(num) {
            let output = [[]];
            let half;
            num % 2 !== 0 ? half = (num - 1) / 2 : half = num / 2;
            for (let i = 0; i < num; i++) {
                let tmp = [];
                for (let j = 0; j < num; j++) {
                    if (num % 2 !== 0) {
                        if (i <= half) {
                            (j === half - i || j === half + i) ? tmp.push(1) : tmp.push(0);
                        } else {
                            (j === i - half || j === num - (i - half) - 1) ? tmp.push(1) : tmp.push(0);
                        }
                    } else {
                        if (i < half) {
                            (j === half - i - 1 || j === half + i) ? tmp.push(1) : tmp.push(0);
                        } else{
                            (j === i - half || j === num - (i - half) - 1) ? tmp.push(1) : tmp.push(0);
                        }
                    }
                }
                output[0].push(tmp);
            }
            num % 2 !== 0 ? output[1] = "perfect cut" : output[1] = "good cut";
            return output;
        }
        console.log(diamond(6));
        console.log(diamond(11));
    }
)();