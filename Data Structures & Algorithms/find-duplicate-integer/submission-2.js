class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // in put nums from 1 - n, there is 1 repreated interger,
        // output value of repeated interger

        // c1: use hashtable to store can check repeat
        // time complexity: O(n)
        // space complexity: O(n)

        // c2: sort array và duyệt qua xem phần tử sau có = phần tử trước + 1 hay không?
        // 

        //c3: brute force lặp qua 2 vòng lặp để tìm số trùng của từng số

        // c?: require
        // time:
        // space O(1)

        // c4: vì các giá trị chỉ nằm trong 1-n vì vậy ta tận dụng giá trị 1-n
        // là index luôn và update giá trị của phần tử thuộc index is negative
        // lần sau nếu gặp lại trước khi đổi giá trị về âm thì ta check xem giá trị index có âm không
        // nếu âm thì chính là giá trị bị lặp lại

        for(let i = 0; i < nums.length; i++){
            let value = Math.abs(nums[i]) - 1

            if(nums[value] < 0) return Math.sqrt(nums[i] * nums[i])

            nums[value] = -1 * nums[value]

            // console.log("nums: ", nums)
        }

        return nums[0]
    }
}
