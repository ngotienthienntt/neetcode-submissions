class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        let output = ["()"]
        

        for(let i = 2; i <= n; i++){
            let temp = []
            for(let j = 0; j < output.length; j++){
                let arrStr = this.generateNewParenthesis(output[j])
                temp.push(...arrStr)
            }
            output = temp
        }

        let newSet = new Set(output)

        return Array.from(newSet).map((item) => item)
    }

    generateNewParenthesis(str: string){
        let arrStr = ['()' + str]

        for(let i = 0; i < str.length; i++){
            if(str[i] == '('){
                let newStr = str.substring(0, i + 1) + '()' + str.substring(i + 1, str.length)
                arrStr.push(newStr)
            }
        }

        return arrStr
    }
}
