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

            // cách này bị sai vì check trùng ở candidates chứ không phải ở subset vì subset có thể trùng miễn là nó ở vị trí khác
            // if(subset.includes(candidates[currentIndex])){
            //     dfs( currentIndex + 1, [...subset, candidates[currentIndex]], sum + candidates[currentIndex])
            //     return
            // }

            // dfs(currentIndex + 1, [...subset], sum)
            // dfs(currentIndex + 1, [...subset, candidates[currentIndex]], sum + candidates[currentIndex])

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
