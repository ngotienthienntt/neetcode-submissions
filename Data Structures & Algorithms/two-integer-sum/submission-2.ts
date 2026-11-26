class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        //c1: tìm target - nums[i] in array
        //c2: brute force kết hợp từng cặp
        //c3: tạo hash trước khi tìm targt - num[i]

        //c2

        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target) return [i, j]
            }
        }

        return []
    }
}
