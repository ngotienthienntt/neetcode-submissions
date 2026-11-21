class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
         let result = [[]]

         while(true){
            let temp = []
            for(let i = 0; i < result.length; i++){
                for(let j = 0; j < nums.length; j++){
                    if(!result[i].some((item) => {return item == nums[j]})){
                        temp.push([...result[i], nums[j]])
                    }
                }
            }

            result = temp

            if(result[0].length == nums.length){
                break;
            }
         }

         return result
    }
}
