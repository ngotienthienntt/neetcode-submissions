class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // permutation là hoán vị. có nghĩa là số lượng ký tự, số lần xuất hiện là giống nhau chỉ đảo vị trí
        // s1 các ký tự có lặp lại không?
        // s2 luôn luôn lớn hơn s1 đúng không?
        // ksy tự hoa thường
        // nếu có chưa dấu cách thì sao?
        // có chứa ký tự đặc biệt gì không

        //c1: brute force
        //b1: duyệt qua từng phần tử s2 nếu phần tử có trong s1 thì đi vào bước check permutation nếu không thì tiếp tục đi tiếp
        //b2: check permuation bằng cách tìm những phần tử tiếp theo nằm trong s1 nếu toàn bộ nẳm tỏng s1 là permutation(dùng map s1 và lenth s1 để check chuỗi đó có phải là permuation hay không)
        // nếu có thì return true
        // b3: nếu chạy qua tất cả k có kết quả thì return false

        //c2: sliding window
        //b1: duyệt qua s2 với 2 con trỏ left và right,
        // nếu right hợp lệ tiếp tục right++ cho đến khi tất cả left .. right đều nằm trong s1, nếu k hợp lệ left = right + 1, qua chuỗi khác
        // làm sao check s[right] hợp lệ và khi nào là permutation
        // dùng map để check right hợp lệ
        // permuation nếu toàn bộ left right nằm tỏng map và left, right = length s[1]


        let map = new Map()

        for(let i = 0; i < s1.length; i++){
            map.set(s1[i], (map.get(s1[i]) || 0) + 1)
        }

        let l = 0;
        let tempMap = new Map(map)

        for(let r = 0; r < s2.length; r++){
            let checkExist = tempMap.get(s2[r]) || 0
            if(checkExist > 0){
                checkExist = checkExist - 1
                tempMap.set(s2[r], checkExist)
                console.log("tempMap: ", tempMap)
                if(r - l + 1 == s1.length) return true
            }else{
                let checkDuplicate = map.get(s2[r]) != undefined
                if(checkDuplicate){
                    while(s2[l] != s2[r]){
                        tempMap.set(s2[l], tempMap.get(s2[l]) + 1)
                        l++
                    }
                    l++
                }else{
                    tempMap = new Map(map)
                    l = r + 1
                }

                
            }
        }

        return false
    }
}
