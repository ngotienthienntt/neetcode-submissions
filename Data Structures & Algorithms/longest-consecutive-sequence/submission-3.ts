class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            if(!map.get(nums[i])){
                let leftLen = map.get(nums[i] - 1) || 0
                let rightLen = map.get(nums[i] + 1) || 0

                let totalLen = leftLen + rightLen + 1

                map.set(nums[i], totalLen) //  nhớ phải set số hiện tại để không bị lặp lại
                map.set(nums[i] - leftLen, totalLen)
                map.set(nums[i] + rightLen, totalLen)

            }
            // console.log("i = ", i)
            // console.log("map: ", map)
        }

        let max = 0

        for(const [key, value] of map){
            if(value > max)
            max = value
        }

        // console.log("map: ", map)

        return max
    }
}
