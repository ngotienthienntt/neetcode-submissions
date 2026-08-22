class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let objResult = {}

        for (let str of strs){
            const sortedStr = str.split('').sort().join('');

            if(!objResult[sortedStr]){
                objResult[sortedStr] = [str]
            }else{
                objResult[sortedStr].push(str)
            }
        }

        const arrResult = Object.values(objResult)

        return arrResult
    }
}
