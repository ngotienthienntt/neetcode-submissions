class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //c2: sliding window with key distinct character 
        //Duyệt qua từng character và check valid character dựa vào 1 window của character chứ k theo từng substring
        //

        let charSet = new Set(s)
        let output = 1

        for(let c of charSet){
            let l = 0
            let countC = 0

            for(let r = 0; r < s.length; r++){
                if(s[r] == c){
                    countC++
                }else{
                    while(r - l + 1 - countC > k) // chuỗi bị invalid thì phải co left lại cho đến khi hợp lệ
                    {
                        if(s[l] == c) countC-- // co lại thì phải đếm lại countC nếu phần bị loại bỏ là c
                        l++
                    }
                }

                output = Math.max(output, r - l + 1)

            }
        }

        return output
    }
}
