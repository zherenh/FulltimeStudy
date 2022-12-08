var minimumJumps = function(forbidden, a, b, x) {
    pos = 0;
    count = 0;
    tmp = 0;
    while(forbidden.indexOf(pos) === -1){
        if(pos === x){return count}
        else if(pos-b*10 > x){
            break;
        }
        else if(pos < x){
            pos += a;
            count += 1;
            tmp += 1;
        }
        else{
            for(i = 1; ;i++){
                if(pos - (b*i) === x){
                    return count + i;
                }
                if(pos - (b*i) < x){break;}
            }
            pos += a;
            count += 1;
        }
    }
    if(pos !== x){return -1}
};
console.log(minimumJumps([8,3,16,6,12,20],15,13,11))