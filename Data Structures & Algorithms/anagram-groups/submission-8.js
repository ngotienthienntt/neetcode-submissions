class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapObj= {}

        for(let str of strs){
            const hashStr = new Array(26).fill(0)

            for(let c of str){
                const codeC = c.charCodeAt(0)
                const codea = 'a'.charCodeAt(0)
                const indexCInHash = codeC - codea
                hashStr[indexCInHash] += 1
            }

            const sortedStr = hashStr.join(',')

            if(!mapObj[sortedStr]){
                mapObj[sortedStr] = [str]
            }else{
                mapObj[sortedStr].push(str)
            }
        }

        return Object.values(mapObj)
    }
}
