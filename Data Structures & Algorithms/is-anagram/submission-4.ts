class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        while(s.length > 0){
            if(s.length != t.length) return false

            t = t.replace(s[0], "")
            s = s.replace(s[0], "")
        }

    

        if(t == "" && s == "") return true

        return false
    }
}
