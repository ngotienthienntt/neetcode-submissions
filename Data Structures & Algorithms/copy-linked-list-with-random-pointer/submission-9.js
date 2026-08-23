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
        // c2: recursion
        // step 1: kiểm tra đã hết link list chưa thì return map về về nếu chưa thì step 2
        // step 2: gắn new node cho copylink list
        // step 3: add map old node và new node vào hashmap
        // step 4: gắn lại random

        let copyHead = new Node(0, null, null)
        let map = new Map()
        this.copyRandomLinkList(head, copyHead, map)
        // console.log("copy head: ", copyHead.next.next)
        return copyHead.next

    }

    copyRandomLinkList(head, copyHead, map){
        // console.log("val: ", head?.val)
        // step 1: return until end
        if(head == null) return map

        // step 2: create copy head
        copyHead.next = new Node(head.val, null, null)

        // step 3: add old node and new node in map
        map.set(head, copyHead.next)
        map = this.copyRandomLinkList(head.next, copyHead.next, map)


        // step 3: add random
        let random = map.get(head.random)
        copyHead.next.random = random
        // console.log("copyHead: ", copyHead?.val)

        return map

    }
}
