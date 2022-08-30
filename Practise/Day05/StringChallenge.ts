/*
Have the function StringChallenge(str) read the str parameter being passed which will be an encrypted string and your program should output the original decrypted string. 
The encryption being used is the following: For every character i in str up to the second to last character, take the i and i+1 characters and encode them by writing the letters of the alphabet, 
in order, that range in the same direction between those chosen characters. For example: if the original string were bo then it would be encoded as cdefghijklmn, 
but if the string were boa then bo is encoded as cdefghijklmn and oa is encoded as nmlkjihgfedcb with the final encrypted string being cdefghijklmnnmlkjihgfedcb. 
So str may be something like the encrypted string just written, and your program should decrypt it and output the original message.
The input string will only contains lowercase characters (a...z). There are also three important rules to this encryption based on specific character sequences.

1) If the original string contains only one letter between two chosen characters, 
such as the string ac then this would be encrypted as bR with R standing for what direction in the alphabet to go in determining the original characters. 
The encrypted string bR represents ac but the encrypted string bL represents ca (R = right, L = left).

2) If the original string contains zero letters between two chosen characters, 
such as the string ab then this would be encrypted as abS, with S representing the fact that no decryption is needed on the two letters preceding S. 
For example, if the original string were aba then the encryption would be abSbaS, but be careful because decrypting this you get abba, but the actual original string is aba.

3) If the original string contains a repeat of letters, such as the string acc then this would be encrypted as bRcN, 
with N representing the fact that no change in characters occurred on the character preceding N. 
The input string will never only be composed of repeated characters.

Input: "bcdefghijklmnopqrstN"
Output: att

Input: "abSbaSaNbR"
Output: abaac
*/
(
    () => {
        function StringChallenge(str: string): string {
            const table = 'abcdefghijklmnopqrstuvwxyz';
            let output = "";
            let tmpStr = "";
            let index = 0;
            for (let i = 0; i < str.length; i++) {
                // if there is capital letter in string
                if (str[i] === 'R' || str[i] === 'L' || str[i] === 'S' || str[i] === 'N') {
                    // for R
                    if (str[i] === 'R') {
                        // get the string between begining and current index
                        tmpStr = str.slice(index, i);
                        // change index
                        index = i + 1
                        // change character to unicode
                        let front = tmpStr.charCodeAt(0) - 1;
                        // use unicode to get the neighbor character
                        let back = tmpStr.charCodeAt(tmpStr.length - 1) + 1;
                        // push the characters into output
                        output = output + String.fromCharCode(back) + String.fromCharCode(front);
                        // slice the string
                        str = str.slice(index, str.length);
                    }
                    if (str[i] === 'L') {
                        tmpStr = str.slice(index, i);
                        index = i + 1;
                        let front = tmpStr.charCodeAt(0) - 1;
                        let back = tmpStr.charCodeAt(tmpStr.length - 1) + 1;
                        output = output + String.fromCharCode(front) + String.fromCharCode(back);
                        str = str.slice(index, str.length);
                    }
                    if (str[i] === 'S') {
                        tmpStr = str.slice(index, i - 2);
                        index = i + 1;
                        let front = tmpStr.charCodeAt(0) - 1;
                        let back = tmpStr.charCodeAt(tmpStr.length - 1) + 1;
                        output = output + String.fromCharCode(front) + String.fromCharCode(back) + str.slice(i - 2, i);
                        str = str.slice(i - 1, i) + str.slice(index, str.length);
                    }
                    if (str[i] === 'N') {
                        tmpStr = str.slice(index, i - 1);
                        index = i + 1;
                        let front = tmpStr.charCodeAt(0) - 1;
                        let back = tmpStr.charCodeAt(tmpStr.length - 1) + 1;
                        output = output + String.fromCharCode(front) + String.fromCharCode(back) + str.slice(i - 1, i);
                        str = str.slice(index, str.length);
                    }
                }
                else {
                    tmpStr = str;
                    let front = tmpStr.charCodeAt(0) - 1;
                    let back = tmpStr.charCodeAt(tmpStr.length - 1) + 1;
                    output = output + String.fromCharCode(front) + String.fromCharCode(back);
                }
            }
            return output;
        }
    }
)();