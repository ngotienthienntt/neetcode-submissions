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
        let map = new Map()

        while(head){
            let exitItem = map.get(head)

            if(exitItem) return true

            map.set(head, 1)
            head = head.next
        }

        return false
    }
}
