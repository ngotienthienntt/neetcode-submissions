class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashNumIndx = {}

        for(let i = 0; i < nums.length; i++){
            const param1 = target - nums[i]
            if(hashNumIndx[param1] != null){
                return [hashNumIndx[param1], i]
            }else{
                hashNumIndx[nums[i]] = i
            }
        }
    }
}
