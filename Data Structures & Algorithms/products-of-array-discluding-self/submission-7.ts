class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix = new Array(nums.length).fill(1)
        let sufix = new Array(nums.length).fill(1)
        let output = new Array(nums.length).fill(1)

        for(let i = 1; i < nums.length; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1]
        }

        // console.log("prefix: ", prefix)

        // console.log("sufix: ", sufix)


        let productSufix = 1
        for(let i = nums.length - 1 ; i >= 0; i--){
            prefix[i] = prefix[i] * productSufix
            productSufix = productSufix * nums[i]
        }

        return prefix
    }
}
