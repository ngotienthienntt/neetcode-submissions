class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // solution hashmap chưa hiểu tại sao lại khôi phục những phần tử của
        // vòng lặp j mà không khôi phục i?

        // tai sao qua mỗi i lại reset count[j] vì mỗi i có thể sinh ra những triplets khác nhau,nên số frequence của count[j] phải được reset

        nums = nums.sort((a, b) => a - b)
        let count = new Map()
        const result = []

        for(let i = 0 ; i < nums.length; i++){
            count.set(nums[i], (count.get(nums[i]) || 0) + 1)
        }

        for(let i = 0; i < nums.length; i++){
            count.set(nums[i], count.get(nums[i]) - 1)
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            for(let j = i + 1; j < nums.length; j++){
                count.set(nums[j], count.get(nums[j]) - 1)
                if(j > i + 1 && nums[j] == nums[j - 1]) continue;

                const target = - (nums[i] + nums[j])
                if(count.get(target) > 0){
                    result.push([nums[i], nums[j], target])
                }
            }

            for(let j = i + 1; j < nums.length; j++){
                count.set(nums[j], count.get(nums[j]) + 1)
            }
        }

        return result;

    }
}
