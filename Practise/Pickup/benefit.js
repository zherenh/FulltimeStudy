// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

var maxProfit = function(prices) {
    len = prices.length();
    max = Math.max(prices);
    benefit = 0;
    for(i = 0; i < len; i++){
        if(prices[i] < prices[i+1]){
            continue;
        }
        if(prices[i] > prices[i+1]){
            benefit += (prices[i] - prices[i+1]);
            i++;
            continue;
        }
    }
};