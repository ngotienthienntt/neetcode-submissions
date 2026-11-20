class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        let res = []
        candidates.sort((a, b) => { return a - b})
        console.log("candidate: ", candidates)

        function dfs(index: number, subsets: number[], sum: number ){

            if(sum === target){
                res.push([...subsets])
                return
            }

            if(index >= candidates.length || sum > target){
                return
            }

           

            for(let i = index; i < candidates.length; i++){
                if(i > index && candidates[i] == candidates[i - 1]){
                    continue
                }

                // if( sum + candidates[i] > target){
                //     return
                // }

                dfs(i + 1, [...subsets, candidates[i]], sum + candidates[i])
            }
        }

        dfs(0, [], 0)

        return res
    }
}
