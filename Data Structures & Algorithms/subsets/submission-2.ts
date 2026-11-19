class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let output = [[]]

        for(let i = 0; i < nums.length; i++){
            let tempSubset = []
            for(let j = 0; j < output.length; j++){
                tempSubset.push([...output[j], nums[i]])
            }

            output.push(...tempSubset)
        }

        return output
    }
}
