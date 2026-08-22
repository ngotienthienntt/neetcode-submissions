class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //c4: slide window + find max frequent of character
        // valid substring = length of window - maxF <= k
        // b1: duyệt qua từng phần tử bằng left and right
        // b2: tính frequent cho từng s[right] và upate max frequentcy
        // b3: check nếu công thức valid sub string > k, 
        // update lại frequent của s[l] đăng nằm trong window cho tới khi
        // công thức valid substring valid trở lại
        // sau đó mới tăng l lên
        // b4: so sánh len của window và maxlen cần tìm và update maxLen cần tìm nếu maxLen < len

        let output = 1
        let count = new Map()
        let maxF = 1
        let l = 0

        for(let r = 0; r < s.length; r++){
            count.set(s[r], (count.get(s[r]) || 0) + 1)
            maxF = Math.max(maxF, count.get(s[r]))

            while(r - l + 1 - maxF > k){
                count.set(s[l], count.get(s[l]) - 1)
                l++
            }
            output = Math.max(output, r - l + 1)
        }

        return output

    }
}
