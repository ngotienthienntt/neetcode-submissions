class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        let res = []
        
        this.dfs([], nums, res)


        return res
    }

    dfs(subset: number[], nums: number[], res: number[][]){
        if(nums.length == 0) {
            res.push(subset)
        }

        for(let i = 0; i < nums.length; i++){
            let newSubset = [...subset, nums[i]]
            let newNums = nums.filter((value, index) => {return !newSubset.includes(value)})
            this.dfs(newSubset, newNums, res)
        }
    }
}