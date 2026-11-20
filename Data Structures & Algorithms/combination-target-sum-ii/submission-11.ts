class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res = []

        candidates.sort((a, b) => {return a - b})


        function dfs(currentIndex: number, subset: number[], sum: number){
            if(sum == target){
                res.push([...subset])
                return
            }

            if(sum > target){
                return
            }

            if(currentIndex >= candidates.length){
                return
            }

            // if(subset.includes(candidates[currentIndex])){
            //     dfs( currentIndex + 1, [...subset, candidates[currentIndex]], sum + candidates[currentIndex])
            //     return
            // }

            dfs(currentIndex + 1, [...subset, candidates[currentIndex]], sum + candidates[currentIndex])

            while(currentIndex + 1 < candidates.length && candidates[currentIndex] === candidates[currentIndex + 1]){
                currentIndex++
            }

            dfs(currentIndex + 1, [...subset], sum)
            
        }

        dfs(0, [], 0)
        return res
    }
}
