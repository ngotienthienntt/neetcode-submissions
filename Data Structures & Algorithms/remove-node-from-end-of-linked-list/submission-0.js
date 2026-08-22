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
        // có bao giờ n > sz không?
        // c1: lưu list vào array, dựa vào index của array để xác định nth và xóa đi
        // c2: reverse link and then find nth from the head
        // 

        // reverse
        let curHead = head
        let prev = null
        while(curHead != null){
            let temp = curHead.next
            curHead.next = prev
            prev = curHead
            curHead = temp
        }

        console.log("prev: ", prev)

        let reverseHead = prev
        let i = 1
        let prevNode = null
        while(reverseHead){
            
            if(i == n){
                if(n == 1){
                    prev = reverseHead.next
                    break;
                }
                prevNode.next = reverseHead.next
            }
            i++
            prevNode = reverseHead 
            reverseHead = reverseHead.next
        }

        console.log("prev reverse: ", prev)

        let cur2Head = prev
        let prev2 = null
        while(cur2Head != null){
            let temp = cur2Head.next
            cur2Head.next = prev2
            prev2 = cur2Head
            cur2Head = temp
        }

        return prev2

    }
}
