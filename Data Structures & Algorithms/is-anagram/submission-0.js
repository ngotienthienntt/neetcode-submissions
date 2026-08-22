class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        for(let i = 0; i < s.length; i++){
            if(!t.includes(s[i]))
                return false

            t = t.replace(s[i], '')
        }

        return t.length === 0
    }
}
