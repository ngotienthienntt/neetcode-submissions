class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        let res = []

        nums.sort((a, b) => {return a - b})
        console.log("nums: ", nums)
        function dfs(index: number, subset: number[], res: number[][]){
            if(index >= nums.length){
                res.push(subset)
                return
            }
            dfs(index + 1, [...subset, nums[index]], res)
            while(nums[index] == nums[index + 1]){
                index++
            }
            dfs(index + 1, [...subset], res)

        }

        dfs(0, [], res)

        return res
    }
}
