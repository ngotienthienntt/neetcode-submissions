class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        const frequency = {}

        for(let i = 0; i < s.length; i++){
            frequency[s[i]] = (frequency[s[i]] || 0) + 1
        }

        for(let i = 0; i < t.length; i++){
            if(!frequency[t[i]]) 
                return false

            frequency[t[i]] = frequency[t[i]] - 1;
        }

        return true

    }
}
