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
        let fast = head?.next

        // reperate 2 part, first and second
        while(fast != null && fast?.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        let second = slow.next
        slow.next = null // cắt đổi head, bây giờ head sẽ đến slow, second -> tail
        
        // console.log("severate finish")

        // reverse second past
        let curSecond = second // con trỏ duyệt qua từng phần tử của second
        let prev = null
        while(curSecond != null){
            let temp = curSecond.next // lưu lại giá trị next đê khi trỏ về giá trị trước đó thì next cũ vẫn giữ được
            curSecond.next = prev
            prev = curSecond
            curSecond = temp
        }

        // console.log("reverse finish")
        let reverseSecond = prev

        // merge first and reverse second
        let first = head
        // console.log("first: ", first)
        // console.log("reverse second: ", reverseSecond)

        while(reverseSecond != null){
            let temp1 = first.next
            let temp2 = reverseSecond.next
            first.next = reverseSecond
            reverseSecond.next = temp1
            first = temp1
            reverseSecond = temp2
        }
    

    }
    //   s     f
    //1, 2, 3, 4
    //1, 2, 3, 4, 5
    //      3       f

}

