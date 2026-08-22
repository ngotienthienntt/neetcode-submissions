class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 0;
        let maxProfit = 0

        while(right < prices.length){
            if(prices[left] < prices[right]){
                maxProfit = Math.max(maxProfit, prices[right] - prices[left])
                right++
            }else{
                left = right
                right++
            }
        }

        return maxProfit
    }
}
