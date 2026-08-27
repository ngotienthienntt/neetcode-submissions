class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // c5: binary search
        let left = 1
        let right = nums.length - 1

        while(left < right){
            let middle = Math.floor((right + left)  / 2)
            let numberOfLeftToMiddle = middle - left + 1

            let countLeftToMiddle = 0
            for(let i = 0; i < nums.length; i++){
                if(nums[i] <= middle && nums[i] >= left)
                    countLeftToMiddle++
            }

            if(countLeftToMiddle > numberOfLeftToMiddle){
                right = middle
            }else{
                left = middle + 1
            }
        }

        return left
    }
}
