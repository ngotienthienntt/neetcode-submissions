class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        // c1: Duyệt qua từng phần tử
        // mỗi phần tử lại đếm xem khi nào có phần tử lơn hơn cho đến hết mảng
        // hoặc gặp phần tử lơn hơn thì dừng lại.

        //c2: 
        // stack sẽ lưu những ngày chưa tìm được ngày nóng hơn
        // Duyệt qua từng phần tử và so sánh với phần tử cuối cùng của stack
        // xem có nóng hơn không nếu có thì phàn tử đó đã tìm được ngày nóng hơn
        // và khỏng cách chính là vị trí của 2 ngày đó trừ cho nhau
        // 

        const output = new Array(temperatures.length).fill(0)
        const stack = []

        for (let [index, value] of temperatures.entries()){
            let lastItem = stack[stack.length - 1]
            while(value > lastItem?.value ){
                output[lastItem?.index] = index - lastItem?.index
                stack.pop()
                lastItem = stack[stack.length - 1]
            }

            stack.push({value: value, index: index})
        }

        return output
    }
}
