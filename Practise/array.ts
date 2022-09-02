(
    ()=>{
        function array<T>(arr:T[]):T[][]{
            let len = arr.length;
            let output = [];
            for(let i =0;i<len;i++){
                let tmp = [];
                for(let j =0;j<len;j++){
                    tmp.push(arr[i]);
                }
                output.push(tmp);
            }
            return output;
        }
        console.log(array<number>([4, 5]));
    }
)();