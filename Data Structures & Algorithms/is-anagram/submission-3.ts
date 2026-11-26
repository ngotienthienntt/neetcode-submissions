class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false
        let newS = s.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join()
        let newT = t.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join()

        for(let i = 0; i < newS.length; i++){
            if(newS[i] != newT[i]) return false
        }

        return true
    }
}
