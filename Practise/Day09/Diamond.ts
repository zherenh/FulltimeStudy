/*
    edabit hardest level

You are a skilled diamondsmith whose business is getting better by the day. Eventually, 
you decided that you needed to scale to keep up with demand.

Build a diamond-cutting machine (i.e. write a function that takes in a positive integer representing the raw stone's carat).
The output would be the finished diamond and tag indicating its quality, arranged in an array of two elements.
The first element would be an array of arrays representing the diamond.
The second element would be a string indicating "perfect cut" if all the diamond's edges are pointy or "good cut" otherwise.

diamond(3) ➞ [
  [[0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]],
  "perfect cut"
]
// Perfect edge.

diamond(4) ➞ [
  [[0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0]],
  "good cut"
]
// First and last rows had blunt edges with two 1s each.

diamond(11) ➞ [
  [[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
  "perfect cut"
]

0 0 1 0 0
0 1 0 1 0
1 0 0 0 1
0 1 0 1 0
0 0 1 0 0 
*/
(
    () => {
        function diamond(num:number):[number[][],string] {
            // init
            let output:[number[][],string] = [[],''];
            let arr:number[][] = [];
            let half:number;
            // half for diff situation
            num % 2 !== 0 ? half = (num - 1) / 2 : half = num / 2;
            for (let i = 0; i < num; i++) {
                let tmp:number[] = [];
                // make diamond
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
                arr.push(tmp);
            }
            output[0]=(arr);
            // analysis
            num % 2 !== 0 ? output[1] = "perfect cut" : output[1] = "good cut";
            return output;
        }
        console.log(diamond(6));
        console.log(diamond(11));
    }
)();