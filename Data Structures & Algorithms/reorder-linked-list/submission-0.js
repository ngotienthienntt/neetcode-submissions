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
     * @return {void}
     */
    reorderList(head) {
        let arr = []
        let cur = head

        while(cur){
            arr.push(cur)
            cur = cur.next
        }

        let left = 1
        let right = arr.length - 1
        let cur2 = head

        while(left <= right){
            cur2.next = arr[right]
            right--
            cur2 = cur2.next

            if(left <= right){
                cur2.next = arr[left]
                left++
                cur2 = cur2.next
            }
        }
        cur2.next = null


        return head
    }
}
