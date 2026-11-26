class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let mapGroup = new Map()
        let output = []

        for(let i = 0;i < strs.length; i++){
            let sortedStr = strs[i].split("").sort().join()
            let groupId = mapGroup.get(sortedStr)

            if(groupId != undefined){
                output[groupId].push(strs[i])
            }else{
                output.push([strs[i]])
                mapGroup.set(sortedStr, output.length - 1)
            }
        }

        return output
    }
}
