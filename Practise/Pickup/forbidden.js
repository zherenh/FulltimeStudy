var minimumJumps = function(forbidden, a, b, x) {
    pos = 0;
    count = 0;
    tmp = 0;
    while(forbidden.indexOf(pos) === -1){
        if(pos === x){return count}
        else if(pos-b > x){
            break;
        }
        else if(pos < x){
            pos += a;
            count += 1;
            tmp += 1;
        }
        else{
            for(i = 1; pos-b*i < x; i++){
                if(pos-b*i === x){
                    return count + i;
                }
            }
            pos += a;
            count += 1;
        }
    }
    if(pos !== x){return -1}
};