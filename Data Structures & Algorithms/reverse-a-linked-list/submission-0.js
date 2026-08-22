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
     * @return {ListNode}
     */
    reverseList(head) {
        let output = null

        while(head != null){
            let newNode = new ListNode(head.val, output)
            output = newNode
            head = head.next
        }

        return output
    }
}
