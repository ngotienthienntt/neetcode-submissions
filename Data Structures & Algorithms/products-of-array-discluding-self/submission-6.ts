class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // product [i] = prefix[i] * suffix[i]
    // prefix là tổng trước i
    // suffix là tổng sau i
    productExceptSelf(nums: number[]): number[] {
        let prefix = new Array(nums.length).fill(1)
        let sufix = new Array(nums.length).fill(1)
        let output = new Array(nums.length).fill(1)

        for(let i = 1; i < nums.length; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1]
        }

        // console.log("prefix: ", prefix)

        for(let i = nums.length - 2; i >= 0; i--){
            sufix[i] = nums[i + 1] * sufix[i + 1]
        }

        // console.log("sufix: ", sufix)


        for(let i = 0; i < nums.length; i++){
            output[i] = prefix[i] * sufix[i]
        }

        return output

    }
}
