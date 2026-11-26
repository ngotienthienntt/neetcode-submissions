class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // c3:
        let map = new Map();
        for(let i = 0; i < nums.length; i++){
            let value = target - nums[i]
            if(map.get(nums[i]) != undefined){

                return [map.get(nums[i]), i]
            }

            map.set(value, i)

        }

        return []
    }
}
