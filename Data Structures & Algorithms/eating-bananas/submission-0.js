class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        //k = s / time(1h)
        // min h = piles.length => maxSpeed = max(piles)

        //2 ý để giải quyết vấn đề
        // range of speed (k)  from 1 to max of piles
        // find in range of speeed
        // how to know speed it valid in hours?
        // time to eat all banana = sum of time to eat each pile
        // time to eat eat pile = (num of banana / speed) làm tròn lên vì kể cả tốc độ ăn hết trước 1h
        // nhưng vẫn tính tròn 1 giờ và không được nhảy qua pile khác

        const maxPile = Math.max(...piles)
        let left = 1
        let right = maxPile
        let output = right

        while(left <= right){
            const speed = Math.floor((left + right) / 2)

            let totalTime = 0
            for(let i = 0; i < piles.length; i++){
                totalTime += Math.ceil(piles[i] / speed)
            }

            if(totalTime <= h){
                output = speed
                right = speed - 1
            }else{
                left = speed + 1
            }
        }

        return output
    }
}
