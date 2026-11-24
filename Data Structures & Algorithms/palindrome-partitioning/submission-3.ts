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

        function dfs(currentStr, subStrs, currentIndex, end){
            // console.log("currentStr: ", currentStr) // aa
            // console.log("subStrs: ", subStrs) // ['aa']
            // console.log("currentIndex: ", currentIndex) // 1
            // console.log("s: ", s)
            // console.log("/////")

            if(!checkPlindrome(currentStr)){
                return
            }

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

                     if(index >= s.length){
                        // console.log("res push: ", [...subStrs] )
                        if(checkPlindrome(sub)){
                            res.push([...subStrs, sub])
                        }
                        return
                    }
                    
                    dfs(sub, [...subStrs, sub], currentIndex + i, index)
                    
                // }
            }
        }

        dfs("", [], 0, 0)

        return res
    }

    
}
