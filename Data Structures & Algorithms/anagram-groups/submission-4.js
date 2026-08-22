class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const objectTemp = {

        }

        for(let str of strs){
            const sortedStr = str.split('').sort().join('');
            
            if(objectTemp[sortedStr]){
                objectTemp[sortedStr].push(str)
            }else{
                objectTemp[sortedStr] = [str]
            }
        }

        return Object.values(objectTemp)
    }
}
