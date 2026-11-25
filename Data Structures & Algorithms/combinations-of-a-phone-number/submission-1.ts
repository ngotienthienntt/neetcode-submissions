class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {

        if(digits.length <= 0) return []

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

        let output = [""]

        for(let i = 0; i < digits.length; i++){
            let mapDigitArr = map[digits[i]]
            let tempOutput = []

            for(let j = 0; j < mapDigitArr.length; j++){
                for(let k = 0; k < output.length; k++){
                    tempOutput.push(`${output[k]}${mapDigitArr[j]}`)
                }
            }
            output = [...tempOutput]
        }
        
        return output

    }
}
