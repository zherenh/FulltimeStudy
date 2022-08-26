/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
*/
{
    // variable:number[][] for 2D array
    let maximumWealth = function(accounts:number[][]):number {
        let maximum = 0;
        let totalwealth = 0;
        // let xxx of [xxx,xxx], quickly forloop
        for (let customer of accounts){
            for (let wealth of customer){
                totalwealth += wealth;
            }
            if (maximum <= totalwealth) {
                maximum = totalwealth;
            }
            totalwealth = 0;
        }
        return maximum;
    };
    console.log(maximumWealth([[1,2,3],[3,2,1],[9,4,9],[1,6,2]])); // 22
    console.log(maximumWealth([[1,3,3],[1,2,1],[9,1,1],[9,9,9],[2,3,3]])); // 27
}