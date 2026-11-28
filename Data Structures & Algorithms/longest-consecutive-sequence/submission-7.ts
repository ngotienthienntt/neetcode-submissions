class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        if(nums.length == 0) return 0

        nums.sort((a, b) => a-b)
        let maxLen = 1
        let currStreak = 1
        let map = new Map()

        nums = nums.filter((item) => {
            if(map.get(item)){
                return false
            }else{
                map.set(item, 1)
                return true
            }
        })

        // console.log("nums: ", nums)
        for(let i = 0; i < nums.length - 1; i++){

            if(nums[i] + 1 == nums[i + 1]){
                currStreak++
                maxLen = Math.max(maxLen, currStreak)
            }else{
                currStreak = 1
            }
        }

        return maxLen
    }
}
