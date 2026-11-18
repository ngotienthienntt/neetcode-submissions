class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        // Dùng công thức: minumTime = Max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount)
        // minimumTime alway >= task.length(trường hợp không cần idle để cooldown) có thêm idle thì sẽ lớn hơn
        // VD: [A, A, A, B, B, B] n = 2

        // Để tối ưu Time thì ta sẽ luôn ưu tiên chọn task có lần xuất hiện nhiều nhất để săp xếp
        // vì không thể sắp 2 task giống nhau cạnh nhau nên giữa chúng sẽ có khoảng cách
        // số khoảng cách sẽ là: maxFreq - 1
        // maxFreq = 3 => khoảng cách = 3 -1 = 2
        // A _ _ A _ _ A
        
        // Độ dài khoảng cách là: (n + 1) // n khoảng cách bắt buộc giữa 2 task và +1 chính là task đang thực hiện ở khoảng cách này
        // độ dài khoảng cahcs (A _ _) = 2 + 1 = 3

        // + maxCount: Chính là những phần tử ở cuối cùng
        // A B _ A B _ A B (maxCount chính là những phần tử ở cuối cùng là AB = 2 chính là số lượng task xuất hiện nhiều nhât)
        // (maxFreq - 1) * (n + 1) + maxCoun = 2 * 3 + 2 = 8

        // VD thêm các task đơn lẻ ở sau: VD: [A, A, A, B, B, B, C, D, E] n = 2
        // (maxFreq - 1) * (n + 1) + maxCoun = 2 * 3 + 2 = 8
        // A B C A B D A B E
        // tasks.length = 9 =>
        // vì sao so sánh với task.length
        // ta xet 2 trường hợp formula > task.length => cần thêm khoảng nghỉ để thực hiện các task
        // trường hợp tối ưu nhất là = task.length không phần có khoảng nghỉ do vậy không thể nào
        // thời gian hoàn thành nhỏ hơn task.length được. công thức tính nhỏ hơn là vì công thức chưa cộng các task còn sót lại sau khi đã tận dụng được hết các khoảng hở

        let arr = this.buildFrequentTaskArray(tasks)
        arr.sort((a, b) => {return b - a})
        let maxFreq = arr[0]
        console.log("arr: ", arr)
        let maxCount = 1
        for(let i = 1; i < arr.length; i++){
            if(arr[i] == maxFreq) maxCount++
        }

        return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount)
    }

    buildFrequentTaskArray(tasks: string[]){
        let objFre = {}
        for(let i = 0; i < tasks.length; i++){
            if(objFre[tasks[i]]){
                objFre[tasks[i]] = objFre[tasks[i]] + 1
            }else{
                objFre[tasks[i]] = 1
            }
        }

        let arr = Object.entries(objFre).map(([key, value]) => {
            return value as number
        })

        return arr
    }
}
