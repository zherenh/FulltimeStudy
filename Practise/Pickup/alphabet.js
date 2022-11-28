/**
 * @param {string} s
 * @return {string[]}
 * 
 * Input: s = "a1b2"
 */
 var letterCasePermutation = function(s) {
    output = [];
    if(s.search(/[A-z]/)=== 0){
        k = 0;
    }
    else{
        k = 1;
    }
    tmp = s;
    for(i = k; i<s.length;i+=2){
        for(j = i; j<s.length;j+=2){
            if((s[j]).search(/[a-z]/) === 0){
                s = s.slice(0, j) + (s[j]).toUpperCase() + s.slice(j+1);
            }else{
                s = s.slice(0, j) + (s[j]).toLowerCase() + s.slice(j+1);
            }
            output.push(s);
        }
        s = tmp; 
    }
    console.log(output);
};
letterCasePermutation("3a1b2k6L9")