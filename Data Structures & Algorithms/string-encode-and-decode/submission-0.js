class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (let str of strs){
            const lenStr = str.length || 0
            result += `-${lenStr}-${str}`
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let start = 0;
        let end = 0;
        let numStr = ''
        let result = []

        while(i < str.length){
            if(str[i] == '-' && numStr == ''){
                i++
                continue;
            }

            if(str[i] == '-' && numStr != ''){
                let lenItem = +numStr
                let item = str.slice(i + 1, i + lenItem + 1)
                result.push(item)
                numStr = ''
                i = i + lenItem + 1
                continue;
            }

            numStr = numStr + str[i]
            i++
        }

        return result
    }
}
