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
        let slow = head
        let fast = head

        // find the second part
        while(fast.next){
            slow = slow.next
            fast = fast.next?.next ? fast.next?.next : fast.next
        }
        // console.log("find the second part finish slow: ", slow)
        // console.log("find the second part finish fast: ", fast)



        // reverse second part
        let headSecond = slow != fast ? slow : null
        let reverseSecond = headSecond ? new ListNode(slow.val, null) : null
        while(headSecond?.next){
            let temp = reverseSecond
            let newNode = new ListNode(headSecond.next.val, temp)
            reverseSecond = newNode
            headSecond = headSecond.next
        }

        // console.log("reverse finish: ", reverseSecond)


        // merge
        let first = head
        first = first.next
        let headCopy = head
        headCopy = headCopy
        // console.log("head copy init: ", headCopy)

        while(reverseSecond){
            headCopy.next = new ListNode(reverseSecond.val, first && first != slow ? new ListNode(first.val, null) : null)
            // console.log("head copy assign: ", headCopy)
            // console.log("head: ", head)
            headCopy = headCopy?.next?.next ? headCopy?.next?.next : headCopy?.next
            first = first && first != slow ? first?.next : first
            reverseSecond = reverseSecond.next
        }

        // headCopy = null
        // console.log("head copy finish: ", headCopy)


        // console.log("find head: ", head)

        return head

    }
}
