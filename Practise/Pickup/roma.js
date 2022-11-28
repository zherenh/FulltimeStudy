// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */ 
 var romanToInt = function(s) {
    number = 0;
    for(i = 0; i <= s.length; i++){
        if(s[i] === "M"){
            number += 1000;
        }
        if(s[i] === "D"){
            number += 500;
        }
        if(s[i] === "C"){
            if(s[i+1] === "D"){
                number += 400;
                i++;
            }
            if(s[i+1] === "M"){
                number += 900;
                i++;
            }
            else{
                number += 100;
            }
        }
        if(s[i] === "L"){
            number += 50;
        }
        if(s[i] === "X"){
            if(s[i+1] === "L"){
                number += 40;
                i++;
            }
            if(s[i+1] === "C"){
                number += 90;
                i++;
            }
            else{
                number += 10;
            }
        }
        if(s[i] === "V"){
            number += 5;
        }
        if(s[i] === "I"){
            if(s[i+1] === "V"){
                number += 4;
                i++;
            }
            if(s[i+1] === "X"){
                number += 9;
                i++;
            }
            else{
                number += 1;
            }
        }
    }
    return number;
};

console.log(romanToInt("III"))