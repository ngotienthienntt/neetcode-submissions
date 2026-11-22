class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    // - Ở mỗi vị trí của string chỉ có thể chọn "(" hoặc ")"
    // => điều kiện rẽ nhánh để gọi dfs lặp lại
    // - Điều kiện dừng là khi len của chuỗi được tạo = 2n
    // và điều kiện để lấy phần tử đó là nó phải hợp lệ
    // đầy đủ đóng ngoặc và mở ngoặc
    

    generateParenthesis(n: number): string[] {
        let res = []

        function checkValid(str){
            let open = 0

            for(let i = 0; i < str.length; i++){
                open = str[i] == '(' ? open + 1: open - 1
                if(open < 0) return false
            }

            return open == 0
        }

        function dfs(str){
            if(str.length == 2 * n){
                if(checkValid(str)){
                    res.push(str)
                }
                return
            }
            

            dfs(str + "(")

            dfs(str + ")")
        }
        dfs("")
        console.log("res: ", res)
        return res
    }
}
