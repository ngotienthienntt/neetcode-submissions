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
        // c3 optimize space not using hash map
        // step 1: create list into map -> VD: A -> A' -> B -> B'...
        // step 2: assign random: A'.random = A.random.next
        // tại sao? => vì đã đổi link thành B->B' nên nên khi random trỏ đến B thì B.next chính là B' và chính là giá chị random mới cần gắn
        // xóa original node đi
        if(head == null) return null

        let copyHead1 = head
        while(copyHead1 != null){
            let newNode = new Node(copyHead1.val, copyHead1?.next, copyHead1.random)
            copyHead1.next = newNode
            copyHead1 = newNode?.next
        }


        let copyHead2 = head
        let original = true
        let prev = null
        while(copyHead2 != null){
            if(!original){

                copyHead2.random = prev?.random?.next
            }

            original = !original
            prev = copyHead2
            copyHead2 = copyHead2?.next
        }

        // step 3: tach list cũ về như cũ và list mới ra
        let copyHead3 = head
        let copyNewHead = head?.next

        while(copyHead3 != null){
            let copy = copyHead3?.next
            copyHead3.next = copy?.next

            copy.next = copy?.next?.next ?? null
            
            copyHead3 = copyHead3?.next
        }

        return copyNewHead
    }
}
