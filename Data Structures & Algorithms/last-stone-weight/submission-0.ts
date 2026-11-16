class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
    
        while(stones.length > 1){
            let x = this.getHeaviestStones(stones)
            let y = this.getHeaviestStones(stones)
            
            if(x - y > 0){
                stones.push(x - y)
            }else{
                stones.push(y - x)
            }
        }

        return stones.length > 0 ?  stones[0]:  0
    }

    getHeaviestStones(stones: number[]): number{
        stones.sort((a, b) => {return a - b})
        return stones.pop()
    }
}
