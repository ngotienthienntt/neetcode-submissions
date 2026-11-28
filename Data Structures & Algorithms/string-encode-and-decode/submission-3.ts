class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // question: 
    // có gồm ký tự hoa thường không?
    // chỉ chứa ký tự abc,123 hay có những ký tự đặt biệt nữa?
    // chuỗi mã hóa có quy định độ dài, ký tự gì không
    encode(strs: string[]): string {
        // Tạo ra 1 string theo format <số ký tự>-<Chuỗi gôc><số ký tự>-<chuỗi gốc>
        // số ký tự chính là số lượng ký tự của chuỗi ban đầu
        // khi muốn decode thì đọc số ký tự bằng cách đọc kến ký hiệu - , sau đó lấy số lượng ký tự 
        // tiếp theo chính là chuỗi gốc và push vào string[]

        let str = ""
        for(let i = 0; i < strs.length; i++){
            str = str + `${strs[i].length}-${strs[i]}`
        }
        console.log('str: ', str)
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let start = 0
        let numberOfStr = ""
        let output = []

        while(start < str.length){
            if(str[start] != "-"){
                // console.log("numberOfStr: ", numberOfStr)

                numberOfStr = `${numberOfStr}${str[start]}`
                start++
            }else{
                let numberStr = +numberOfStr
                // console.log("numberStr: ", numberStr)
                // return []
                let startSubStr = start + 1
                let endSubStr = startSubStr + numberStr

                output.push(str.substring(startSubStr, endSubStr))
                start = endSubStr
                numberOfStr = ""
            }
        }

        return output
    }
}
