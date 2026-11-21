class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        let res = []
        let set = new Set()
        nums.sort((a, b) => a - b)
        function dfs(index: number, subset: number[]){

        
            set.add(JSON.stringify(subset))


            if(index >= nums.length){
                return
            }


            for(let i = index; i < nums.length; i++){

                // sao không
                if(i > index && nums[i] == nums[i - 1]){
                    continue
                }
               
                dfs(i + 1, [...subset, nums[i]])
            }
        }

        dfs(0, [])
        
        return Array.from(set).map((item) =>  JSON.parse(item as string))
    }
}
