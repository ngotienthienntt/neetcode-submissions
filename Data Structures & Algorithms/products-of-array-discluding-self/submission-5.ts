class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product = 1
        let zeroCount = 0

        for(let i = 0; i < nums.length; i++){
            if(nums[i] != 0){
                product = product * nums[i]
            }else{
                zeroCount++
            }
        }
        console.log("zero count: ", zeroCount)

        if(zeroCount > 1) return new Array(nums.length).fill(0)

        let output = []
        for(let i = 0; i < nums.length; i++){
            if(zeroCount > 0){
                output.push(nums[i] == 0 ? product : 0)
            }else{
                output.push(product / nums[i])
            }
        }

        return output
    }
}
