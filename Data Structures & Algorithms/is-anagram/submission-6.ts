class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let mapArr = new Array(26).fill(0)

        if(s.length != t.length) return false

        for(let i = 0; i < s.length; i++){
            mapArr[s[i].charCodeAt(0) - 97] = mapArr[s[i].charCodeAt(0) - 97] + 1
            mapArr[t[i].charCodeAt(0) - 97] = mapArr[t[i].charCodeAt(0) - 97] - 1
        }

        console.log("ma arr: ", mapArr)

        return !mapArr.some(item => item != 0)


    }
}
