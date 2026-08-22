class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // chữ hoa với thường cùng 1 ký tự thì có tính là lặp lại không? => chỉ chữ thường
        // dấu cách thì có được xem là 1 ký tự => có 
        // chuỗi có luôn lớn 0 hay không? =>  có thể = 0
        // có chứa ký tự đặc biệt hay không? => có

        //c1:
        // max len = 0
        // tạo 2 biến left right tương ứng với 2 mốc và interate through string
        // if s[right] not in substring(left, right) => length + 1 and compare to maxLengh
        // if s[right]  in substring(left, right) move left to postition s[right] exist in substing(left, right)

        // find in substing = O(n) => time complexity = O(n2)
        // use map instead of substring => (O(1)) => map store latest potion of item in substring

        if(s.length == 0) return 0
        if(s.length == 1) return 1
        let left = 0
        let right = 1
        let maxLen = 1
        const mapHistory = new Map()
        mapHistory.set(s[left], 0)


        while(right < s.length){
            let lastIndex = mapHistory.get(s[right])
            if(lastIndex != undefined && lastIndex >= left && lastIndex < right){
                left = lastIndex + 1
                mapHistory.set(s[right], right)
            }else{
                let currentLen = right - left + 1
                maxLen = Math.max(maxLen, currentLen)
                mapHistory.set(s[right], right)
            }

            right++
        }

        return maxLen
    }
}
