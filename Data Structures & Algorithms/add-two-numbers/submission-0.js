/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // chiều dài của link list có luôn bằng nhau hay không?
        // giá trị của các số trong 1 node luông 0 < val <= 9
        // val có thể là số âm không?
        // có trường hợp 1 trong hai là list rỗng hay không?

        //C1: duyệt qua 2 link list convert về là số rồi cộng lại rồi gán lại vào linklist
        //C2: duyệt qua cộng từng node như công thức cộng số bình thường
        //C3: giống cách 2 nhưng dùng đệ quy


        //C2:
        // step 1: iterate through 2 lists until both lists are null
        // add 2 items in list1 and list2 together to get result and nhớ 1 nếu dư như phép + 2 số
        // nếu 1 trong 2 null thì giá trị bị null sẽ thay thế = 0 để tiếp tục cộng cho hết
        // trả về kết quả

        let nho = 0
        let result = new ListNode(0, null)
        let head = result

        while(l1 != undefined || l2 != undefined){
            let sum = (l1?.val || 0) + (l2?.val || 0) + nho
            // console.log("l1: ", l1?.val)
            // console.log("l2: ", l2?.val)
            // console.log("sum: ", sum)
            let div = sum % 10
            nho = Math.floor(sum / 10)
            let newNode = new ListNode(div, null)
            result.next = newNode
            result = result.next
            l1 = l1?.next
            l2 = l2?.next
        }

        // console.log("result: ", head)

        if(nho > 0){
            const newNode = new ListNode(nho, null)
            result.next = newNode
        }


        return head.next
    }
}
