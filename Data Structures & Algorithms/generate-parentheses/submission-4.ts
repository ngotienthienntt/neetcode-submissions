class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        let res = []

        function dfs(str, open, close){
            // vì valid str len = 2 *n => open và close = n / 2
            if(open == close && open == n){
                res.push(str)
                return
            }

            if(open > n || close > n){
                return
            }

            if(close < open){
                dfs(str + ")", open, close + 1)
            }

            if(open < n){
                dfs(str + "(", open + 1, close)
            }

            // làm theo logic này sẽ chỉ tạo được những chỗi đóng mở liên tiếp: ()()()
            // không tạo được những chuỗi: (()), (())()
            // if(open <= close){
            //     dfs(str + "(", open + 1, close)
            // }

            // if(close < open){
            //     dfs(str + ")", open, close + 1)
        }

        dfs("", 0, 0)

        return res
    }
}
