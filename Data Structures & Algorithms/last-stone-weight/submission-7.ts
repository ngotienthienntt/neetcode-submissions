class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    //binary search
     lastStoneWeight(stones: number[]): number {
        stones.sort((a, b) => { return a - b})
    
        while(stones.length > 1){
            let x = stones.pop();
            let y = stones.pop();
            
            if(x - y == 0) continue

            let diff = y - x
            if(x - y > 0){
                diff = x - y
            }

            for(let i = 0; i < stones.length; i++){
                if(diff <= stones[i]){
                    let temp = stones[i]
                    stones[i] = diff
                    diff = temp
                }
            }
            stones.push(diff)
        }

        return stones.length > 0 ? stones[0]:  0
    }
}
