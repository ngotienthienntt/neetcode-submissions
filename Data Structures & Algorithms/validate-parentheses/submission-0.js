class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const mapParrenthese = {
            ')': '(',
            '}': '{',
            ']' : '[' 
        }

        const stack = []

        for(let i = 0; i < s.length; i++){
            if(stack.length == 0){
                stack.push(s[i])
                continue;
            }
            let lastItemStack = stack[stack.length - 1] || ''
            if(mapParrenthese[s[i]] == lastItemStack){
                stack.pop(s[i])
            }else{
                stack.push(s[i])
            }
        }

        return stack.length == 0
    }
}
