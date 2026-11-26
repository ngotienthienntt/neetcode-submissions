class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Map();

        for(let i = 0; i < nums.length;i++){
            if(map.get(nums[i])){
                return true
            }

            map.set(nums[i], 1)
        }

        return false
    }
}
