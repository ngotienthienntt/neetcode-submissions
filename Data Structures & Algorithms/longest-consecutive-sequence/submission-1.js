class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //C1
        // duyệt qua từng phần tử
        // mỗi phần tử duyệt từ nó đến hết để tìm phần tử lớn hơn +1 
        // nếu lớn hơn +1 thì thêm vào chuỗi và +lên 1 nữa
        // => được chuỗi consecutive và so sánh với chuỗi lớn nhất
        // lưu lại chuỗi lớn nhật rồi tiếp tục vòng lặp
        // => O(n2)

        //C2
        //sort array
        // duyệt qua tất cả nếu các nhau 1 thì +1 rồi so với maxlen
        // nếu k thì reset len consecutive về 0
        // => O(nlogn)

        //C3 Hash set
        // lưu các phần tử của array vào set
        //duyệt qua từng phần tử num
        // check xem trong hash set có num - 1 k
        // nếu k có thì nó là điểm bắt đầu. bắt đàu + len lên và tìm xem trong hash set có k
        // nếu có tiêp tục công k thì dừng lại và so sánh với max
        // tim được max thì return
        // tại sao vòng lặp trong vòng lặp lại k phải O(n2)
        // chỉ những phần tử bắt đầu mới được chạy lặp, nếu đã được chạy lặp rồi thì những
        // phần tử k phải điểm bắt đầu sẽ k được duyệt qua
        
        const setNums = new Set(nums)
        let maxLength = 0;

        for(let i = 0; i < nums.length; i++){
            let item = nums[i]

            if(!setNums.has(item - 1)){
                let lenSequence = 1
                while(setNums.has(item + 1)){
                    lenSequence++
                    item++
                }

                if(lenSequence > maxLength){
                    maxLength = lenSequence
                }
            }
        }

        
        return maxLength

    }
}
