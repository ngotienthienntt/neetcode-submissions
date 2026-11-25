class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        let res = []

        if(digits.length <= 0) return res

        let map = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z']
        }

        function dfs(i, curStr) {
            if(i == digits.length){
                res.push(curStr)
                return
            }

            let mapArr = map[digits[i]] //3 => d e f

            for(let j = 0; j < mapArr.length; j++){// d
                // console.log("i = ", i)
                // console.log("curStr: ", curStr)
                // console.log("${curStr}${mapArr[i]}", `${curStr}${mapArr[j]}`)
                dfs(i + 1, `${curStr}${mapArr[j]}`)
            }
        }
        
        dfs(0, "")

        return res
    }
}
