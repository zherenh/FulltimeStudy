/**
 * @param {string} s
 * @return {string[]}
 * 
 * Input: s = "a1b2"
 */
 var letterCasePermutation = function(s) {
    output = [s];
    if(s.search(/[A-z]/)=== -1){
        return [s];
    }
    else{
        k = s.search(/[A-z]/)
    }
    tmp = s;
    for(i = k; i<s.length;i++){
        if((s[i]).search(/[A-z]/)=== -1){continue;}
        for(j = i; j<s.length;j++){
            if((s[j]).search(/[A-z]/)=== -1){continue;}
            if((s[j]).search(/[a-z]/) === 0){
                s = s.slice(0, j) + (s[j]).toUpperCase() + s.slice(j+1);
            }else{
                s = s.slice(0, j) + (s[j]).toLowerCase() + s.slice(j+1);
            }
            output.push(s);
        }
        if((s[j]).search(/[a-z]/) === 0){
            s = s.slice(0, i) + (s[i]).toUpperCase() + s.slice(i+1);
        }else{
            s = s.slice(0, i) + (s[i]).toLowerCase() + s.slice(i+1);
        }
        s = tmp; 
    }
    return output;
};
console.log(letterCasePermutation("3a1b2k6L9"))