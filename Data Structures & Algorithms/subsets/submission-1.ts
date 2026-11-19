class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let res = []
        this.dfs(0, nums, [], res)
        return res
    }

    dfs(currentIndex: number, nums: number[], subset: number[], res: number[][]){
        if(currentIndex == nums.length){
            return res.push(subset)
        }

        this.dfs(currentIndex + 1, nums, [...subset], res)
        this.dfs(currentIndex + 1, nums, [...subset, nums[currentIndex]], res)
    }
}
