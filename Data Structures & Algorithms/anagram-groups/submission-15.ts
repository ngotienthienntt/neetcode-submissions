class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let mapGroup = new Map()
        let output = []

        for(let i = 0; i < strs.length; i++){
            let arrKey = new Array(26).fill(0)

            for(const c of strs[i]){
                arrKey[c.charCodeAt(0) - 97]++
            }

            let key = arrKey.join(",")
            // console.log("Key: ", key)
            let groupId = mapGroup.get(key)

            if(groupId != undefined){
                output[groupId].push(strs[i])
            }else{
                output.push([strs[i]])
                mapGroup.set(key, output.length - 1)
            }
        }

        return output
    }
}
