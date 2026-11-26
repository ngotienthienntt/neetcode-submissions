class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let newNums = nums.map((item, index) => [item, index])
        newNums.sort((a, b) => a[0] - b[0])
        let i = 0
        let j = newNums.length - 1
        while(i < j){
            if(newNums[i][0] + newNums[j][0] > target){
                j--
            }else if(newNums[i][0] + newNums[j][0] < target){
                i++
            }else{
                return [newNums[i][1], newNums[j][1]]
            }
        }

        return []
    }
}
