class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        //c4: Ý tưởng ban đầu: duyệt qua từng phần tử và update số thứ tự trong chuỗi cho
        // nó khi nó xuất hiện đồng thời update cho current - 1 và current + 1
        // map(current) = map(curent -1) + 1
        // map(current + 1) = map(current) + 1
        // Trường hợp current + 1 xuất hiện trước current thì sao
        // exam: 5, 4 , 3, 2
        // 5 được update đầu tiên, 4 update cho 5, nhưng 3 chỉ update cho 4
        //=> 5 bị thiếu rồi
        //=> phải chạy hết và update đến cùng cho left(current - 1) và right(current + 1)
        // vậy thì O (n mất rồi)
        // giờ làm sao?
        // => vẫn dùng công thức len = left + current + right
        // nhưng k update cho từng item của left hoặc right nữa
        // mà chỉ cần update cho item start và end của left hoặc right thôi
        // => map(current) = left + right + 1 (len)
        // Làm sao tìm được index của left và right từ vị trí current để update
        // vì current - 1 và current + 1 là phần tử cuối và đầu của 2 chuỗi riêng
        // nên sẽ lưu len của chuỗi
        // => ta dùng công thức start = current - map(curent -1),
        // end = current + (current + 1)
        // vì chuỗi sẽ được build từ chuỗi 1 phần tử, 2 phần tử, 3 phần tử ...
        // nên khi chuỗi 1, 2 đúng thì các cuối nhiều len hơn cũng sẽ đúng vì start và end đã được update đúng

        const map = new Map()
        let maxLength = 0

        for(let i = 0; i < nums.length; i++){
            if(!map.get(nums[i])){
                let len = (map.get(nums[i] - 1) || 0) + (map.get(nums[i] + 1)|| 0) + 1
                map.set(nums[i], len)
                let start = nums[i] - (map.get(nums[i] - 1) || 0)
                let end = nums[i] + (map.get(nums[i] + 1) || 0)
                map.set(start, len)
                map.set(end, len)

                if(len > maxLength) maxLength = len
            }
        }

        return maxLength;
    }
}
