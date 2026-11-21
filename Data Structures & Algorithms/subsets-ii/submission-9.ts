class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    // khi gặp phần tử trùng thì sẽ không kết hợp nó với tất cả các phần tử ở trong r
    // result nữa mà chỉ với những phân tử được tạo ra từ phần tử trùng phía trước của nó
    // vì những phần tử trước đó đã được kết hợp với phần tử trùng rồi nếu kết hợp nữa chắc chắn sẽ tạo ra trùng
    subsetsWithDup(nums: number[]): number[][] {
        let result = [[]]
        let pre = []
        nums.sort((a, b) => { return a - b})

        for(let i = 0; i < nums.length; i++){

            if(nums[i] == nums[i - 1]){
                let temp = []
                for(let j = 0; j < pre.length; j++){
                    temp.push([...pre[j], nums[i]])
                }
                
                result.push(...temp)
                pre = temp

            }else{
                pre = []
                for(let j = 0; j < result.length; j++){
                    pre.push([...result[j], nums[i]])   
                }

                result.push(...pre)
            }

            
        }

        return result

    }
}
