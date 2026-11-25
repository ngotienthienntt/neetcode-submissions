class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    // đệ quy hoàn toàn k dùng for
    // tại mỗi vị trí tạo ra substring kiểm tra xem có phải là palidome k
    // => nêu phải thì lưu chuỗi vào và kiểm tra chuỗi tiếp theo
    // => nêu k phải thì tăng độ dài của chuỗi hiện tại

    // dừng lại khi vị trí bắt đầu hoặc kết thúc substring vượt quá s.length
    partition(s: string): string[][] {
        let res = []
        let path = []

        function checkPalindrome(str: string){
            let len = str.length
            if(len <= 0) return false
            let mid = Math.floor(len / 2)
            for(let i = 0; i <= mid; i++){
                if(str[i] != str[len - i - 1]){
                    return false
                }
            }

            return true
        }

        function dfs(start, end){
            if(end >= s.length){

                if(start == end)
                    res.push([...path])

                return
            }

            let sub = s.substring(start, end + 1)
            // console.log("sub: ", sub)
            // console.log("path: ", path)
            // console.log("/////: ")


            if(checkPalindrome(sub)){
                path.push(sub)
                dfs(end + 1, end + 1)
                path.pop()
            }

            dfs(start, end + 1)
        }

        dfs(0, 0)

        return res
    }
}
