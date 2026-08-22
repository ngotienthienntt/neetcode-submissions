class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // brut force
        const result = []

        for(let i = 0 ; i < strs.length; i++){
            result.push([strs[i]])
            for(let j = i + 1; j < strs.length; j++){
                if(this.isAnagram(strs[i], strs[j])){
                    result[result.length - 1].push(strs[j])
                    strs.splice(j, 1)
                    j--
                }
            }
        }

        return result
    }

    isAnagram(str1, str2){
        if(str1.length != str2.length) return false
        let map = {}

        for(let i = 0; i < str1.length; i++){
            if(map[str1[i]]){
                map[str1[i]] = map[str1[i]] + 1
            }else{
                map[str1[i]] = 1
            }
        }

        for(let i = 0; i < str2.length; i++){
            if(!map[str2[i]]) return false
            map[str2[i]] = map[str2[i]] - 1
        }

        return true
    }
}
