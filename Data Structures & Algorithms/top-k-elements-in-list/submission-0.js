class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //c1
        //loop through nums and count
        //sort item depend on count
        //return top k largest count
        //complex:nlog(n)
        const frequent = new Map();

        for(let i = 0; i < nums.length; i++){
            const existItem = frequent.get(nums[i])
            if(existItem != null){
                frequent.set(nums[i], existItem + 1)
            }else {
                frequent.set(nums[i], 1)
            }
        }

        let arrayFrequent = Array.from(frequent.keys())
        arrayFrequent = arrayFrequent.sort((a, b) => {
            return frequent.get(b) - frequent.get(a)
        })

        return arrayFrequent.slice(0, k)

        //c2
        // optimize don't need sort by frequent array
    }
}
