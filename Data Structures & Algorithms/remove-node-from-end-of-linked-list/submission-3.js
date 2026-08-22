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
        //c1: brute force
        // khi gán cur = cur.next thì cur chỉ đang lưu địa chỉ của next thôi nên khi cur thay đổi thì cur.next vẫn giữ giá trị cũ chứ k bị thay đổi

        let arr = []
        let cur = head
        while(cur != null){
            arr.push(cur)
            cur = cur.next
        }

        if(n == 1 && arr.length == 1){
            return null
        }

        let removeIndex = arr.length - n
        if(removeIndex <= 0){
            return head.next
        }
        
        arr[removeIndex - 1].next = arr[removeIndex].next

        return head
    }
}
