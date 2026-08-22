class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1
        let output = 0; 

        while (l < r){
            const area = Math.min(heights[l], heights[r]) * (r - l)
            output = Math.max(output, area)

            if(heights[l] <= heights[r]){
                l++
            }else{
                r--
            }
        }

        return output
    }
}
