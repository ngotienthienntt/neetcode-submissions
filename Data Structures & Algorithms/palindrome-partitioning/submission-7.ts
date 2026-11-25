class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    // Time complexity: O(n * 2^n)
    // n là để check chuỗi valid
    // 2^n là vì mỗi vị trí sẽ có 2 lựa chọn chia hoặc không chia vì vậy tổng cách có thể chia là 2 ^ n -1 là chính xác nhất vì n ký tự thì sẽ có n - 1 vị trí có thể chia  
    partition(s: string): string[][] {
        let res = []
        let dp = Array.from({ length: s.length  }, () => Array(s.length).fill(null));

        // console.log("init dp: ", dp)

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

                let existDp = dp[startSubstr][endSubstr]
                if(!existDp){
                    let tempStr = s.substring(startSubstr, endSubstr)
                    dp[startSubstr][endSubstr] = {
                        str: tempStr,
                        isValid: checkPalindrome(tempStr)
                    }

                    existDp = dp[startSubstr][endSubstr]
                    // console.log("start: ", startSubstr)
                    // console.log("end: ", endSubstr)

                    // console.log("dp: ", dp)
                }

                let subStr =  existDp.str 

                if(!existDp.isValid) continue

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
