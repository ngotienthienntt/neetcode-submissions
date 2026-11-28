class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // Optimal output = prefix + sufix without use sufix
    // time complexity: O(n)
    productExceptSelf(nums: number[]): number[] {
        let prefix = new Array(nums.length).fill(1)

        for(let i = 1; i < nums.length; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1]
        }

        let productSufix = 1
        for(let i = nums.length - 1 ; i >= 0; i--){
            prefix[i] = prefix[i] * productSufix
            productSufix = productSufix * nums[i]
        }

        return prefix
    }
}
