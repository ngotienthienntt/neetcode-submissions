class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // c1: hash tìm trong hash O(n)
        // sort: so sánh nums[i] = num[i + 1] return false O(nlogn)
        // 
        nums.sort((a, b) => a - b)
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] == nums[i + 1]){
                return true
            }
        }

        return false
    }
}
