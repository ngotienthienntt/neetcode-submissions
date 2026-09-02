class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // 2 pointer
        // Tại sao duplicate lại tạo ra circle
        // vì có nhiều điểm cùng trỏ về 1 gốc
        // trược hợp gốc đó đã được duyệt lần một rồi sau đó chạy tiếp và được duyệt về lại lần 2
        // thì chắc chắn sẽ quay lại chỗ lần một đã đi qua và đi lại con đường này => tạo ra circle

        // vd: 1, 2, 3, 1
        //     0, 1, 2, 3
        // num[0] => 1=> nums[1] => 2 => nums[2] => 3 => nums[3] => 1 => nums[1] = 2 (circle)
        //
        let slow = 0
        let fast = 0

        while(true){
            slow = nums[slow]
            fast = nums[nums[fast]]
            if(slow == fast && nums[slow] == nums[fast]){
                break;
            }

            
        }

        console.log("finish 1: slow", slow)
        console.log("finish 1: fast", fast)


        let slow2 = 0

        while(true){
            if(slow == slow2 && nums[slow] == nums[slow2]){
                break;
            }
            slow = nums[slow]
            slow2 = nums[slow2]
        }

        return slow2

        
    }
     
} 
