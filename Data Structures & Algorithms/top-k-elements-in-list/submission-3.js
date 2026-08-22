class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const lenNum = nums.length
        const frequentIndex = Array.from({ length: lenNum }, () => ([]));
        const map = new Map()

        for(let i = 0; i < lenNum; i++){
            const count = (map.get(nums[i]) || 0)
            if(count > 0){
                map.set(nums[i], count + 1)
            }else{
                map.set(nums[i], 1)
            }
        }

        for(const [key, value] of map){
            frequentIndex[value - 1].push(key)
        }

        const result = []
        for(let i = lenNum - 1; i >= 0; i-- ){
            if(frequentIndex[i].length > 0){
                for (const item of frequentIndex[i]){
                    result.push(item)
                    if(result.length == k)
                        return result
                }
            }
        }

        return result
    }

    //implement bucket và giải thích why it cost O(n)
    // dựa vào index tương ứng với frequent thì k cần phải sort nữa
    // nếu nhiều số trùng frequent thì sao? -> dùng mảng để lưu nhiều item
    // dùng mảng để lưu thì độ phức tạp là O(n) đúng không? => không nhưng tại sao?
    // trường hợp xấu nhất là tất cả đều có frequent = 1 thì phải duyệt qua mảng frequent đến 1
    // và đến index 1 lại phải duyệt 1 lần nữa => n + n => 2n => vẫn là n. O(n)^2 xảy ra khi n * n

    //interate through num to create index Frequent num

    // duyệt từ trên xuống để lấy k item trong Frequent num


}
