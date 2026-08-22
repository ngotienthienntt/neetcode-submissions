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
     * @return {boolean}
     */
    hasCycle(head) {
        let point1 = head
        let point2 = head?.next?.next

        while(point1 && point2){
            if(point1 == point2) return true

            point1 = point1.next
            point2 = point2.next?.next
        }

        return false
    }
}
