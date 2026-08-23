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



        // let copyHead3 = head
        // let copyHead4 = head?.next
        // let cur = head?.next

        // while(copyHead4 != null){
        //     copyHead4.next = copyHead4?.next?.next
        //     copyHead4 = copyHead4?.next
        // }

let copyHead4 = head;
let copyHead = head ? head?.next : null

while (copyHead4 !== null) {
    let copy = copyHead4?.next;

    // restore original list
    copyHead4.next = copy?.next ?? null;

    // connect copied list
    if (copy !== null) {
        copy.next = copy?.next?.next ?? null;
    }

    copyHead4 = copyHead4?.next;
}

        return copyHead
    }
}
