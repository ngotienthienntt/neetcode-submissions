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

            console.log("index; ", index)
            console.log("subset: ", subset)
            console.log("/////")

            set.add(JSON.stringify(subset))


            if(index >= nums.length){
                return
            }


            for(let i = index; i < nums.length; i++){
                console.log("i; ", i)
                console.log("subset for: ", [...subset, nums[i]])
                console.log("/////")
                dfs(i + 1, [...subset, nums[i]])
            }
        }

        dfs(0, [])
        console.log("set: ", set)
        

        console.log()
        return Array.from(set).map((item) =>  JSON.parse(item as string))
    }
}
