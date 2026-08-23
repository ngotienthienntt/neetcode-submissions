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

        // the value is not duplicate?
        // next có trỏ về chính nó hay không? random có trỏ về chính nó?
        // giá trị null là trỏ về cùng 1 node hay chỉ cần là giá trị null?
        // có trường hợp node có nhưng giá trị là null không?
        // c1: dùng hash table
        // step1: iterate link to create new link list with next poiter first and hash old node corresponsing to new node
        // step2: iterate link to asign random link to node by find randome in old node point to old node and hash table store old node -> to a sign random in new node to new node
        if(head == null) return null

        let head2 = head

        let map = new Map()
        let newHead = new Node(head?.val != undefined ? head?.val : null , null, null)
        map.set(head, newHead)
        let cur = newHead
        head = head?.next

        while(head != null){
            cur.next = new Node(head?.val != undefined ? head?.val : null, null, null)
            cur = cur?.next
            map.set(head, cur)
            head = head?.next
        }

        let newHead2 = newHead
        while(head2 != null){
            let random = map.get(head2.random)
            newHead2.random = random
            head2 = head2?.next
            newHead2 = newHead2?.next
        }

        return newHead
    }
}
