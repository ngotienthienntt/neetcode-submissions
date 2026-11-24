class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        let res = []

        function checkPalindrome(str: string){
            let len = str.length
            let mid = Math.floor(len / 2)
            for(let i = 0; i <= mid; i++){
                if(str[i] != str[len - i - 1]){
                    return false
                }
            }

            return true
        }

        function dfs(currentStr: string, subStrings: string[], subStringsStart: number){
            for(let i = 1; i <= s.length - currentStr.length; i++){
                let startSubstr = subStringsStart
                let endSubstr = Math.min(startSubstr + i, s.length)
                let subStr = s.substring(startSubstr, endSubstr)

                if(!checkPalindrome(subStr)){
                    continue
                }

                if(endSubstr >= s.length){
                    res.push([...subStrings, subStr])
                    return
                }

                dfs(subStr, [...subStrings, subStr], endSubstr)
            }
        }

        dfs("", [], 0)

        return res
    }
}
