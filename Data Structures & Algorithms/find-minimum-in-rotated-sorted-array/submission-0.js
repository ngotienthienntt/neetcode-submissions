class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let left = 0;
        let right = nums.length - 1
        let minimum = nums[0]

        while (left <= right){
            let middle = Math.floor((left + right) / 2)

            if(nums[middle] < minimum){
                minimum = nums[middle]
                right = middle -1
            }else {
                left = middle + 1
            }
        }

        return minimum
    }
}
