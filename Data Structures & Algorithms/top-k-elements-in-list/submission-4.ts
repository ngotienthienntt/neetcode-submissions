class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // k > nums.length k?
        // trường hợp frequency bằng nhau thì sao?
        // 
        // c1: sort
        // c2: heap

        let mapFre = new Map()

        for(let i = 0 ; i < nums.length; i++){
            mapFre.set(nums[i],  (mapFre.get(nums[i]) || 0) + 1)
        }

        // console.log("mapFre: ", mapFre)
        let uniqueNums = []

        for(const [key, value] of mapFre){
            uniqueNums.push(key)
        }


        uniqueNums.sort((a , b) => mapFre.get(b) - mapFre.get(a))

        // console.log("nums: ", nums)

        let output= []
        for (let i = 0; i < k; i++){
            output.push(uniqueNums[i])
        }

        return output
    }
}
