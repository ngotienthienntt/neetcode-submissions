class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // c1; hash
        // c2: sort
        // c3: replace
        if(s.length != t.length) return false
        let map = new Map()

        for(let i = 0; i < s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1)
        }

        for(let j = 0; j < t.length; j++){
            if(!map.get(t[j]) || map.get(t[j]) <= 0) return false
            map.set(t[j], map.get(t[j]) - 1)
        }

        for(let [key, value] of map){
            if(value > 0) return false
        }

        return true

    }
}
