class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length == 0) return true
        const mapParrenthese = {
            ')': '(',
            '}': '{',
            ']' : '[' 
        }

        const stack = [s[0]]
        for(let i = 1; i < s.length; i++){
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
