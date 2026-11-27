class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // bucket sort
    // O(n)
    topKFrequent(nums: number[], k: number): number[] {
        let freNums = Array.from({ length: nums.length + 1 }, () => []);

        // console.log("freNums: ", freNums)
        let mapFre = new Map()

        for(let i = 0; i < nums.length; i++){
            mapFre.set(nums[i], (mapFre.get(nums[i]) || 0) + 1)
        }

        // console.log("chekc")


        for(const [key, value] of mapFre){
            // console.log("value: ", value)
            freNums[value].push(key)
        }

        // console.log("chekc")

        let output = []
        for(let i = freNums.length - 1; i >= 0; i--){
            for(let j = 0; j < freNums[i].length; j++){
                if(output.length >= k) return output

                output.push(freNums[i][j])
            }
        }

        return output
        
    }
}
