class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //C1: tính product of all elements O(n), iterate and divide for each element O(n)
        //=> O(n) nhưng mà dùng division
        //C2: Iterate each element, with each element iterate other element to calculate produc
        //=> O(n mũ 2)

        //C3 O(n) without division 


        //Giải pháp ok là tính tích của trước(prefix[i]) và sau(suff[i]) của element i
        // với mỗi i thì prefix[i] * suff[i] là ra
        // chia nhỏ ra 2 phần riêng biệt hay quá

        // Tại sao nãy giờ nghĩ k ra?
        // Sai 1
        // tư duy dùng hash map lưu lại key rồi duyệt đên i nào thì sẽ nhân cho những key còn lại k trùng với i
        // => vẫn là O(n mũ 2)

        // Sai 2
        // Dùng cache lại nhưng gì đã tính toán, mỗi element thì lại có những chỉ số khác nhau 
        // cần phải tính, sinh ra rất nhiều tổ hợp cần phải lưu mà vẫn phải duyệt qua
        // => Vẫn là O(n mũ 2)

        // => Cuôi cùng bài này cấn áp dụng chia để trị nhưng mà chỉ cần 2 phần riêng biệt
        // chứ không cần chia nhỏ ra từng cặp rồi cache

        let lenNum = nums.length
        const prefix = Array(lenNum).fill(1)
        const suff = Array(lenNum).fill(1)
        const result = Array(lenNum).fill(1)

        for (let i = 1 ; i < nums.length; i++){
            prefix[i] = prefix[i - 1] * nums[i -1]
        }


        for (let i = nums.length - 2; i >= 0; i--){
            suff[i] = suff[i + 1] * nums[i + 1]
        }

        for (let i = 0 ; i < nums.length; i++){
            result[i] = prefix[i] * suff[i]
        }

        return result

    }
}
