class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const history = {}

        for(let i = 0; i < nums.length; i++){
            if(history[nums[i]] != null)
                return true

            history[nums[i]] = 1
        }

        return false
    }
}
