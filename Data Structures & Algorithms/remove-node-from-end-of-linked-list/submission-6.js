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
        //c4: two pointer
        //2 con trỏ (left, right) duyệt qua head, cách nhau 1 khoảng là n thì khi
        // right chạy qua vị end of head thì left sẽ là vị trí cần thay thế
        // nhưng mình cần vị trí phía trước thì mới xóa vị trí hiện tại được bằng cách
        // head.next = head.next.next
        // => cần tạo một node dummy phía trước head và gán bằng left khi đó khi right = end thì left sẽ đứng phía trước vị trí cần xóa
        // với cách này thì cũng giải quyết được trường hợp vị trí cần xóa là vị trí bắt đầu

        // step 1: cho right chạy trước 1 khoảng n

        // step 2: 
        // tạo dumy node có next trỏ về head và gán = left
        // di chuyển cả left và right cho đến khi right = null(kết thúc)
        // khi đó left đã ở trước vị trí cần xóa

        // step 3: xóa trị trí cần xóa

        // step 4: trả về kết quả là dum.next
        // tại sao k phải head? => vì với trường hợp vị trí thay thể là head[0] thì chỉ có dum.next
        // mới xử lý được

        // step 1:
        let right = head

        while(n > 0){
            right = right.next
            n--
        }

        //step 2:
        let dummy = new ListNode(0, head)
        let left = dummy

        while(right != null){
            left = left.next
            right = right.next
        }

        //step 3
        left.next = left.next?.next

        //step 4
        return dummy.next
    }
}
