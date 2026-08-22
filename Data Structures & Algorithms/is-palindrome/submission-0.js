class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        s = s.toLowerCase();
        s = s.replaceAll(" ", "")

        let start = 0;
        let end = s.length - 1;
        while(end > start){
            if(!(/^[a-z0-9]+$/i.test(s[start]))){
                start++
                continue;
            }

            if(!(/^[a-z0-9]+$/i.test(s[end]))){
                end--
                continue;
            }

            if(s[start] != s[end]) return false
            end--
            start++
        }

        return true;
    }
}
