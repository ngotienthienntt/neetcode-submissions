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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //c3: Tính vị trí của node dự vào length mà k cần tới array nữa

        let lengthHead = 0
        let cur = head

        while(cur != null){
            lengthHead++
            cur = cur.next
        }

        let removeIndex = lengthHead - n
        if(removeIndex <= 0) return head.next

        let cur2 = head
        let i = 0
        while(cur2 != null){
            if(i + 1 == removeIndex){
                console.log("cur2: ", cur2.next)
                cur2.next = cur2.next?.next
                break
            }
            cur2 = cur2.next
            i++
        }

        return head
    }
}
