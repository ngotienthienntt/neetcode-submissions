class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sắp sếp mảng nums đã thì mới dùng 2 pointer được
        // vòng lặp đầu để lấy target
        // vòng thứ 2 dùng 2 con tở để dò ra 2 item còn lại mà item[i] + item[j] = target
        // nhưng nếu mà tìm được 2 item mà dừng ngay thì có thể bị sót những item khác có thể bằng
        // nếu tiếp tục lọc thì có thể bị trùng
        // => tiếp dục move cả 2 pointer, check trùng bằng các so sánh 2 phần tử liên tiếp

        nums = nums.sort((a, b) =>  {return a - b})
        const output = []
        console.log("nums sort: ", nums)

        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] == nums[i - 1]) continue


            let point1 = i + 1
            let point2 = nums.length - 1
            const target = -nums[i]

            while (point1 < point2){
                // console.log("i: ", i)
                // console.log("point1: ", point1)
                // console.log("point2: ", point2)
                // console.log("target: ", target)
                const sumPoints = nums[point1] + nums[point2]
                // console.log("sumPoints: ", sumPoints)


                if(
                    sumPoints < target || 
                    (point1 > i + 1 && nums[point1] == nums[point1 - 1])){
                    point1++
                    continue
                }

                if(sumPoints > target || 
                (point2 < nums.length - 1 && nums[point2] == nums[point2 + 1])){
                    point2--
                    continue
                }

                output.push([-target, nums[point1], nums[point2]])
                console.log("output: ", output)
                point1++
                point2--

            }
        }

        return output
    }

}
