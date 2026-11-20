class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        let res = []
        let count = new Map()
        let arrFre = []

        for(let i = 0; i < candidates.length; i++){
            if(count.get(candidates[i])){
                count.set(candidates[i], count.get(candidates[i]) + 1)
            }else{
                count.set(candidates[i], 1)
                arrFre.push(candidates[i])
            }
        }


        console.log("count: ", count)
        function dfs(currentIndex: number, subsets: number[], sum: number){
            if(sum == target){

                res.push([...subsets])
                return
            }

            if(sum > target || currentIndex > arrFre.length){
                return
            }

            if(count.get(arrFre[currentIndex]) > 0){
                // console.log("currentIndex: ", currentIndex)
                // console.log("count 2: ", count)
                // console.log("subsets: ", subsets)
                // console.log("////")
                count.set(arrFre[currentIndex], count.get(arrFre[currentIndex]) - 1)

                // currentIndex không có cộng lên bởi vì phần tử hiện tại vẫn chưa dùng hết
                dfs(currentIndex, [...subsets, arrFre[currentIndex]], sum + arrFre[currentIndex])
                count.set(arrFre[currentIndex], count.get(arrFre[currentIndex]) + 1)
            }
            
            dfs(currentIndex + 1, [...subsets], sum)

        }
        
        dfs(0, [], 0)

        return res
    }
}
