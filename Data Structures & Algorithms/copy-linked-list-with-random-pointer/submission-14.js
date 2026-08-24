// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        // use random to to store instead of map
        // A -> B -> C
        // step 1: lưu A' vào random A, =. nếu vậy thì random A bị ất
        // => cho A'.next sẽ là old random A
        // => ta có A' = A.random

        // step 2: tìm và gán random của A'
        // thì phải tìm old random A => A'.next
        // đã có old random A thì giờ tìm new random A như thế nào?
        //dựa vào A' = A.random => Node' = Node.random
        // old random A thì cũng là  1 Node => oldRandomA.random(A.random) = new random A(A')

        // step 3: nối A'.next = B'
        // dựa vào A -> B mà B.random = B' => A'.next = A.next.random

        // step 1:
        if(head === null) return null
        let copyHead1 = head

        while(copyHead1 != null){
            let copy = copyHead1.random
            copyHead1.random = new Node(copyHead1.val)
            copyHead1.random.next = copy
            copyHead1 = copyHead1.next
        }
        console.log("step 1 finish")
        //step 2: 
        let copyHead2 = head
        let newHead = head.random

        while(copyHead2 != null){
            // console.log("copyHead2.random: ", copyHead2.random.val)
            // console.log("copyHead2.random point: ", copyHead2?.random?.next?.random?.val)
            // gán random A'
            copyHead2.random.random = copyHead2?.random?.next?.random

            // gán A'.next = B'
            // let copy = copyHead2?.random?.next
            // copyHead2.random.next = copyHead2?.next?.random

            // trả A.random về giá trị cũ// sai lầm khi gắn giá trị cũ về ở đây vì nếu có random 
            // ở sau trỏ tới sẽ không trỏ được tới node' vì đã mất mapping A.random = A'
            // copyHead2.random = copy

            // đi tới item tiếp theo
            copyHead2 = copyHead2?.next
        }

        // step 3
        let copyHead3 = head
        while(copyHead3 != null){
            let copy = copyHead3.random?.next
            copyHead3.random.next = copyHead3.next?.random ?? null // nếu k viết như thế này mà chỉ có copyHead3.next?.random thì khi đó next = undefined và sẽ gây ra lỗi khi đọc lại k phải giá tị null
            copyHead3.random = copy
            copyHead3 = copyHead3.next
        }

        console.log("step 2 finish")
        console.log("đã finish rồi mà: ", newHead)


        return newHead
    }
}
