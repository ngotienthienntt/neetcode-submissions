class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        // question: 
        // distinct là nums sẽ không chứa các con số trùng nhau? => đúng
        // các số có thể xuất hiện nhiều lần? => có
        // the combinations is the same when the frequent of each number is the same
        // nums include nay negative? => only positive value
        let res = []
        
        this.dfs(target, 0, nums, [], 0, res)

        return res

    }

    dfs(target: number, currentIndex: number, nums: number[], subset: number[], sum: number, res: number[][]){
        
        if(sum == target){
            res.push(subset)
            return
        }

        if(sum > target){
            return
        }

        for(let i = currentIndex; i < nums.length; i++){
            this.dfs(target, i, nums, [...subset, nums[i]], sum + nums[i], res)
        }
    }
}
