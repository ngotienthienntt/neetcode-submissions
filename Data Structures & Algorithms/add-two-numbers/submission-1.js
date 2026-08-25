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
        //c3 recursion
        // step 1: nếu l1,l2 đều null thì kiểm tra còn nhớ không thì gán cho phần tử tiếp theo và return
        // step 2: tính sum của l1.val và l2.val + nho
        // lấy phần nguyên div = sum % 10
        // lấy phần dư mod = Math.floor(sum / 10)
        // tạo node tổng gán giá trị div, nhớ = mod
        // gọi lại đệ quy với tham số (l1.next, l2.next, nho)
        let result = new ListNode(0, null)
        let nho = 0
        this.addTwoRecursion(result, l1, l2, nho)
        // console.log("result: ", result)
        return result.next

    }

    addTwoRecursion(result, l1, l2, nho){
        if(l1 == undefined && l2 == undefined){
            if(nho > 0){
                result.next = new ListNode(nho, null)
            }

            return
        }

        let sum = (l1?.val || 0) + (l2?.val ||0) + nho
        let div = sum % 10
        nho = Math.floor(sum / 10)
        result.next = new ListNode(div, null)
        result = result.next
        l1 = l1?.next
        l2 = l2?.next
        this.addTwoRecursion(result, l1, l2, nho)
    }
}
