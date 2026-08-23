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
        //c5: recurrsion
        // neu cur == null return n
        // tìm N
        // nếu N - cur = remove item + 1 => remove item

        let N = this.removeItem(head, n, 1)

        if(N - n == 0){
            return head.next
        }
        return head
    }
    
    removeItem(head, n, i){
        // console.log("i: ", i)
        // console.log("head: ", head)
        if(head == null) return --i

        let N = this.removeItem(head.next, n, i + 1)
        // console.log("N: ", N)
        let removeItem = N - n
        if(removeItem == i){
            // console.log("head remove: ", head)
            head.next = head.next?.next
        }

        return N
    }
}
