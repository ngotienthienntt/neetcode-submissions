class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        let res = []

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
        
        function dfs(currentDigitIndex: number, path: string[] ){

            if(currentDigitIndex >= digits.length){
                res = path
                return
            }

            let currentDigit = digits[currentDigitIndex]
            let mapArr = map[currentDigit]
            let newPath = []

            if(path.length == 0){
                newPath = mapArr
            }else{
                for(let i = 0; i < mapArr.length; i++){
                    for(let j = 0; j < path.length; j++){
                        newPath.push(`${path[j]}${mapArr[i]}`)
                    }
                }
            }

            dfs(currentDigitIndex + 1, newPath)

        }

        dfs(0, [])

        return res
    }
}
