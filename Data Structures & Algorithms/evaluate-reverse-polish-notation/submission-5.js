class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let finalResult = 0;
        let stack = []
        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] == '+'){
                const num1 = Number(stack.pop())
                const num2 = Number(stack.pop())
                const result = num1 + num2
                stack.push(result)
            }else if(tokens[i] == '-'){
                const num1 = Number(stack.pop())
                const num2 = Number(stack.pop())
                const result =  num2 - num1
                stack.push(result)
            } else if(tokens[i] == '*'){
                const num1 = Number(stack.pop())
                const num2 = Number(stack.pop())
                const result = num1 * num2
                stack.push(result)
            } else if(tokens[i] == '/'){
                const num1 = Number(stack.pop())
                const num2 = Number(stack.pop())
                const result = Math.trunc(num2 / num1)
                stack.push(result)
            }else{
                stack.push(tokens[i])
            }
        }

        return stack.pop()
    }
}
