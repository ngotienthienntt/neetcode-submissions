class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {

        // Cách giải sẽ là kết hơp substring hiện tại với tất các các substring có thể tạo được từ chuỗi còn lại (độ dài từ 1, đến len - substring hiện tại)

        let res = []

        function checkPlindrome(str: string){
            let len = str.length
            let mid = Math.ceil(len / 2)
            for(let i = 0; i < mid; i++){
                if(str[i] != str[len - i - 1]){
                    return false
                }
            }

            return true
        }

        function dfs(currentStr, subStrs, currentIndex){
            // console.log("currentStr: ", currentStr) // biết được chuỗi hiện tại dài tới đâu để tính độ dài cho các chuỗi còn lại
            // console.log("subStrs: ", subStrs) // ['aa'] // danh sách substring hợp lệ
            // console.log("currentIndex: ", currentIndex) // vị trí bắt đầu của các chuỗi còn lại
            // console.log("s: ", s)
            // console.log("/////")

            // if(!checkPlindrome(currentStr)){
            //     return
            // }

            // if(end >= s.length){
            //     console.log("res push: ", [...subStrs] )
            //     res.push([...subStrs])
            //     return
            // }

            for(let i = 1; i <= s.length - currentStr.length; i++ ){
                // console.log('i = ', i) // i =2
                // for(let j = currentIndex + 1; j < s.length; j = j + i){ s.length = 3
                    let index = Math.min(currentIndex + i, s.length) //2
                    let sub = s.substring(currentIndex, index)//0,2 => sub aa

                    if(!checkPlindrome(sub)){
                        continue;
                    }

                    if(index >= s.length){
                        // console.log("res push: ", [...subStrs] )
                        
                        res.push([...subStrs, sub])
                        
                        return
                    }
                    
                    // Nếu dùng currentindex + 1 là sai vì nếu sub lấy từ vị trí currrent + i
                    // nhưng lại truyền vị trí tiếp theo là current + 1 sẽ vị lấy sai vị trí bắt đầu của chuỗi mới
                    dfs(sub, [...subStrs, sub], currentIndex + i)
                    
                // }
            }
        }

        dfs("", [], 0)

        return res
    }

    
}
